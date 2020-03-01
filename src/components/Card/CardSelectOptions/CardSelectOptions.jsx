import React from 'react'
import { data } from '../CardList/CardData';
const CardSelectOptions = () => {
  return (
    <>
      <div className="add-card-component__content__close-button"><i className="ico icon-close"></i></div>
      <div className="add-card-content desktop">
        {data.map((item, index) => {
          return (
            <div className="credit-card-item" key={index}>
              <div className="card-image"><img src="images/components-image/card-list/card-1.png" alt="Not Available" />
                <p className="card-name">{item.name}</p>
              </div><span className="card-action">+ Add</span>
            </div>
          )
        })}
      </div>
    </>
  )
}
export default CardSelectOptions;
