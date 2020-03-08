import React from 'react';
import InputVPB from '../../Shared/InputVPB';
import SelectVPB from '../../Shared/SelectVPB';

const LeftContent = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]


  const onChangeInput = (value) => {
    console.log(value);
  }
  const onChangeSelect = (e) => {
    console.log('1s', e);
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
            <SelectVPB options={options} onChangeSelect={onChangeSelect} placeholder="Chọn tỉnh"/>
          </div>
          <div className="district">
            <SelectVPB options={options} onChangeSelect={onChangeSelect} placeholder="Chọn quận/huyện"/>
          </div>
        </div>
        <div className="select-type-atm">
          <div className="select-type-atm__item select-type-atm__item--branch"><input id="type-atm-1" type="checkbox" checked="checked" />
            <label htmlFor="type-atm-1">Chi nhánh</label>
          </div>
          <div className="select-type-atm__item select-type-atm__item--atm"><input id="type-atm-2" type="checkbox" checked="checked" />
            <label htmlFor="type-atm-2">ATM/CDM</label>
          </div>
          <div className="select-type-atm__item select-type-atm__item--household"><input id="type-atm-3" type="checkbox" />
            <label htmlFor="type-atm-3">Hộ KD</label>
          </div>
          <div className="select-type-atm__item select-type-atm__item--sme"><input id="type-atm-4" type="checkbox" />
            <label htmlFor="type-atm-4">DM vừa & nhỏ</label>
          </div>
        </div><a className="btn btn-outline-primary search button-search" href="#">TÌM KIẾM</a></div>
      <div className="nav-map__bottom display-desktop" style={{ marginTop: '15px' }}>
        <p className="count-response"></p>
        {/* <ul className="branch-atm-response" id="scroll"></ul>  */}
      </div>
    </div>
  )
}

export default LeftContent
