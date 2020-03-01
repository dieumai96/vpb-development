import React, { useState, useEffect } from 'react'
import { data } from './CardData';
const CardList = () => {
  const [cardData, setCardData] = useState(data);
  return (
    <div className="card-list">
      <div className="container">
        <div className="section-title">
          <h2>The Right Card, The Way You Like!</h2>
        </div>
        <div className="card-list__filter"><span>Filter:</span>
          <ul className="card-list__filter__list">
            <li><button className="choice-button active" data-type="ALL">All card</button></li>
            <li><button className="choice-button" data-type="CREDIT CARD">credit</button>
              <ul className="child-filter">
                <li className="child-filter-item" data-type="REWARD">Reward</li>
                <li className="child-filter-item" data-type="CASHBACK">Cashback</li>
                <li className="child-filter-item" data-type="MILES">Miles</li>
              </ul>
            </li>
            <li><button className="choice-button" data-type="DEBIT CARD">debit</button>
              <ul className="child-filter">
                <li className="child-filter-item" data-type="DEBIT 1">Debit 1</li>
                <li className="child-filter-item" data-type="DEBIT 2">Debit 2</li>
                <li className="child-filter-item" data-type="DEBIT 3">Debit 3</li>
              </ul>
            </li>
            <li><button className="choice-button" data-type="POINT CARD">point</button></li>
          </ul>
          <div className="card-list__filter__list--mobile menu-collapse item">
            <div className="collapse-header" data-target="#collapse-content"><span className="icon-filter-list"></span>Filter</div>
            <div className="collapse-content" id="collapse-content">
              <div className="sub-item">
                <div className="collapse-header"><span className="active filter-option parent-filter-mobile" data-type="ALL">ALL CARD</span><i className="icon-chevron-down" data-target="#collapse-subcontent-1"> </i></div>
              </div>
              <div className="sub-item">
                <div className="collapse-header"> <span className="filter-option parent-filter-mobile" data-type="CREDIT CARD">CREDIT</span><i className="icon-chevron-down" data-target="#collapse-subcontent-2"> </i></div>
                <div className="collapse-content" id="collapse-subcontent-2">
                  <div className="sub-sub-item filter-option child-filter-item" data-type="REWARD">Reward</div>
                  <div className="sub-sub-item filter-option child-filter-item" data-type="CASHBACK">Cashback</div>
                  <div className="sub-sub-item filter-option child-filter-item" data-type="MILES">Miles</div>
                </div>
              </div>
              <div className="sub-item">
                <div className="collapse-header"><span className="filter-option parent-filter-mobile" data-type="DEBIT CARD">DEBIT</span><i className="icon-chevron-down" data-target="#collapse-subcontent-3"></i></div>
                <div className="collapse-content" id="collapse-subcontent-3">
                  <div className="sub-sub-item filter-option child-filter-item" data-type="DEBIT 1">Debit 1</div>
                  <div className="sub-sub-item filter-option child-filter-item" data-type="DEBIT 2">Debit 2</div>
                  <div className="sub-sub-item filter-option child-filter-item" data-type="DEBIT 3">Debit 3</div>
                </div>
              </div>
              <div className="sub-item">
                <div className="collapse-header"><span className="filter-option parent-filter-mobile" data-type="POINT CARD">POINT</span><i className="icon-chevron-down" data-target="#collapse-subcontent-4"> </i></div>
              </div>
            </div>
          </div>
          <div className="card-list__button"><a className="btn btn-primary" href="#" data-toggle="modal" data-target="#show-find-card-modal">Find your suitable card</a><a className="card-list__button-compare-card btn btn-primary" href="/card-compare.html">COMPARE CARD<span className="count-card-chosen"></span></a></div>
        </div>
        <div className="row card-list__list-item">
          {cardData.map((item, index) => {
            return (
              <div className="col-sm-6 col-lg-4 card-item" key={index}>
                <div className="card-item__wrap">
                  <div className="card-item__image-container"><a href="#"><img className="card-item__image-container--card-image" src={item.image} alt="" /></a>
                    <div className="card-item__image-container--wishlist"><input id={'wish-' + { index }} type="checkbox" /><label htmlFor={'wish-' + { index }}></label></div>
                    <div className="card-item__image-container--tag">Best Seller</div>
                  </div>
                  <div className="card-item__description"><a className="card-type" href="#">{item.type}</a>
                    <h5 className="name"><a href="#">{item.name}</a></h5>
                    <ul className="description">
                      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae expedita blanditiis amet Quae expedita blanditiis amet impedit</li>
                      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae expedita blanditiis amet impedit</li>
                    </ul>
                  </div>
                  <div className="card-item__action">
                    <div className="add-compare"><input className="vp-checkbox" id="chk21" type="checkbox" name="vehicle1" value="Bike" /><label htmlFor="chk21">ADD TO COMPARE CARD</label></div>
                    <div className="choice-button-action"><a className="button-apply btn btn-outline-primary" href="#">APPLY NOW</a><a className="button-infomation btn btn-outline-default" href="#">MORE INFOMATION</a></div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="card-list__pagination"></div>
      </div>
    </div>
  )
}

export default CardList
