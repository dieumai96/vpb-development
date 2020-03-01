import React, { Component } from 'react'
import Breadcrumd from '../Breadcrumd/Breadcrumd';
import './Masthead.scss'; 
export default class Masthead extends Component {
  render() {
    return (
      <section class="masthead delay-0" animation-type="fadeInUp">
        <div class="masthead__wrap">
          <div class="container">
            <Breadcrumd />
          </div>
        </div>
        <div class="masthead__slide">
          <a class="masthead__slide--item" href="/home-page.html">
            <div class="masthead__images">
              <picture>
                <source media="(max-width: 767px)" srcset="/assets/images/masthead-mobile.png" /><img class="img-responsive" src="assets/images/masthheader.png" alt="" /></picture>
            </div>
            <div class="masthead__wrap">
              <div class="container">
                <div class="masthead__content delay-100" animation-type="fadeInUp">
                  <h1 class="masthead__content__title">Card services 1</h1>
                  <p class="masthead__content__detail">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, autem?</p>
                </div>
              </div>
            </div>
          </a>
          <a class="masthead__slide--item" href="/home-page.html">
            <div class="masthead__images">
              <picture>
                <source media="(max-width: 767px)" srcset="/assets/images/masthead-mobile.png" /><img class="img-responsive" src="assets/images/masthheader.png" alt="" /></picture>
            </div>
            <div class="masthead__wrap">
              <div class="container">
                <div class="masthead__content delay-100" animation-type="fadeInUp">
                  <h1 class="masthead__content__title">Card services 2</h1>
                  <p class="masthead__content__detail">Lorem 2 ipsum dolor sit amet consectetur, adipisicing elit. Non, autem?</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
    )
  }
}
