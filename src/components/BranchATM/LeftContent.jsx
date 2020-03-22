import React, { useReducer, useEffect, useState, useRef } from 'react';
import InputVPB from '../../Shared/InputVPB';
import SelectVPB from '../../Shared/SelectVPB';
import { BranchATMReducer } from './context/BranchATM.reducer';
import { endPoints } from '../../configs/endpoint';
import { buildUrl } from '../../services/branch-atm.service';
import ResponseItemATM from './ReponseItemATM';
import { connect } from 'react-redux';
import { actGetResponseAtmList } from '../../redux/atm/atm.action';
import axios from 'axios';
import { createStructuredSelector } from 'reselect';
import { selectAtmList } from '../../redux/atm/atm.selector';
import { generateMarker, clickToMarker } from './map/Map.service';
const LeftContent = ({ actGetResponseAtmList, responseATMList }) => {
  const [{ seachPayload }, dispatch] = useReducer(BranchATMReducer, {
    seachPayload: {
      keyword: '',
      city: '',
      district: '',
    },
    response: [],
  });

  const [searchTypeATM, setSearchTypeATM] = useState({
    IsBranch: true,
    IsATM: true,
    IsHousehold: false,
    IsSME: false
  })


  const branchATMType = [
    { type: 'branch', label: 'Chi nhánh' },
    { type: 'atm', label: 'ATM/CDM' },
    { type: 'household', label: 'Hộ KD' },
    { type: 'sme', label: 'DM vừa & nhỏ' },
  ]

  const typeATMRef = useRef(Object.keys(searchTypeATM).map(() => React.createRef()));

  const [provinceList, setProvinceList] = useState([]);
  const [districtList, setDistrictList] = useState([]);
  const [topCity, setTopCity] = useState(['']);

  useEffect(() => {
    getDataInitial().then(res => {
      getListProvince(res[1]);
      if (res[0].data.branches_and_atm && res[0].data.branches_and_atm) {
        let listData = res[0].data.branches_and_atm;
        let headQuarters = listData.filter(item => item.Address == res[0].data.headquarters);
        let newListData = [
          ...headQuarters,
          ...listData.filter(item => item.Address != res[0].data.headquarters),
        ]
        mapTypeATM(newListData, headQuarters);
      }
    });
  }, []);

  const getDataInitial = () => {
    return Promise.all([
      axios.get(`${endPoints}branchandatm/searchbranchesandatms${buildUrl(seachPayload)}`),
      axios.get(`${endPoints}branchandatm/getallcitiesanddistricts`)
    ])
  }

  const getListProvince = (res) => {
    if (res.data && res.data.cities && res.data.cities.length) {
      const topCities = res.data.top_cities;
      setTopCity(res.data.top_cities[0]);
      const provinceIsNotOnTop = res.data.cities.filter(province => !topCities.includes(province.Key));
      const provinceOnTop = res.data.cities.filter(province => topCities.includes(province.Key));
      let newListProvince = [...provinceList, { 'Key': topCities[0] }, ...provinceOnTop, ...provinceIsNotOnTop];
      newListProvince = newListProvince.map(item => {
        return {
          ...item,
          name: 'province',
          label: item.Key
        }
      })
      setProvinceList(newListProvince);
    }
  }

  const getListDistrict = (res) => {
    if (res && res.Value && res.Value.length) {
      let newListDistrict = res.Value.map(item => {
        return {
          label: item,
          name: 'district'
        }
      })
      setDistrictList(newListDistrict);
    }
  }

  const onChangeInput = (value) => {
    dispatch({ type: 'update_payload', payload: { ...seachPayload, keyword: value } })
  }
  const onChangeSelect = (value) => {

    switch (value.name) {
      case 'province': {
        getListDistrict(value);
        dispatch({ type: 'update_payload', payload: { ...seachPayload, city: value.label == topCity ? '' : value.label } })
        break;
      }
      case 'district': {
        dispatch({ type: 'update_payload', payload: { ...seachPayload, district: value.label } })
        break;
      }
      default: {
        break;
      }
    }
  }

  const changeTypeAtm = (event, index) => {
    let getKeyChecked;
    let newObj = searchTypeATM;
    Object.keys(searchTypeATM).forEach((key, idx) => {
      if (idx == index) {
        getKeyChecked = key;
      }
    })
    if (event.target.checked) {
      newObj[`${getKeyChecked}`] = true;
    } else {
      newObj[`${getKeyChecked}`] = false;
    }
    if (newObj.IsATM) {
      newObj.IsCDM = true;
    } else {
      newObj.IsCDM = false;
    }
    setSearchTypeATM({ ...newObj });
  }

  const searchATM = (e) => {
    e.preventDefault();
    axios.get(`${endPoints}branchandatm/searchbranchesandatms${buildUrl(seachPayload)}`).then(res => {
      let listData = res.data.branches_and_atm;
      let headQuarters = listData.filter(item => {
        return item.Address == res.data.headquarters;
      });
      let newListData = [
        ...headQuarters,
        ...listData.filter(item => item.Address != res.data.headquarters),
      ]
      mapTypeATM(newListData, headQuarters);
    })
  }

  const mapTypeATM = (listData, headQuarters) => {
    let searchType = searchTypeATM;
    if (searchType.IsCDM == undefined) {
      searchType.IsCDM = searchType.IsATM;
    }
    let listKeyTypeATM = Object.keys(searchTypeATM).map(key => {
      if (
        searchTypeATM[key]
      ) {
        return key;
      } else return;

    }).filter(key => key != undefined);
    listData = listData.filter(item => checkItemByType(listKeyTypeATM, item));
    actGetResponseAtmList({
      listData,
      headQuarters,
    });
  }

  const checkItemByType = (listType, item) => {
    let checkType = false;
    listType.forEach(key => {
      if (item[key]) {
        checkType = true;
      }
    })
    return checkType;
  }

  const onClickToAtmItem = (item) => {
    let atmInfomation = {
      lat: Number(item.Latitude),
      lng: Number(item.Longitude),
      ...item
    };
    let marker = generateMarker(atmInfomation);
    clickToMarker(atmInfomation, marker);
  }

  return (
    <div className="nav-map">
      <div className="nav-map__top">
        <div className="autocomplete">
          <InputVPB nameClass="form-control" type="text" place="Nhập địa chỉ tìm kiếm" auto="off" onChangeInput={onChangeInput} />
          <div className="autocomplete-items" id="autocomplete-placeautocomplete-list"></div>
        </div>
        <div className="search-location clearfix">
          <div className="provincial">
            <SelectVPB options={provinceList} onChangeSelect={onChangeSelect} placeholder="Chọn tỉnh" />
          </div>
          <div className="district">
            <SelectVPB options={districtList} onChangeSelect={onChangeSelect} placeholder="Chọn quận/huyện" />
          </div>
        </div>
        <div className="select-type-atm">
          {branchATMType.map((item, index) => (
            <div key={index} className={'select-type-atm__item select-type-atm__item--' + item.type}>
              <input ref={typeATMRef.current[index]} id={'type-atm-' + (index + 1)} type="checkbox" onChange={(event) => changeTypeAtm(event, index)} defaultChecked={(index == 0 || index == 1) ? true : false} />
              <label htmlFor={'type-atm-' + (index + 1)}>{item.label}</label>
            </div>
          ))}
        </div><a className="btn btn-outline-primary search button-search" href="#" onClick={(e) => searchATM(e)}> TÌM KIẾM</a></div>
      <div className="nav-map__bottom display-desktop" style={{ marginTop: '15px' }}>
        <p className="count-response"></p>
        {responseATMList.listData && responseATMList.listData.length ? (
          <ul className="branch-atm-response" id="scroll">
            {responseATMList.listData.map((item, index) => (
              <ResponseItemATM clickAtm={onClickToAtmItem} key={index} item={item} />
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  )
}

const mapPropsToState = createStructuredSelector({
  responseATMList: selectAtmList,
})

const mapDispatchToProps = dispatch => ({
  actGetResponseAtmList: atmList => dispatch(actGetResponseAtmList(atmList)),
})

export default connect(mapPropsToState, mapDispatchToProps)(LeftContent);
