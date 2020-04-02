import React from 'react';
import { actAddTag, actRemoveTag } from '../../redux/supportnow/support-now.action';
import { connect } from 'react-redux';
import { selectSupportNowTag } from '../../redux/supportnow/support-now.selector';
import { createStructuredSelector } from 'reselect';

const SupportNowMenuItem = ({ item, index, actAddTag, actRemoveTag, selectSupportNowTag }) => {
  const menuParentChange = (event) => {
    const parentMenuOption = {
      parentId: item.parentId,
      type: 'parent',
    };
    if (event.target.checked) {
      actAddTag({
        ...parentMenuOption,
        action: 'add'
      })
    } else {
      actRemoveTag({
        ...parentMenuOption,
        action: 'remove'
      })
    }
  }

  return (
    <div className="support-categories-desktop__list__items">
      <div className="title">
        <input className="vp-checkbox parent" type="checkbox" id={'items-' + index} onChange={(event) => menuParentChange(event)} />
        <label htmlFor={'items-' + index}>
          {item?.Title}
        </label>
      </div>
      <div className="close show">
        <a href="#" data-toggle="collapse" data-target={'#sub-list-' + index}>
          <i className="icon-chevron-down"></i>
        </a>
      </div>
      <div className="sub-list collapse show" id={'sub-list-' + index}>
        {item?.TagItems?.length ? (
          item.TagItems.map((childItem, indexChild) => (
            <div className="sub-list__items" key={indexChild}>
              <input className="vp-checkbox child" type="checkbox" id={'items-' + index + '-' + indexChild} />
              <label htmlFor={'items-' + index + '-' + indexChild}>
                {childItem.Title}
              </label>
            </div>
          ))
        ) : null}
      </div>
    </div>
  )
}

const mapPropsToState = createStructuredSelector({
  selectSupportNowTag: selectSupportNowTag,
});

const mapDispatchToProps = dispatch => ({
  actAddTag: (data) => dispatch(actAddTag(data)),
  actRemoveTag: (data) => dispatch(actRemoveTag(data)),
})

export default connect(mapPropsToState, mapDispatchToProps)(SupportNowMenuItem);
