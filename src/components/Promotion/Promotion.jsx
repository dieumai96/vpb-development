import React, { useEffect } from 'react'
import PromotionJquery from './Promotion.jquery';

const Promotion = () => {
  useEffect(() => {
    PromotionJquery.init();
  }, []);

  return (
    <section className="promotion delay-0" animation-type="fadeInUp">
      <div className="container">
        <div className="section-title">
          <h2>Promotion</h2>
        </div>
        <div className="nav-tab promotion--tab promotion--menu-collapse">
          <div className="collapse-header" data-target="#collapse-content"> <img src="/images/filter-icon.png" alt="filter promotion" />Khuyến mại theo</div>
          <ul className="nav-tab__link so-tab collapse-content" id="collapse-content">
            <li><span className="tab-color-1">Khuyến mại theo</span></li>
            <li><a className="tab-special" href="#promotion10" data-link="promotion10"><span className="icon-special"></span>Special</a></li>
            <li><a className="tab-color-2" href="#promotion2" data-link="promotion2">Loans</a></li>
            <li><a className="tab-color-3" href="#promotion3" data-link="promotion3">Savings</a></li>
            <li><a className="tab-color-4" href="#promotion4" data-link="promotion4">Digital Banking</a></li>
            <li><a className="tab-color-5" href="#promotion5" data-link="promotion5">Opening new card</a></li>
            <li><a className="tab-color-6" href="#promotion6" data-link="promotion6">For Cardholders</a></li>
            <li><a className="tab-color-7" href="#promotion7" data-link="promotion7">For Businesses</a></li>
            <li><a className="tab-color-8" href="#promotion1" data-link="promotion1">Tất cả</a></li>
          </ul>
          <div className="nav-tab__content promotion-tab-content">
            <div className="promotion1 tab-pane animated active fadeInUp" id="promotion1">
              <div className="row">
                <div className="col-md-8 col-lg-8 promotion-wrap__left">
                  <div className="promotion-slide" data-slick="{&quot;autoplay&quot;: true, &quot;autoplaySpeed&quot;: 3000}">
                    <a className="promotion-item promotion-item--main" href="#" data-index="GAWKLGDJKNGJKSNEGJKSNEGSE">
                      <picture>
                        <source media="(max-width: 767px)" srcSet="/images/promotion-item.jpg" /><img src="/images/promotion-item.jpg" alt="" /></picture>
                      <div className="promotion-item__content"><span className="promotion-item--tag">Limited time</span>
                        <div className="promotion-item--wishlist"><input id="checkbox1" type="checkbox" /><label htmlFor="checkbox1">Travel</label></div>
                        <h5 className="promotion-item--title">Lorem ipsum dolor sit amet, consectetur</h5>
                      </div>
                    </a>
                    <a className="promotion-item promotion-item--main" href="#" data-index="GSGAKLWMGAWMDAWMDAWDAW">
                      <picture>
                        <source media="(max-width: 767px)" srcSet="/images/promotion-item.jpg" /><img src="/images/promotion-item.jpg" alt="" /></picture>
                      <div className="promotion-item__content">
                        <div className="promotion-item--tag">Limited time</div>
                        <div className="promotion-item--wishlist"><input id="checkbox2" type="checkbox" /><label htmlFor="checkbox2">Travel</label></div>
                        <h5 className="promotion-item--title">Lorem ipsum dolor sit amet, consectetur</h5>
                      </div>
                    </a>
                  </div>
                  <div className="promotion-weather-bar animated-slow delay-500" animation-type="fadeInUp">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="promotion-weather-bar__left">
                          <div className="wether-text">
                            <h5> <span className="time-season"></span><span className="place">Ha Noi</span></h5>
                            <p className="current-time"></p><input className="txtmorning" type="hidden" value="Chào buổi sáng " /><input className="txtafternoon" type="hidden" value="Chào buổi chiều " /><input className="txtevening" type="hidden" value="Chào buổi tối " />
                            <div
                              className="air-pollution"><img className="img-air" src="/images/weather/ic-face-green.svg" alt="" />
                              <p><span className="aqi-number">50</span><span className="aqi-type">US AQI</span></p>
                            </div>
                          </div>
                          <div className="weather-detail"><img className="img-weather" src="/images/weather/02d.png" alt="" />
                            <p className="weather-temperature"><span className="temperature">25</span><span className="unit-temperature"><sup>o</sup>C</span></p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <h5 className="bad-weather hidden">Trời mưa rồi, gọi Be thôi. Be xuất được hóa đơn thanh toán cho doanh nghiệp nhé!</h5>
                        <h5 className="good-weather">Trời nắng, trời nắng thỏ đi tắm nắng</h5><a className="btn btn-outline-primary" href="#">Discover now</a></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 promotion-wrap__right">
                  <div className="promotion-wrap__right_content" id="scroll">
                    <a className="promotion-item" href="#" data-index="1DAKULWNDAJKWDNAJKWNDKAJWDNKAWD">
                      <picture>
                        <source media="(max-width: 767px)" srcSet="/images/promotion-item.jpg" /><img src="/images/promotion-item.jpg" alt="" /></picture>
                      <div className="promotion-item__content"><span className="promotion-item--tag">Limited time</span>
                        <div className="promotion-item--wishlist"><input id="checkbox3" type="checkbox" /><label htmlFor="checkbox3">Travel</label></div>
                        <h5 className="promotion-item--title">Lorem ipsum dolor sit amet, consectetur ipsum dolor sit amet</h5>
                      </div>
                    </a>
                    <a className="promotion-item" href="#" data-index="2q8U234UIQNDKJQ2NKJDNAWKDNAW">
                      <picture>
                        <source media="(max-width: 767px)" srcSet="/images/promotion-item.jpg" /><img src="/images/promotion-item.jpg" alt="" /></picture>
                      <div className="promotion-item__content"><span className="promotion-item--tag">Limited time</span>
                        <div className="promotion-item--wishlist"><input id="checkbox4" type="checkbox" /><label htmlFor="checkbox4">Travel</label></div>
                        <h5 className="promotion-item--title">Lorem ipsum dolor sit amet, consectetur</h5>
                      </div>
                    </a>
                    <a className="promotion-item" href="#" data-index="3DAWDAWDMAWDMAWKDAW">
                      <picture>
                        <source media="(max-width: 767px)" srcSet="/images/promotion-item.jpg" /><img src="/images/promotion-item.jpg" alt="" /></picture>
                      <div className="promotion-item__content"><span className="promotion-item--tag">Limited time</span>
                        <div className="promotion-item--wishlist"><input id="checkbox5" type="checkbox" /><label htmlFor="checkbox5">Travel</label></div>
                        <h5 className="promotion-item--title">Lorem ipsum dolor sit amet, consectetur</h5>
                      </div>
                    </a>
                    <a className="promotion-item" href="#" data-index="4VADAWIOJDAWMDKAWMDKLMDKLWMDKAMDKAW">
                      <picture>
                        <source media="(max-width: 767px)" srcSet="/images/promotion-item.jpg" /><img src="/images/promotion-item.jpg" alt="" /></picture>
                      <div className="promotion-item__content"><span className="promotion-item--tag">Limited time</span>
                        <div className="promotion-item--wishlist"><input id="checkbox6" type="checkbox" /><label htmlFor="checkbox6">Travel</label></div>
                        <h5 className="promotion-item--title">Lorem ipsum dolor sit amet, consectetur</h5>
                      </div>
                    </a>
                    <a className="promotion-item" href="#" data-index="4VADAWIOJDdawdAWMDKAWMDKLMDKLWMDKAMDKAW">
                      <picture>
                        <source media="(max-width: 767px)" srcSet="/images/promotion-item.jpg" /><img src="/images/promotion-item.jpg" alt="" /></picture>
                      <div className="promotion-item__content"><span className="promotion-item--tag">Limited time</span>
                        <div className="promotion-item--wishlist"><input id="checkbox6" type="checkbox" /><label htmlFor="checkbox6">Travel</label></div>
                        <h5 className="promotion-item--title">Lorem ipsum dolor sit amet, consectetur</h5>
                      </div>
                    </a>
                    <a className="promotion-item" href="#" data-index="4VADAdawawcawWIOJDAWMDKAWMDKLMDKLWMDKAMDKAW">
                      <picture>
                        <source media="(max-width: 767px)" srcSet="/images/promotion-item.jpg" /><img src="/images/promotion-item.jpg" alt="" /></picture>
                      <div className="promotion-item__content"><span className="promotion-item--tag">Limited time</span>
                        <div className="promotion-item--wishlist"><input id="checkbox6" type="checkbox" /><label htmlFor="checkbox6">Travel</label></div>
                        <h5 className="promotion-item--title">Lorem ipsum dolor sit amet, consectetur</h5>
                      </div>
                    </a>
                    <a className="promotion-item" href="#" data-index="4VADAw2awdawWIOJDAWMDKAWMDKLMDKLWMDKAMDKAW">
                      <picture>
                        <source media="(max-width: 767px)" srcSet="/images/promotion-item.jpg" /><img src="/images/promotion-item.jpg" alt="" /></picture>
                      <div className="promotion-item__content"><span className="promotion-item--tag">Limited time</span>
                        <div className="promotion-item--wishlist"><input id="checkbox6" type="checkbox" /><label htmlFor="checkbox6">Travel</label></div>
                        <h5 className="promotion-item--title">Lorem ipsum dolor sit amet, consectetur</h5>
                      </div>
                    </a>
                    <a className="promotion-item" href="#" data-index="4VdawdawgbgbfADAWIOJDAWMDKAWMDKLMDKLWMDKAMDKAW">
                      <picture>
                        <source media="(max-width: 767px)" srcSet="/images/promotion-item.jpg" /><img src="/images/promotion-item.jpg" alt="" /></picture>
                      <div className="promotion-item__content"><span className="promotion-item--tag">Limited time</span>
                        <div className="promotion-item--wishlist"><input id="checkbox6" type="checkbox" /><label htmlFor="checkbox6">Travel</label></div>
                        <h5 className="promotion-item--title">Lorem ipsum dolor sit amet, consectetur</h5>
                      </div>
                    </a>
                    <a className="promotion-item" href="#" data-index="4VADAWIOJDAW23232323MDKAWMDKLMDKLWMDKAMDKAW">
                      <picture>
                        <source media="(max-width: 767px)" srcSet="/images/promotion-item.jpg" /><img src="/images/promotion-item.jpg" alt="" /></picture>
                      <div className="promotion-item__content"><span className="promotion-item--tag">Limited time</span>
                        <div className="promotion-item--wishlist"><input id="checkbox6" type="checkbox" /><label htmlFor="checkbox6">Travel</label></div>
                        <h5 className="promotion-item--title">Lorem ipsum dolor sit amet, consectetur</h5>
                      </div>
                    </a>
                    <a className="promotion-item" href="#" data-index="4VADAvfvfvfvfvfWIOJDAWMDKAWMDKLMDKLWMDKAMDKAW">
                      <picture>
                        <source media="(max-width: 767px)" srcSet="/images/promotion-item.jpg" /><img src="/images/promotion-item.jpg" alt="" /></picture>
                      <div className="promotion-item__content"><span className="promotion-item--tag">Limited time</span>
                        <div className="promotion-item--wishlist"><input id="checkbox6" type="checkbox" /><label htmlFor="checkbox6">Travel</label></div>
                        <h5 className="promotion-item--title">Lorem ipsum dolor sit amet, consectetur</h5>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Promotion
