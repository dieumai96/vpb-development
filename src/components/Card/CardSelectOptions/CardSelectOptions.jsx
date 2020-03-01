import React, { useEffect } from 'react'
import { data } from '../CardList/CardData';
import CardSelectOptionJquery from './CardSelectOption.jquery';
import { connect } from 'react-redux';
import { actAddCard } from '../../../redux/card/card.action';

const CardSelectOptions = ({ actAddCard, cardItems }) => {
  useEffect(() => {
    CardSelectOptionJquery.init();
  }, [cardItems]);

  const isAleardyChosen = (cardIndex) => {
    return cardItems.find(item => item.dataIndex == cardIndex);
  }

  return (
    <>
      <div className="add-card-component__content__close-button"><i className="ico icon-close"></i></div>
      <div className="add-card-content desktop">
        {data.map((item, index) => {
          return (
            <div className="credit-card-item" key={index}>
              <div className="card-image"><img src="images/components-image/card-list/card-1.png" alt="Not Available" />
                <p className="card-name">{item.name}</p>
              </div><span className={((isAleardyChosen(item.dataIndex) || cardItems.length >= 3) ? 'disabled' : '') + ' card-action'} onClick={() => actAddCard(item)}>+ Add</span>
            </div>
          )
        })}
      </div>
    </>
  )
}
const mapDispatchToProps = dispatch => ({
  actAddCard: card => dispatch(actAddCard(card))
})
export default connect(null, mapDispatchToProps)(CardSelectOptions);
