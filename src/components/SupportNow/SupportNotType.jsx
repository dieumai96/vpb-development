import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { actGetSupportNowNoType } from '../../redux/supportnow/support-now.action';
import { SUPPORT_NOW_PAGE_SIZE } from '../../configs/const';
import { createStructuredSelector } from 'reselect';
import { selectSupportNowNoType } from '../../redux/supportnow/support-now.selector';
import QuestionItem from './QuestionItem';
const SupportNotType = ({ actGetFAQs, faqList }) => {
  const pageSize = SUPPORT_NOW_PAGE_SIZE;
  const [pageIndex, setPageIndex] = useState(1);

  useEffect(() => {
    actGetFAQs(getPayload());
  }, []);

  const getPayload = () => {
    return {
      page: pageIndex,
      maxItems: pageSize
    }
  }
  return (
    <div className="suggest-question-paging">
      <div className="support-suggest-question-content">
        <div className="support-suggest-question-content__title">
          <h3>CÂU HỎI PHỔ BIẾN</h3>
        </div>
        <div className="support-suggest-question-content__result">
          <div className="support-suggest-question-content__detail" id="accordionSuggestQuestion">
            {faqList?.supportNowNoType?.length ?
              faqList.supportNowNoType.map((item, index) =>
                (<QuestionItem key={index} item={item} index={index} />))
              : null}
          </div>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  actGetFAQs: data => dispatch(actGetSupportNowNoType(data)),
})

const mapPropsToState = createStructuredSelector({
  faqList: selectSupportNowNoType,
})


export default connect(mapPropsToState, mapDispatchToProps)(SupportNotType);
