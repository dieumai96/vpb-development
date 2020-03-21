import React, { useMemo } from 'react';
import { isMobile } from '../../utils/dom';
const ReponseItemATM = ({ item, clickAtm }) => {

  const isDetectMobile = useMemo(() => isMobile(window.innerWidth), []);

  const atmTypeStyle = (type) => {
    if (item[`${type}`]) {
      return {
        display: 'initial'
      }
    } else {
      return {
        display: 'none'
      }
    }
  };

  const clickItem = () => {
    clickAtm(item);
  }

  return (
    <li className="branch-atm-response__item" onClick={clickItem} >
      {
        item.Name == null ? null : <h5 className="name">{item.Name}</h5>
      }
      <div className="vpb-tag">
        <span className="green-border" style={atmTypeStyle('IsBranch')}>PGD</span>
        <span className="red-border" style={atmTypeStyle('IsATM')}>ATM</span>
        <span className="red-border" style={atmTypeStyle('IsCDM')}>CDM</span>
        <span className="blue-border" style={atmTypeStyle('IsHousehold')}>KD</span>
        <span className="orange-border" style={atmTypeStyle('IsSME')} >SME</span>
      </div>
      {
        item.Address == null ? '' : <p className="address">{item.Address}</p>
      }
      {
        isDetectMobile ?
          (<p className="phone">
            <a href={'tel:' + item.Phone}>{item.Phone}</a>
          </p>) :
          (<p className="phone" >Điện thoại:
            <a href={'tel:' + item.Phone}>{item.Phone}</a>
          </p>)
      }
    </li >
  )
}

export default ReponseItemATM
