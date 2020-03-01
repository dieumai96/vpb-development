import React, { useEffect } from 'react';
import RetailBankingJquery from './Retail-Banking.jquery';
const RetailBankingNotitle = () => {
  useEffect(() => {
    RetailBankingJquery.init();
  })
  return (
    <section className="retail-banking no-title animated-slow delay-200" animation-type="fadeInUp">
      <div className="container">
        <div className="section-title">
          <h2>Retail Banking</h2>
        </div>
        <div className="retail-banking__content">
          <div className="retail-banking__content__option">
            <a className="retail-banking__content__option__item shadow-light-green" href="#">
              <picture><img src="/images/components-image/retail-banking/retail-icon-1.png" alt="retail-banking-icon" /></picture>
              <h5>Personal Service</h5>
            </a>
          </div>
          <div className="retail-banking__content__option">
            <a className="retail-banking__content__option__item shadow-light-brown" href="#">
              <picture><img src="/images/components-image/retail-banking/retail-icon-2.png" alt="retail-banking-icon" /></picture>
              <h5>Card Service</h5>
            </a>
          </div>
          <div className="retail-banking__content__option">
            <a className="retail-banking__content__option__item shadow-light-orange" href="#">
              <picture><img src="/images/components-image/retail-banking/retail-icon-3.png" alt="retail-banking-icon" /></picture>
              <h5>Loan</h5>
            </a>
          </div>
          <div className="retail-banking__content__option">
            <a className="retail-banking__content__option__item shadow-light-pink" href="#">
              <picture><img src="/images/components-image/retail-banking/retail-icon-4.png" alt="retail-banking-icon" /></picture>
              <h5>Account</h5>
            </a>
          </div>
          <div className="retail-banking__content__option">
            <a className="retail-banking__content__option__item shadow-ocean-blue" href="#">
              <picture><img src="/images/components-image/retail-banking/retail-icon-5.png" alt="retail-banking-icon" /></picture>
              <h5>Savings Account</h5>
            </a>
          </div>
          <div className="retail-banking__content__option">
            <a className="retail-banking__content__option__item shadow-light-blue" href="#">
              <picture><img src="/images/components-image/retail-banking/retail-icon-6.png" alt="retail-banking-icon" /></picture>
              <h5>E-Banking Service</h5>
            </a>
          </div>
          <div className="retail-banking__content__option">
            <a className="retail-banking__content__option__item shadow-light-purple" href="#">
              <picture><img src="/images/components-image/retail-banking/retail-icon-7.png" alt="retail-banking-icon" /></picture>
              <h5>Insurance</h5>
            </a>
          </div>
          <div className="retail-banking__content__option">
            <a className="retail-banking__content__option__item shadow-yellow-green" href="#">
              <picture><img src="/images/components-image/retail-banking/retail-icon-8.png" alt="retail-banking-icon" /></picture>
              <h5>VPBank Loyalty</h5>
            </a>
          </div>
          <div className="retail-banking__content__option">
            <a className="retail-banking__content__option__item shadow-lighter-blue" href="#">
              <picture><img src="/images/components-image/retail-banking/retail-icon-9.png" alt="retail-banking-icon" /></picture>
              <h5>Diamond</h5>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}


export default RetailBankingNotitle;