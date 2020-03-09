import React, { useReducer, useEffect, useState, useRef } from 'react';
import InputVPB from '../../Shared/InputVPB';
import SelectVPB from '../../Shared/SelectVPB';
import { BranchATMReducer } from './context/BranchATM.reducer';
import { endPoints } from '../../configs/endpoint';
import { buildUrl } from '../../services/branch-atm.service';
import axios from 'axios';
const LeftContent = () => {
  const [{ seachPayload }, dispatch] = useReducer(BranchATMReducer, {
    seachPayload: {
      keyword: '',
      city: '',
      district: '',
    }
  });

  const [searchTypeATM, setSerchTypeATM] = useState(({
    IsBranch: true,
    IsATM: true,
    IsCDM: true,
    IsHousehold: false,
    IsSME: false
  }))

  const typeATMRef = useRef(Object.keys(searchTypeATM).map(key => React.createRef()));

  const [provinceList, setProvinceList] = useState([]);
  const [districtList, setDistrictList] = useState([]);

  useEffect(() => {
    getDataInitial().then(data => {
      getListProvince(data[1]);
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
        dispatch({ type: 'update_payload', payload: { ...seachPayload, city: value.label } })
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

  const searchATM = (e) => {
    e.preventDefault();
    console.log(seachPayload);
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
          <div className="select-type-atm__item select-type-atm__item--branch"><input id="type-atm-1" type="checkbox" defaultChecked="true" />
            <label htmlFor="type-atm-1">Chi nhánh</label>
          </div>
          <div className="select-type-atm__item select-type-atm__item--atm"><input id="type-atm-2" type="checkbox" defaultChecked="true" />
            <label htmlFor="type-atm-2">ATM/CDM</label>
          </div>
          <div className="select-type-atm__item select-type-atm__item--household"><input id="type-atm-3" type="checkbox" />
            <label htmlFor="type-atm-3">Hộ KD</label>
          </div>
          <div className="select-type-atm__item select-type-atm__item--sme"><input id="type-atm-4" type="checkbox" />
            <label htmlFor="type-atm-4">DM vừa & nhỏ</label>
          </div>
        </div><a className="btn btn-outline-primary search button-search" href="#" onClick={(e) => searchATM(e)}> TÌM KIẾM</a></div>
      <div className="nav-map__bottom display-desktop" style={{ marginTop: '15px' }}>
        <p className="count-response"></p>
        {/* <ul className="branch-atm-response" id="scroll"></ul>  */}
      </div>
    </div>
  )
}

export default LeftContent
