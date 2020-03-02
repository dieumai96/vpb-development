import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import CardSelectOptions from '../CardSelectOptions/CardSelectOptions';
import { createStructuredSelector } from 'reselect';
import { actRemoveCard } from '../../../redux/card/card.action';
import * as $ from 'jquery';
import {
  selectCardItems,
} from '../../../redux/card/card.seletor';

const AddCard = ({ cardItems, actRemoveCard }) => {
  const [toggleCardSelectOption, setToggleCardSelectOption] = useState(false);

  useEffect(() => {
    const $addCardContent = $('.add-card-component');
    if (cardItems.length == 0) {
      $($addCardContent).addClass('closed');
    } else {
      let itemLength = cardItems.length;
      $(window).bind('wheel mousewheel', function (event) {
        if (event.originalEvent.deltaY >= 0) {
          $($addCardContent).removeClass('closed');
        }
      });
    }
    clickOutAddCard();
  }, [cardItems]);

  const toggleOption = () => {
    setToggleCardSelectOption(true);
    $('body').addClass('masked');
    $('.add-card-component').addClass('show-mask');
  }

  const clickOutAddCard = () => {
    const addCardComponent = $('.add-card-component');
    $(document).mouseup((e) => {
      if (addCardComponent.hasClass('show-mask')) {
        if (!addCardComponent.is(e.target) && addCardComponent.has(e.target).length === 0) {
          $('.add-card-content').hide();
          setToggleCardSelectOption(false);
          addCardComponent.removeClass('show-mask');
          $('body').removeClass('masked');
        }
      }
    });
  }

  return (
    <>
      <div className="add-card-component closed">
        <div className="container">
          <div className="add-card-component__content">
            {toggleCardSelectOption ? <CardSelectOptions cardItems={cardItems} /> : null}
            <div className="basic-accordion large-collapse">
              <div className="basic-accordion__card">
                <div className="basic-accordion__card__header compare-card__header" id="compareCard">
                  <h3 className="basic-accordion__card__header__text"><a data-toggle="collapse" data-target="#collapseCompareCard" aria-expanded="false" aria-controls="collapseCompareCard">Compare Cards<i className="ico icon-remove" style={{ float: 'right' }}></i></a></h3>
                </div>
                <div className="basic-accordion__card__collapse compare-card__collapse collapse show" id="collapseCompareCard" aria-labelledby="compareCard">
                  <div className="compare-card__collapse__content">
                    <div className="row no-gutters list-card-added">
                      {cardItems.map((item, index) => {
                        return (
                          <div className="col-md-4 item-column" key={index}>
                            <div className="item">
                              <div className="card-image">
                                <img src={item.image} alt="" />
                              </div>
                              <div className="card-infomation">
                                <span className="card-name">{item.name}</span>
                                <br />
                                <span className="card-action remove-action" onClick={() => actRemoveCard(item.dataIndex)}>- Remove</span>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                      {cardItems.length < 3 ?
                        <div className="col-md-4 item-column button-add-card">
                          <div className="content">
                            <div className="add-button" onClick={toggleOption}><i className="icon-add plus"></i><span>Add a card</span></div>
                          </div>
                        </div> : null
                      }
                    </div>
                    <div className="compare-button"><a className="btn btn-outline-primary general-button" href="/card-compare.html">COMPARE NOW<span className="count-card-chosen"></span></a><br /><span className="notice">Select maximum 3 cards to compare</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="add-card-mask"></div>
    </>
  )
}

const mapPropsToState = createStructuredSelector({
  cardItems: selectCardItems
})

const mapDispatchToProps = dispatch => ({
  actRemoveCard: cardIndex => dispatch(actRemoveCard(cardIndex)),
})

export default connect(mapPropsToState, mapDispatchToProps)(AddCard);
