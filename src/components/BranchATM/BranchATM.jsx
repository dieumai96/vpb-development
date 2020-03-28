import React, { Fragment, useEffect } from 'react'
import BreadCrumb from '../Breadcrumd/Breadcrumd';
import LeftContent from './LeftContent';
import TalkToUs from '../TalkToUs/TalkToUs';
import Map from './Map';
import { connect } from 'react-redux';
import { actGetLocaltion } from '../../redux/atm/atm.action';
const BranchATM = ({ actGetLocaltion }) => {
  useEffect(() => {
    shareLocaltion();
  }, []);

  const shareLocaltion = () => {
    navigator.geolocation.getCurrentPosition(position => {
      let localtion = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
      actGetLocaltion(localtion);
    }, error => {
      actGetLocaltion(null);
    }, {
      timeout: 1000,
      maximumAge: 10000,
      enableHighAccuracy: true
    })
  }
  return (
    <Fragment>
      <div className="container">
        <BreadCrumb />
      </div>
      <div className="branch-atm">
        <LeftContent />
        <Map />
      </div>
      <TalkToUs />
    </Fragment>
  )
}

const mapDispatchToProps = dispatch => ({
  actGetLocaltion: localtion => dispatch(actGetLocaltion(localtion)),
})
export default connect(null, mapDispatchToProps)(BranchATM);
