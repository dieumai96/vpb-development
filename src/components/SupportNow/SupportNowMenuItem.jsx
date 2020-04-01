import React from 'react';

const SupportNowMenuItem = ({ item, index }) => {
  return (
    <div className="support-categories-desktop__list__items">
      <div className="title">
        <input className="vp-checkbox parent" type="checkbox" id={'items-' + index} />
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

export default SupportNowMenuItem
