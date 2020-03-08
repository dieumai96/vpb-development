import React, { Fragment } from 'react'
import BreadCrumb from '../Breadcrumd/Breadcrumd';
import LeftContent from './LeftContent';
import TalkToUs from '../TalkToUs/TalkToUs';
import Map from './Map';
const BranchATM = () => {
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

export default BranchATM
