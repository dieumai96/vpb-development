import React, { useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux';
import { actAddCard, actRemoveCard, actGetCardByPage, actGetCardByType } from '../../../redux/card/card.action';
import ClientPaging from '../../../smart-ui/Client-Paging';
import { cardMenu } from './CardMenu';
import { createStructuredSelector } from 'reselect';
import { selectCardTypeKey } from '../../../redux/card/card.seletor';
const CardList = ({ actAddCard, actRemoveCard, cardData, cardItems, actGetCardByPage, actGetCardByType, selectCardTypeKey }) => {
  const [pageIndex, setPageIndex] = useState(1);

  const [pageSize] = useState(6);

  const listRef = useRef(cardMenu.map(item => React.createRef()));

  const totalCard = cardItems.length;

  const toggleCardItem = (event, cardIndex) => {
    if (event.target.checked) {
      const findCard = findCardOnList(cardIndex);
      actAddCard(findCard);
    } else {
      actRemoveCard(cardIndex);
    }
  }

  useEffect(() => {
    actGetCardByPage(pageIndex, pageSize);
  }, []);


  const findCardOnList = (cardIndex) => {
    return cardData.data && cardData.data.length && cardData.data.find(card => card.dataIndex == cardIndex);
  }



  const updatePaging = (pageIndex) => {
    if (selectCardTypeKey && selectCardTypeKey != '') {
      actGetCardByType(pageIndex, pageSize, selectCardTypeKey);
    } else {
      getData(pageIndex);
    }
    setPageIndex(pageIndex);
  }

  const getData = (pageIndex) => {
    actGetCardByPage(pageIndex, pageSize);
  }

  const searchByParent = (parentType, index) => {
    // INFO : set state button 
    const { current } = listRef;
    current.map(item => item.current.classList.remove('active'));
    current[index].current.classList.add('active');
    // INFO : start search card 
    onSearchCard(parentType);
  }


  const onSearchCard = (type) => {
    actGetCardByType(1, pageSize, type.toUpperCase());
    setPageIndex(1);
  }

  return (
    <div className="card-list">
      <div className="container">
        <div className="section-title">
          <h2>The Right Card, The Way You Like!</h2>
        </div>
        <div className="card-list__filter"><span>Filter:</span>
          <ul className="card-list__filter__list">
            {cardMenu.map((item, index) => (
              <li key={index}>
                <button ref={listRef.current[index]} className={'choice-button ' + (index == 0 ? 'active' : '')} onClick={() => searchByParent(item.parentMenu, index)}>
                  {item.parentMenu}
                </button>
                {item.childMenu && item.childMenu.length ? (
                  <ul className="child-filter">
                    {item.childMenu.map((itemChild, childIndex) => (
                      <li className="child-filter-item" key={childIndex}>{itemChild}</li>
                    ))}
                  </ul>
                ) : null
                }
              </li>
            ))}
          </ul>
          <div className="card-list__filter__list--mobile menu-collapse item">
            <div className="collapse-header" data-target="#collapse-content"><span className="icon-filter-list"></span>Filter</div>
            <div className="collapse-content" id="collapse-content">
              {cardMenu.map((item, index) => (
                <div className="sub-item">
                  <div className="collapse-header">
                    <span className={'filter-option parent-filter-mobile ' + index == 0 ? 'active' : ''}>{item.parentMenu}</span>
                    <i className="icon-chevron-down" data-target={'#collapse-subcontent-' + index}></i>
                  </div>
                  {(item.childMenu && item.childMenu.length) ? (
                    <div className="collapse-content" id={'collapse-subcontent-' + index}>
                      {item.childMenu.map((itemChild, indexChild) => (
                        <div key={indexChild}>
                          <div className="sub-sub-item filter-option child-filter-item">{itemChild}</div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
          <div className="card-list__button"><a className="btn btn-primary" href="#" data-toggle="modal" data-target="#show-find-card-modal">Find your suitable card</a><a className="card-list__button-compare-card btn btn-primary" href="/card-compare.html">COMPARE CARD {totalCard > 0 ? '(' + totalCard + ')' : ''}<span className="count-card-chosen"></span></a></div>
        </div>
        <div className="row card-list__list-item">
          {cardData.data && cardData.data.length && cardData.data.map((item, index) => {
            return (
              <div className="col-sm-6 col-lg-4 card-item" key={item.dataIndex}>
                <div className="card-item__wrap">
                  <div className="card-item__image-container"><a href="#"><img className="card-item__image-container--card-image" src={item.image} alt="" /></a>
                    <div className="card-item__image-container--wishlist"><input id={'wish-' + item.dataIndex} type="checkbox" /><label htmlFor={'wish-' + item.dataIndex}></label></div>
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
                    <div className="add-compare"><input className="vp-checkbox" id={'chosen-card-' + item.dataIndex} type="checkbox" name="vehicle1" value="Bike" onChange={(event) => toggleCardItem(event, item.dataIndex)} /><label htmlFor={'chosen-card-' + item.dataIndex}>ADD TO COMPARE CARD</label></div>
                    <div className="choice-button-action"><a className="button-apply btn btn-outline-primary" href="#">APPLY NOW</a><a className="button-infomation btn btn-outline-default" href="#">MORE INFOMATION</a></div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <ClientPaging updatePaging={updatePaging} pageIndex={pageIndex} pageSize={pageSize} total={cardData && cardData.totalItem} />
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  actAddCard: card => dispatch(actAddCard(card)),
  actRemoveCard: cardIndex => dispatch(actRemoveCard(cardIndex)),
  actGetCardByPage: (pageIndex, pageSize) => dispatch(actGetCardByPage(pageIndex, pageSize)),
  actGetCardByType: (pageIndex, pageSize, type) => dispatch(actGetCardByType(pageIndex, pageSize, type))
})

const mapPropsToState = createStructuredSelector({
  selectCardTypeKey: selectCardTypeKey,
})

export default connect(mapPropsToState, mapDispatchToProps)(CardList);
