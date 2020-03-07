import React from 'react'

const VpbAward = () => {
  return (
    <section className="vpbank-award  delay-0" animation-type="fadeInUp">
      <div className="container">
        <div className="vpbank-award-content">
          <picture className="vpbank-award-content__img">
            <source media="(max-width: 767px)" srcSet="/images/vpbank-award-mobile.png" /><img src="/images/components-image/vpbank-award.jpg" alt="" /></picture>
          <div className="vpbank-award-content__text">
            <div className="title"> "Vpbank Award -<br />Lorem ipsum adipisicing ipsum adipisicing elit. Asperiores"</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VpbAward
