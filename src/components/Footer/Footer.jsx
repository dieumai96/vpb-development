import React, { Component, useEffect } from 'react'
import FooterJquerty from './Footer.jquery';
const Footer = () => {
  useEffect(() => {
    FooterJquerty.init();
  })
  return (
    <div className="footer">
      <div className="container">
        <section className="footer__link">
          <div className="row">
            <div className="col-sm-4 col-md-2 footer__link__item">
              <h6 className="footer__link--title"><a className="collapsed" href="" data-toggle="collapse" data-target="#collapseFooterOne" aria-expanded="true" aria-controls="collapseCardOne">Credit Card<i className="icon-chevron-right"></i></a></h6>
              <ul className="collapse" id="collapseFooterOne">
                <li> <a href="#">VPBank MC2</a></li>
                <li> <a href="#">VBPank Step Up</a></li>
                <li> <a href="#">VBPank Lady</a></li>
                <li> <a href="#">VBPank Platinum</a></li>
                <li> <a href="#">VBPank World</a></li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-2 footer__link__item">
              <h6 className="footer__link--title"><a className="collapsed" href="" data-toggle="collapse" data-target="#collapseFooterTwo" aria-expanded="true" aria-controls="collapseCardOne">Personal Loan<i className="icon-chevron-right"></i></a></h6>
              <ul className="collapse" id="collapseFooterTwo">
                <li> <a href="#">Overview</a></li>
                <li> <a href="#">Consition and Fees</a></li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-2 footer__link__item">
              <h6 className="footer__link--title"><a className="collapsed" href="" data-toggle="collapse" data-target="#collapseFooterThree" aria-expanded="true" aria-controls="collapseCardOne">Portages<i className="icon-chevron-right"></i></a></h6>
              <ul className="collapse" id="collapseFooterThree">
                <li> <a href="#">Home Loan</a></li>
                <li> <a href="#">Car Loan</a></li>
                <li> <a href="#">Partners with VPBank</a></li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-2 footer__link__item">
              <h6 className="footer__link--title"><a className="collapsed" href="" data-toggle="collapse" data-target="#collapseFooterFour" aria-expanded="true" aria-controls="collapseCardOne">Savings Acount<i className="icon-chevron-right"></i></a></h6>
              <ul className="collapse" id="collapseFooterFour">
                <li> <a href="#">Prosperity Preserved</a></li>
                <li> <a href="#">Saving</a></li>
                <li> <a href="#">Overview</a></li>
                <li> <a href="#">Saving Online</a></li>
                <li> <a href="#">Prosperity Preserved</a></li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-2 footer__link__item">
              <h6 className="footer__link--title"><a className="collapsed" href="" data-toggle="collapse" data-target="#collapseFooterFive" aria-expanded="true" aria-controls="collapseCardOne">Other Products<i className="icon-chevron-right"></i></a></h6>
              <ul className="collapse" id="collapseFooterFive">
                <li> <a href="#">Saving</a></li>
                <li> <a href="#">Current Account</a></li>
                <li> <a href="#">Internet Banking</a></li>
                <li> <a href="#">AIA Insurance</a></li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-2 footer__link__item">
              <h6 className="footer__link--title"><a className="collapsed" href="" data-toggle="collapse" data-target="#collapseFooterSix" aria-expanded="true" aria-controls="collapseCardOne">Things you should know<i className="icon-chevron-right"></i></a></h6>
              <ul className="collapse" id="collapseFooterSix">
                <li> <a href="#">Promotions</a></li>
                <li> <a href="#">Tips & Stories</a></li>
                <li> <a href="#">FAQs</a></li>
                <li> <a href="#">Ticket Status</a></li>
                <li> <a href="/event-investor-relation-vpbank.html#webcast-section">Webcast</a></li>
              </ul>
            </div>
          </div>
        </section>
        <section className="footer__content">
          <div className="row no-gutters">
            <div className="col-md-6 footer__content__left">
              <div className="footer__content__left__logo"><a href="#"><img className="img-logo" src="/images/components-image/footer/vpbank-logo-small.png" /></a></div>
              <div className="footer__content__left__info"><strong className="footer__content__left__info__name">Vietnam Prosperity Joint-Stock Commercial Bank (VPBank)</strong>Head Office: 89 Lang Ha Str., Dong Da Dist., Ha Noi</div>
            </div>
            <div className="col-md-6 footer__content__right">
              <div className="footer__content__right__link"><a href=""><img className="img-facebook" src="/images/icons/facebook.png" alt="" /></a><a href=""><img className="img-youtube" src="/images/icons/youtube.png" alt="" /></a><a href=""><img className="img-zalo" src="/images/icons/zalo.png" alt="" /></a></div>
              <div
                className="promo clearfix">
                <div className="vpbank">VPBANK MOBILE APP</div><a className="btn-appstore" href=""><img src="/images/app-store.png" alt="" /></a><a className="btn-playstore" href=""><img src="/images/goggle-play.png" alt="" /></a></div>
            </div>
          </div>
        </section>
      </div>
      <section className="footer__copyright">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 footer__copyright__left">© Copyright 2019 VPBank. All rights reserved. </div>
            <div className="col-sm-6 footer__copyright__right"><span><a href="#">Safe and Security</a><a href="#">Terms of Use</a><a className="back-to-old-website" href="#">Back to the old website</a></span></div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Footer;