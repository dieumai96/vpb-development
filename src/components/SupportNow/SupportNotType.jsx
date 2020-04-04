import React, { useEffect, useState, useMemo } from 'react';
import { connect } from 'react-redux';
import { actGetSupportNowNoType } from '../../redux/supportnow/support-now.action';
import { SUPPORT_NOW_PAGE_SIZE } from '../../configs/const';
import { createStructuredSelector } from 'reselect';
import { selectSupportNowNoType } from '../../redux/supportnow/support-now.selector';
import QuestionItem from './QuestionItem';
import ServerPaging from '../../smart-ui/Server-Paging';
const SupportNotType = ({ actGetFAQs, faqList }) => {
  const pageSize = SUPPORT_NOW_PAGE_SIZE;
  const [pageIndex, setPageIndex] = useState(1);
  const totalPage = useMemo(() => Math.ceil(faqList?.totalItem / pageSize), [faqList.totalItem]);
  useEffect(() => {
    actGetFAQs(getPayload());
  }, [pageIndex]);

  const getPayload = () => {
    return {
      page: pageIndex,
      maxItems: pageSize
    }
  }

  const changePage = (pageIndex) => {
    setPageIndex(pageIndex);
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
      <ServerPaging totalPage={totalPage} changePageIndex={changePage} />
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
