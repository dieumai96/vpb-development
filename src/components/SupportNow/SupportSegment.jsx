import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actSetSupportNowSegementType } from '../../redux/supportnow/support-now.action';

class SupportSegment extends Component {
  constructor() {
    super();
    this.state = {
      segment: [
        {
          title: 'Khách hàng cá nhân',
          link: 'segement-1',
          type: 0,
        },
        {
          title: 'Hộ kinh doanh',
          link: 'segement-2',
          type: 1,
        },
        {
          title: 'Doanh nghiệp',
          link: 'segement-3',
          type: 2,
        },
        {
          title: 'Nhà đầu tư',
          link: 'segement-4',
          type: 5,
        }
      ]
    }
  }
  changeType = (segementRef, idx, type) => {
    this.removeClassActive(segementRef, idx);
    this.props.actSetSupportNowSegementType(type);
  }
  removeClassActive = (segementRef, idx) => {
    segementRef.map(item => item.current.classList.remove('active'));
    segementRef[idx].current.classList.add('active');
  }
  render() {
    const { segment } = this.state;
    const segementRef = segment.map(item => React.createRef());
    return (
      <div className="support-segment-content">
        <h4>Chọn phân khúc</h4>
        <div className="support-segment-content__detail nav-tab-level2__link">
          {
            segment.map((item, idx) => (
              <span className="range" key={idx} onClick={() => this.changeType(segementRef, idx, item.type)}>
                <a data-link={'segement-' + (idx + 1)} ref={segementRef[idx]} >{item.title}</a>
              </span>
            ))
          }
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actSetSupportNowSegementType: (type) => {
      dispatch(actSetSupportNowSegementType(type));
    }
  }
}
export default connect(null, mapDispatchToProps)(SupportSegment);