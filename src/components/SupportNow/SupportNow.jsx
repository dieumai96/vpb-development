import React, { Fragment } from 'react';
import MastHead from '../MastHead/MastHead';
import SupportListBar from './SupportListBar';
import SupportNowSearch from './SupportSearch';
import SupportSegment from './SupportSegment';
import SupportNotType from './SupportNotType';
const SupportNow = () => {
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
              <SupportNotType />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default SupportNow
