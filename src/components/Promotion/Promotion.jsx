import React from 'react'

const Promotion = () => {
  return (
    <section className="promotion delay-0" animation-type="fadeInUp">
      <div className="container">
        <div className="section-title">
          <h2>Promotion</h2>
        </div>
        <div className="nav-tab promotion--tab promotion--menu-collapse">
          <div className="collapse-header" data-target="#collapse-content"> <img src="/assets/images/filter-icon.png" alt="filter promotion" />Khuyến mại theo</div>
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
        </div>
      </div>
    </section>
  )
}

export default Promotion
