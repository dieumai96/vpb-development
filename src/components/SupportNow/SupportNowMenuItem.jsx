import React, { useState, useEffect } from 'react';
import * as uuid from 'uuid';

const SupportNowMenuItem = ({ item, index }) => {
  const [menuItem, setMenuItem] = useState({});

  useEffect(() => {
    setIdAutomaticMenuItem();
  }, [item.Title]);

  const setIdAutomaticMenuItem = () => {
    let idAutomatic = uuid.v4();
    let newItem = { ...item };
    newItem.parentId = idAutomatic;
    if (newItem?.TagItems?.length) {
      newItem.TagItems.forEach(item => {
        item.parentId = idAutomatic;
      })
    }
    setMenuItem(newItem);
  }

  return (
    <div className="support-categories-desktop__list__items">
      <div className="title">
        <input className="vp-checkbox parent" type="checkbox" id={'items-' + index} />
        <label htmlFor={'items-' + index}>
          {menuItem?.Title}
        </label>
      </div>
      <div className="close show">
        <a href="#" data-toggle="collapse" data-target={'#sub-list-' + index}>
          <i className="icon-chevron-down"></i>
        </a>
      </div>
      <div className="sub-list collapse show" id={'sub-list-' + index}>
        {menuItem?.TagItems?.length ? (
          menuItem.TagItems.map((childItem, indexChild) => (
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
