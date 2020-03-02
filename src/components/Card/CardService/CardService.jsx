import React, { useEffect, useState } from 'react'
import MastHead from '../../MastHead/MastHead';
import RetailBankingNotitle from '../../RetailBanking/Retail-Banking--Notitle';
import CardList from '../CardList/CardList';
import AddCard from '../AddCard/AddCard';
import { actGetAllCard } from '../../../redux/card/card.action';
import { createStructuredSelector } from 'reselect';
import {
  selectAllCards,
} from '../../../redux/card/card.seletor';
import { connect } from 'react-redux';

const CardService = ({ cardData, actGetAllCard }) => {
  useEffect(() => {
    actGetAllCard();
  })
  return (
    <>
      <MastHead />
      <RetailBankingNotitle />
      <CardList cardData={cardData} />
      <AddCard />
    </>
  )
}
const mapDispatchToProps = dispatch => ({
  actGetAllCard: () => dispatch(actGetAllCard()),
})

const mapPropsToState = createStructuredSelector({
  cardData: selectAllCards
})

export default connect(mapPropsToState, mapDispatchToProps)(CardService);