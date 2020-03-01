import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CardSelectOptions from '../CardSelectOptions/CardSelectOptions';
import { createStructuredSelector } from 'reselect';
import * as $ from 'jquery';
import {
  selectCardItems,
} from '../../../redux/card/card.seletor';

const AddCard = ({ cardItems }) => {
  const cardSelectLength = cardItems.length;

  useEffect(() => {
    $(window).bind('wheel mousewheel', function (event) {
      const $addCardContent = $('.add-card-component');
      if (event.originalEvent.deltaY >= 0) {
        if (cardSelectLength >= 2) {
          $($addCardContent).removeClass('closed');
        }
      }
    });
  }, [cardItems]);
  return (
    <>
      <div className="add-card-component closed">
        <div className="container">
          <div className="add-card-component__content">
            <div className="basic-accordion large-collapse">
              <div className="basic-accordion__card">
                <div className="basic-accordion__card__header compare-card__header" id="compareCard">
                  <h3 className="basic-accordion__card__header__text"><a data-toggle="collapse" data-target="#collapseCompareCard" aria-expanded="false" aria-controls="collapseCompareCard">Compare Cards<i className="ico icon-remove" style ={{float : 'right'}}></i></a></h3>
                </div>
                <div className="basic-accordion__card__collapse compare-card__collapse collapse show" id="collapseCompareCard" aria-labelledby="compareCard">
                  <div className="compare-card__collapse__content">
                    <div className="row no-gutters list-card-added">
                      <div className="col-md-4 item-column button-add-card">
                        <div className="content">
                          <div className="add-button"><i className="icon-add plus"></i><span>Add a card</span></div>
                        </div>
                      </div>
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

export default connect(mapPropsToState)(AddCard);
