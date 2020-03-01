import React, { useEffect } from 'react'
import BreadCrumd from '../Breadcrumd/Breadcrumd';
import MastHeadJquery from './MastHead.jquey';
const MastHead = () => {
  useEffect(() => {
    MastHeadJquery.init();
  })
  return (
    <section className="masthead animated-slow delay-0" animation-type="fadeInUp">
      <div className="masthead__wrap">
        <div className="container">
          <BreadCrumd />
        </div>
      </div>
      <div className="masthead__slide">
        <a className="masthead__slide--item" href="/home-page.html">
          <div className="masthead__images">
            <picture>
              <source media="(max-width: 767px)" srcSet="/images/masthead-mobile.png" /><img className="img-responsive" src="/images/masthheader.png" alt="" /></picture>
          </div>
          <div className="masthead__wrap">
            <div className="container">
              <div className="masthead__content animated-slow delay-100" animation-type="fadeInUp">
                <h1 className="masthead__content__title">Card services 1</h1>
                <p className="masthead__content__detail">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, autem?</p>
              </div>
            </div>
          </div>
        </a>
        <a className="masthead__slide--item" href="/home-page.html">
          <div className="masthead__images">
            <picture>
              <source media="(max-width: 767px)" srcSet="/images/masthead-mobile.png" /><img className="img-responsive" src="/images/masthheader.png" alt="" /></picture>
          </div>
          <div className="masthead__wrap">
            <div className="container">
              <div className="masthead__content animated-slow delay-100" animation-type="fadeInUp">
                <h1 className="masthead__content__title">Card services 2</h1>
                <p className="masthead__content__detail">Lorem 2 ipsum dolor sit amet consectetur, adipisicing elit. Non, autem?</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}

export default MastHead;