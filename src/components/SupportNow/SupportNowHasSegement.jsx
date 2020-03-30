import React, { useEffect, useState } from 'react';
import { actGetSupportNowHasType } from '../../redux/supportnow/support-now.action';
import { connect } from 'react-redux';
import { SUPPORT_NOW_PAGE_SIZE } from '../../configs/const';
const SupportNowHasSegement = ({ segementType, actGetFAQs }) => {
  const pageSize = SUPPORT_NOW_PAGE_SIZE;
  const [pageIndex, setPageIndex] = useState(1);
  useEffect(() => {
    actGetFAQs({ ...getPayload(), firstTime: true });
  }, [segementType]);
  const getPayload = () => {
    return {
      page: pageIndex,
      maxItems: pageSize,
      customerType: segementType
    }
  }
  return (
    <div>Has type</div>
  )
}

const mapDispatchToProps = dispatch => ({
  actGetFAQs: data => dispatch(actGetSupportNowHasType(data)),
})

export default connect(null, mapDispatchToProps)(SupportNowHasSegement);
