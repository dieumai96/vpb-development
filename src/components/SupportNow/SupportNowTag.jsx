import React, { useMemo, useRef } from 'react';
import { createStructuredSelector } from 'reselect';
import { selectSupportNowHasType } from '../../redux/supportnow/support-now.selector';
import QuestionItem from './QuestionItem';
import { connect } from 'react-redux';
import { actResetSupportNowSegement } from '../../redux/supportnow/support-now.action';

const SupportNowTag = ({ supportNowData, segementType, actResetSegement }) => {
  let { totalCount, data } = supportNowData;
  const totalItem = useMemo(() => totalCount > 0 ? totalCount : 0, [supportNowData.totalCount]);

  const removeSegement = (event) => {
    event.preventDefault();
    actResetSegement();
  }
  return (
    <div className="support-tag-content">
      <div className="support-tag-content__title"><input id="result-text" type="hidden" value="Tìm thấy {result} kết quả:" />
        <p className="count-response-support">Tìm thấy {totalItem} kết quả:</p>
        <p className="no-result">Không tìm thấy kết quả nào</p>
      </div>
      <div className="support-tag-content__detail">
        <span className="support-tag-content__detail__items">
          {segementType.title}
          <a href="" className="close-button close-range" onClick={(event) => removeSegement(event)}>
            <i className="icon-close"></i>
          </a>
        </span>
      </div>
      <div className="support-question-content" id="accordionFAQs">
        {data?.length ?
          data.map((item, index) => (
            <QuestionItem key={index} item={item} index={index} />
          )) : null
        }
      </div>
    </div>
  )
}
const mapPropsToState = createStructuredSelector({
  supportNowData: selectSupportNowHasType
});

const mapDispatchToProps = dispatch => ({
  actResetSegement: () => dispatch(actResetSupportNowSegement()),
})

export default connect(mapPropsToState, mapDispatchToProps)(SupportNowTag);
