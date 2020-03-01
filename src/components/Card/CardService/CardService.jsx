import React from 'react'
import MastHead from '../../MastHead/MastHead';
import RetailBankingNotitle from '../../RetailBanking/Retail-Banking--Notitle';
import CardList from '../CardList/CardList';
import AddCard from '../AddCard/AddCard';
const CardService = () => {
  return (
    <>
      <MastHead />
      <RetailBankingNotitle />
      <CardList />
      <AddCard />
    </>
  )
}

export default CardService;