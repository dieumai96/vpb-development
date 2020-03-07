import React from 'react'

const TalkToUs = () => {
  return (
    <section className="talk-to-us">
      <div className="talk-to-us__image">
        <picture><img src="/images/components-image/talk-to-us/talk-to-us-bg-dt.png" alt="not-mobile" /></picture>
      </div>
      <div className="talk-to-us__content">
        <div className="container">
          <div className="talk-to-us__content__option">
            <div className="talk-to-us__content__option__item  delay-200" animation-type="fadeInUp"><a href="tel:1900545415"><span className="icon"><img src="/images/components-image/talk-to-us/ico-phone.png" alt="not-mobile" /></span><span className="text">1900545415</span></a></div>
            <div className="talk-to-us__content__option__item  delay-400"
              animation-type="fadeInUp"><a href="#"><span className="icon"><img src="/images/components-image/talk-to-us/ico-location.png" alt="not-mobile" /></span><span className="text">Find brand ATM</span></a></div>
            <div className="talk-to-us__content__option__item  delay-600"
              animation-type="fadeInUp"><a href="#"><span className="icon"><img src="/images/components-image/talk-to-us/ico-mail.png" alt="not-mobile" /></span><span className="text">Email us</span></a></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TalkToUs
