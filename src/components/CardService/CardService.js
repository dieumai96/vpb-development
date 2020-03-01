import React, { Component } from 'react'
import Mashhead from '../Masthead/Masthead';
import './CardService.scss';
export default class CardService extends Component {
  render() {
    return (
      <>
        <Mashhead />
        <div class="card-list">
          <div class="container">
            <div class="section-title">
              <h2>The Right Card, The Way You Like!</h2>
            </div>
            <div class="card-list__filter"><span>Filter:</span>
              <ul class="card-list__filter__list">
                <li><button class="choice-button active" data-type="ALL">All card</button></li>
                <li><button class="choice-button" data-type="CREDIT CARD">credit</button>
                  <ul class="child-filter">
                    <li class="child-filter-item" data-type="REWARD">Reward</li>
                    <li class="child-filter-item" data-type="CASHBACK">Cashback</li>
                    <li class="child-filter-item" data-type="MILES">Miles</li>
                  </ul>
                </li>
                <li><button class="choice-button" data-type="DEBIT CARD">debit</button>
                  <ul class="child-filter">
                    <li class="child-filter-item" data-type="DEBIT 1">Debit 1</li>
                    <li class="child-filter-item" data-type="DEBIT 2">Debit 2</li>
                    <li class="child-filter-item" data-type="DEBIT 3">Debit 3</li>
                  </ul>
                </li>
                <li><button class="choice-button" data-type="POINT CARD">point</button></li>
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  }
}
