import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actSetSupportNowSegementType } from '../../redux/supportnow/support-now.action';
import { selectSupportSegementType } from '../../redux/supportnow/support-now.selector';
import { createStructuredSelector } from 'reselect';

class SupportSegment extends Component {
  constructor() {
    super();
    this.state = {
      segment: [
        {
          title: 'Khách hàng cá nhân',
          link: 'segement-1',
          type: 0,
          isActive: false,
        },
        {
          title: 'Hộ kinh doanh',
          link: 'segement-2',
          type: 1,
          isActive: false,
        },
        {
          title: 'Doanh nghiệp',
          link: 'segement-3',
          type: 2,
          isActive: false,
        },
        {
          title: 'Nhà đầu tư',
          link: 'segement-4',
          type: 5,
          isActive: false,
        }
      ]
    }
  }
  changeType = (idx, { type, title }) => {
    this.findSegementActive(idx);
    this.props.actSetSupportNowSegementType({ type, title });
  }

  findSegementActive = (idx) => {
    let newListSegement = [...this.state.segment];
    newListSegement.forEach((item, index) => {
      if (index == idx) {
        item.isActive = true;
      } else {
        item.isActive = false;
      }
    })
    this.setState({
      segement: newListSegement
    })
  }

  removeAllSegementActive = () => {
    let newListSegement = [...this.state.segment];
    newListSegement.forEach(item => item.isActive = false);
    this.setState({
      segement: newListSegement
    })
  }

  componentWillReceiveProps = (props) => {
    if (props.segementType == null) {
      this.removeAllSegementActive();
    }
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
              <span className="range" key={idx} onClick={() => this.changeType(idx, { type: item.type, title: item.title })}>
                <a data-link={'segement-' + (idx + 1)} className={item.isActive ? 'active' : ''}>{item.title}</a>
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
    actSetSupportNowSegementType: ({ type, title }) => {
      dispatch(actSetSupportNowSegementType({ type, title }));
    }
  }
}

const mapPropsToState = createStructuredSelector({
  segementType: selectSupportSegementType,
});

export default connect(mapPropsToState, mapDispatchToProps)(SupportSegment);