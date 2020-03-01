import React, { useEffect } from 'react';
import Language from '../Language/Language';
import HeaderJquery from './Header.jquery';
const Header = () => {
  useEffect(() => {
    HeaderJquery.init();
  });
  return (
    <>
      <div className="top-secondary animated-slow delay-0" animation-type="fadeInUp">
        <div className="container">
          <div className="top-secondary__link">
            <ul className="navbar">
              <li><a className="navbar-item" href="#">About Us</a></li>
              <li><a className="navbar-item" href="#">Investor Relations</a></li>
              <li><a className="navbar-item" href="#">News</a></li>
              <li><a className="navbar-item" href="#">Recruitment</a></li>
            </ul>
          </div>
          <div className="top-secondary__content">
            <ul className="navbar">
              <li className="search">
                <form className="search-form" action="search-page.html"><input autoComplete="off" type="text" name="search" placeholder="Nhập từ khóa cần tìm" /><button type="submit"> <i className="icon-search1"></i></button></form>
              </li>
              <li className="wish-list"><a className="navbar-item" href="wishlist-page.html">Lovemark</a></li>
              <li className="contact"><a className="navbar-item" href="#">Contact Us</a></li>
              <li className="atm"><a className="navbar-item" href="#">Branch & ATM</a></li>
            </ul>
            <Language />
          </div>
        </div>
      </div>
      <div className="top-primary">
        <div className="container">
          <div className="top-primary__link clearfix"><a className="main-logo animated-slow delay-0" href="/" title="main logo" animation-type="fadeInUp"><img src="/images/main-logo.svg" width="164px" height="42px" alt="main logo" /></a>
            <div className="mobile-menu"><span className="hamburger"></span><span className="hamburger"></span><span className="hamburger"></span><span className="hamburger"></span></div><span className="button-icon js-button-icon"><span><img src="/images/icons/icon-internet-banking.png" alt="" width="22px" height="22px" /></span>
              <div
                className="sub-menu"><a href="#">Personal</a><a href="#">Business</a></div>
            </span><span className="button-icon js-search-icon"><span><img src="/images/icons/icon-search-primary.png" alt="" width="22px" height="22px" /></span>
              <div className="sub-menu">
                <form className="search-form" action="search-page.html"><span className="icon-close"></span><input autoComplete="off" type="text" name="search" placeholder="Nhập từ khóa cần tìm" /><button type="submit"> <i className="icon-search1"></i></button></form>
              </div>
            </span>
            <ul className="navbar-primary animated-slow delay-0" animation-type="fadeInUp">
              <li><a className="active navbar-item" href="home-page.html">Cá Nhân</a></li>
              <li className="has-mega-menu"><a className="navbar-item" href="#">Hộ Kinh Doanh</a>
                <ul className="mega-menu">
                  <li><a className="button-link" href="#">Deposit</a>
                    <div className="article">
                      <div className="wrapper"><img className="article__img" src="/images/article-review.png" width="" height="" alt="preview image" />
                        <h5 className="article__header"> <a href="#">Irure Tempor Dolor In Reprehen Lorem Irure Tempor Ipsum Sit Dolor Amet</a></h5>
                        <p className="article__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore…dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <a
                          className="article__link read-more" href="#">Read More</a>
                      </div>
                    </div>
                  </li>
                  <li><a className="active button-link" href="#">Loans</a>
                    <div className="article">
                      <div className="wrapper"><img className="article__img" src="/images/article-review.png" width="" height="" alt="preview image" />
                        <h5 className="article__header"> <a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit</a></h5>
                        <p className="article__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore…dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <a
                          className="article__link read-more" href="#">Read More</a>
                      </div>
                    </div>
                  </li>
                  <li><a className="button-link" href="#">Payment & Transfer</a>
                    <div className="article">
                      <div className="wrapper"><img className="article__img" src="/images/article-review.png" width="" height="" alt="preview image" />
                        <h5 className="article__header"> <a href="#">Irure Tempor Dolor In Reprehen Lorem Irure Tempor Ipsum Sit Dolor Amet</a></h5>
                        <p className="article__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore…dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <a
                          className="article__link read-more" href="#">Read More</a>
                      </div>
                    </div>
                  </li>
                  <li><a className="button-link" href="#">Insurance</a>
                    <div className="article">
                      <div className="wrapper"><img className="article__img" src="/images/article-review.png" width="" height="" alt="preview image" />
                        <h5 className="article__header"> <a href="#">Irure Tempor Dolor In Reprehen Lorem Irure Tempor Ipsum Sit Dolor Amet</a></h5>
                        <p className="article__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore…dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <a
                          className="article__link read-more" href="#">Read More</a>
                      </div>
                    </div>
                  </li>
                  <li><a className="button-link" href="#">Foreign Exchange & Capital Markets</a>
                    <div className="article">
                      <div className="wrapper"></div>
                    </div>
                  </li>
                  <li><a className="button-link" href="#">Cashier Service</a>
                    <div className="article">
                      <div className="wrapper"></div>
                    </div>
                  </li>
                  <li><a className="button-link" href="#">Stock</a>
                    <div className="article">
                      <div className="wrapper"></div>
                    </div>
                  </li>
                  <li><a className="button-link" href="#">Diamond</a>
                    <div className="article">
                      <div className="wrapper"></div>
                    </div>
                  </li>
                </ul>
              </li>
              <li><a className="navbar-item" href="#">Doanh Nghiệp Vừa & Nhỏ</a></li>
              <li><a className="navbar-item" href="#">Doanh Nghiệp Lớn</a></li>
              <li><a className="navbar-item" href="#">VPDiamond</a></li>
            </ul>
            <div className="navbar-mobile">
              <div className="navbar-mobile__container">
                <ul className="primary">
                  <li className="has-sub-menu"><span className="nav-link active"><a href="">Retail</a><i className="icon-chevron-right"></i></span>
                    <div className="sub-menu">
                      <ul className="sub-menu__container"><span className="go-back"><i className="icon-chevron-left"> </i>Retail</span>
                        <li><a href="">Deposit</a></li>
                        <li><a href="">Loans</a></li>
                        <li><a href="">Digital Banking</a></li>
                        <li><a href="">Payment & Transfer</a></li>
                        <li><a href="">Insurance</a></li>
                        <li><a href="">Foreign Exchange & Capital Markets</a></li>
                        <li><a href="">Cashier Service</a></li>
                        <li><a href="">Stock</a></li>
                        <li><a href="">Diamond</a></li>
                      </ul>
                    </div>
                  </li>
                  <li className="has-sub-menu"><span className="nav-link"><a href="">Household</a><i className="icon-chevron-right"></i></span>
                    <div className="sub-menu">
                      <ul className="sub-menu__container"><span className="go-back"><i className="icon-chevron-left"> </i>Household</span>
                        <li><a href="">sub menu Retail</a></li>
                      </ul>
                    </div>
                  </li>
                  <li><span className="nav-link"><a href="">Sme</a></span></li>
                  <li><span className="nav-link"><a href="">Coporate</a></span></li>
                  <li><span className="nav-link"><a href="">Diamond</a></span></li>
                </ul>
                <ul className="sub-primary">
                  <li><span className="nav-link"><a className="global-search" href="">Search</a></span></li>
                  <li><span className="nav-link"><a className="internet-banking" href="">Internet Banking</a></span>
                    <div className="sub-menu">
                      <ul className="sub-menu__container"><span className="go-back"><i className="icon-chevron-left"> </i><a href="">Internet Banking</a></span>
                        <li><a href="">Personal</a></li>
                        <li><a href="">Business</a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <ul className="secondary">
                  <li><a href="#">About US</a></li>
                  <li><a href="#">Investor Relations</a></li>
                  <li><a href="#">News</a></li>
                  <li><a href="#">Recruitment</a></li>
                </ul>
                <ul className="content">
                  <li><a className="heart" href="#">Lovemark</a></li>
                  <li><a className="support" href="#">Support Now</a></li>
                  <li><a className="atm" href="#">Branch & ATM</a></li>
                </ul>
                <div className="language-bar"><a className="flag vn" href=""><img src="/images/icons/icon-flag-vn.svg" alt="" width="25px" height="25px" /></a><a className="flag en" href=""><img src="/images/icons/icon-flag-en.svg" alt="" width="25px" height="25px" /></a></div>
              </div>
            </div>
            <div className="overlay-mobile"></div><i className="icon-close button-close-nav"></i>
            <div className="top-primary__content animated-slow delay-0" animation-type="fadeInUp">
              <div className="general-button js-general-button un-sticky"><img src="/images/icons/icon-internet-banking.png" alt="" />Ngân Hàng Điện Tử
                <div className="sub-menu"><a href="#">Personal</a><a href="#">Business</a></div>
              </div>
              <ul className="navbar-sticky">
                <li className="search"><a href="#" data-toggle="tooltip" data-placement="bottom" title="Tìm kiếm"><img src="/images/icons/icon-search.svg" alt="" width="16px" height="16px" /></a></li>
                <li><a href="#" data-toggle="tooltip" data-placement="bottom" title="Trang yêu thích"><img src="/images/icons/icon-heart.svg" alt="" width="16px" height="16px" /></a></li>
                <li><a href="#" data-toggle="tooltip" data-placement="bottom" title="Liên hệ với chúng tôi"><img src="/images/icons/icon-call.svg" alt="" width="16px" height="16px" /></a></li>
                <li><a href="#" data-toggle="tooltip" data-placement="bottom" title="Chi nhánh &amp; ATM"><img src="/images/icons/icon-location.svg" alt="" width="16px" height="16px" /></a></li>
                <li className="button-icon js-button-icon"><span data-toggle="tooltip" data-placement="bottom" title="Ngân hàng điện tử"><img src="/images/icons/icon-internet-banking.png" alt="" width="16px" height="16px" /></span>
                  <div className="sub-menu"><a href="#">Personal</a><a href="#">Business</a></div>
                </li>
                <Language />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;
