import React from 'react'

const LeftContent = () => {
  return (
    <div className="nav-map">
      <div className="nav-map__top">
        <div className="autocomplete"><input className="form-control" id="autocomplete-place" type="text" placeholder="Nhập địa chỉ tìm kiếm" autoComplete="off" />
          <div className="autocomplete-items" id="autocomplete-placeautocomplete-list"></div>
        </div>
        <div className="search-location clearfix">
          <div className="provincial"></div>
          <div className="district"></div>
        </div>
        <div className="select-type-atm">
          <div className="select-type-atm__item select-type-atm__item--branch"><input id="type-atm-1" type="checkbox" checked="checked" data-value="IsBranch" /><label htmlFor="type-atm-1">Chi nhánh</label></div>
          <div className="select-type-atm__item select-type-atm__item--atm"><input id="type-atm-2" type="checkbox" checked="checked" data-value="IsATM" /><label htmlFor="type-atm-2">ATM/CDM</label></div>
          <div className="select-type-atm__item select-type-atm__item--household"><input id="type-atm-3" type="checkbox" data-value="IsHousehold" /><label htmlFor="type-atm-3">Hộ KD</label></div>
          <div className="select-type-atm__item select-type-atm__item--sme"><input id="type-atm-4" type="checkbox" data-value="IsSME" /><label htmlFor="type-atm-4">DM vừa & nhỏ</label></div>
        </div><a className="btn btn-outline-primary search button-search" href="#">TÌM KIẾM</a></div>
      <div className="nav-map__bottom display-desktop" style={{ marginTop: '15px' }}>
        <p className="count-response"></p>
        {/* <ul className="branch-atm-response" id="scroll"></ul>  */}
      </div>
    </div>
  )
}

export default LeftContent
