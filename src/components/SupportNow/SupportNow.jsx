import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import MastHead from '../MastHead/MastHead';
import SupportListBar from './SupportListBar';
import SupportNowSearch from './SupportSearch';
import SupportSegment from './SupportSegment';
import SupportNotType from './SupportNotType';
import SupportNowHasSegement from './SupportNowHasSegement';
import { createStructuredSelector } from 'reselect';
import { selectSupportSegementType } from '../../redux/supportnow/support-now.selector';
const SupportNow = ({ segementType }) => {
  return (
    <Fragment>
      <MastHead />
      <section className="support-now-section">
        <SupportListBar />
        <div className="support-now-content nav-tab__content">
          <div className="nav-tab-level2 support-FAQs-content" id="support-FAQs-content">
            <div className="container">
              <SupportNowSearch />
              <SupportSegment />
              {segementType == null ?
                <SupportNotType /> :
                <div className="nav-tab-level2__content">
                  <SupportNowHasSegement segementType={segementType} />
                </div>
              }
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}
const mapPropsToState = createStructuredSelector({
  segementType: selectSupportSegementType,
})
export default connect(mapPropsToState)(SupportNow);
