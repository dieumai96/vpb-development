import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { actAddCard, actRemoveCard } from '../../../redux/card/card.action';
import { createStructuredSelector } from 'reselect';
import * as $ from 'jquery';
import {
  selectCardItems
} from '../../../redux/card/card.seletor';
import ClientPaging from '../../../smart-ui/Client-Paging';

const CardList = ({ actAddCard, actRemoveCard, cardItems, cardData, actGetAllCard }) => {
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
    let listIndexChosen = getListDataIndex();
    const listCheckboxOnCard = $('.card-list .card-item .add-compare input');
    listCheckboxOnCard.each((index, item) => {
      let id = $(item).attr('id');
      if (!listIndexChosen.includes(id)) {
        $(item).prop('checked', false);
      } else {
        $(item).prop('checked', true);
      }
    })
    if (listIndexChosen.length >= 3) {
      listCheckboxOnCard.addClass('deactivated-by-count');
    } else {
      listCheckboxOnCard.removeClass('deactivated-by-count');
    }
  }, [cardItems]);

  const findCardOnList = (cardIndex) => {
    return cardData.find(card => card.dataIndex == cardIndex);
  }

  const getListDataIndex = () => {
    let listIndex = [];
    cardItems.forEach(item => listIndex.push('chosen-card-' + item.dataIndex));
    return listIndex;
  }
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
          <div className="card-list__button"><a className="btn btn-primary" href="#" data-toggle="modal" data-target="#show-find-card-modal">Find your suitable card</a><a className="card-list__button-compare-card btn btn-primary" href="/card-compare.html">COMPARE CARD {totalCard > 0 ? '(' + totalCard + ')' : ''}<span className="count-card-chosen"></span></a></div>
        </div>
        <div className="row card-list__list-item">
          {cardData.map((item, index) => {
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
                      <li>【不顾疫情与禁令，韩国首尔上千人坚持集会】3月1日“三一节”意义特殊，首尔城北区长位洞，上千人组成多个政治、宗教团体坚持进行集会</li>
                      <li>动】3月1日起，《网络信息内容生态治理规定》开始实行。规定明确，网络信息内容服务使用者和</li>
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
        {/* <div className="card-list__pagination">
          <div className="card-list__pagination-wrap">
            <a href="" class="prev-item disabled" data-index="PREV"><i class="ico icon-arrow-prev"></i></a>
            <a href="" className="active">1</a>
            <a href="">2</a>
            <a href="">3</a>
            <a href="">4</a>
            <a href="" class="next-item" data-index="NEXT"><i class="ico icon-arrow-next"></i></a>
          </div>
        </div> */}
        <ClientPaging total = {cardData.length} />
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  actAddCard: card => dispatch(actAddCard(card)),
  actRemoveCard: cardIndex => dispatch(actRemoveCard(cardIndex)),
})

const mapPropsToState = createStructuredSelector({
  cardItems: selectCardItems,
})

export default connect(mapPropsToState, mapDispatchToProps)(CardList);
