import React, { Component } from 'react'

export default class SupportSegment extends Component {
  render() {
    return (
      <div className="support-segment-content">
        <h4>Chọn phân khúc</h4>
        <div className="support-segment-content__detail nav-tab-level2__link"><span className="range" data-index="0"><a data-link="segment-1">Khách hàng cá nhân</a></span><span className="range" data-index="1"><a data-link="segment-2">Hộ kinh doanh</a></span><span className="range" data-index="2"><a data-link="segment-3">Doanh nghiệp</a></span>
          <span
            className="range" data-index="5"><a data-link="segment-4">Nhà đầu tư</a></span>
        </div>
      </div>
    )
  }
}
