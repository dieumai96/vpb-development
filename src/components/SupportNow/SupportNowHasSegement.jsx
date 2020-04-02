import React, { useEffect, useState } from 'react';
import { actGetSupportNowHasType, actUpdateMenuCheckboxState } from '../../redux/supportnow/support-now.action';
import { selectSupportNowMenu, selectSupportNowHasType, selectSupportNowTag } from '../../redux/supportnow/support-now.selector';
import { connect } from 'react-redux';
import { SUPPORT_NOW_PAGE_SIZE } from '../../configs/const';
import { createStructuredSelector } from 'reselect';
import SupportNowMenuItem from './SupportNowMenuItem';
import SupportNowTag from './SupportNowTag';

const SupportNowHasSegement = ({ segementType, actGetFAQs, supportNowMenu, selectSupportNowTag, actUpdateMenu }) => {
  const pageSize = SUPPORT_NOW_PAGE_SIZE;
  const [pageIndex, setPageIndex] = useState(1);

  useEffect(() => {
    actGetFAQs({ ...getPayload() });
  }, [segementType.type]);

  useEffect(() => {
    actUpdateMenu({});
  }, [selectSupportNowTag?.length])


  const getPayload = () => {
    return {
      page: pageIndex,
      maxItems: pageSize,
      customerType: segementType.type
    }
  }



  return (
    <div className="nav-tab-level2__content__item-segment-1">
      <div className="support-now-content__detail tab-pane active">
        <div className="support-filter-categories-desktop">
          <div className="support-categories-desktop">
            <div className="support-categories-desktop__delete">
              <p><a href="">Lọc lại</a></p>
            </div>
            <div className="support-categories-desktop__title">
              <p>SẢN PHẨM & DỊCH VỤ</p>
            </div>
            <div className="support-categories-desktop__list">
              {supportNowMenu?.length ?
                supportNowMenu.map((item, index) => (
                  <SupportNowMenuItem key={index} item={item} index={index} />
                )) : null}
            </div>
          </div>
        </div>
        <div className="support-now-content__result">
          <SupportNowTag segementType={segementType} />
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  actGetFAQs: data => dispatch(actGetSupportNowHasType(data)),
  actUpdateMenu: data => dispatch(actUpdateMenuCheckboxState(data)),
})

const mapPropsToState = createStructuredSelector({
  supportNowMenu: selectSupportNowMenu,
  supportNowData: selectSupportNowHasType,
  selectSupportNowTag: selectSupportNowTag,
});

export default connect(mapPropsToState, mapDispatchToProps)(SupportNowHasSegement);
