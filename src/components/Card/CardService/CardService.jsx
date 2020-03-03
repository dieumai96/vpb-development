import React, { useEffect, useState } from 'react'
import MastHead from '../../MastHead/MastHead';
import RetailBankingNotitle from '../../RetailBanking/Retail-Banking--Notitle';
import CardList from '../CardList/CardList';
import AddCard from '../AddCard/AddCard';
import Promotion from '../../Promotion/Promotion';
import { createStructuredSelector } from 'reselect';
import {
  selectCardByPage, selectCardItems,
} from '../../../redux/card/card.seletor';
import { connect } from 'react-redux';
import * as $ from 'jquery';

const CardService = ({ cardList, cardItems }) => {

  useEffect(() => {
    changeCardItemCheckBoxState();
  }, [cardList, cardItems]);

  const changeCardItemCheckBoxState = () => {
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
  };

  const getListDataIndex = () => {
    let listIndex = [];
    if (cardItems && cardItems.length) {
      cardItems.forEach(item => listIndex.push('chosen-card-' + item.dataIndex));
    }
    return listIndex;
  }
  return (
    <>
      <MastHead />
      <RetailBankingNotitle />
      <CardList cardData={cardList} cardItems={cardItems} />
      <AddCard />
      <Promotion />
    </>
  )
}

const mapPropsToState = createStructuredSelector({
  cardList: selectCardByPage,
  cardItems: selectCardItems,
})

export default connect(mapPropsToState)(CardService);