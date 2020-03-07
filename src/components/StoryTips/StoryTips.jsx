import React, { useEffect } from 'react'
import StoryTipsJquery from './StoryTips.jquery';
const StoryTips = () => {
  useEffect(() => {
    StoryTipsJquery.init();
  }, [])
  return (
    <section className="story-tips-component">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-8">
            <div className="story-tips-box">
              <div className="story-tips-slick" data-index="ngagrkngjksednrgkjnedrjkng">
                <div className="row no-gutters">
                  <div className="col-sm-6 story-tips-top">
                    <div className="story-tips"><a className="tag-story" href="">story & tips</a>
                      <h4 className="story-tips__title"><a href="">Lorem ipsum dolor sit amet.</a></h4>
                      <div className="story-tips__detail">Lorem ipsum dolor sit amet ipsum dolor sit amet consecteturLorem ipsum delit. Quam, accusantium! Eum, minima?</div><a className="read-more" href="">Read More</a></div>
                  </div>
                  <div className="col-sm-6 story-tips-img">
                    <div className="story-tips--wishlist"><input id="story-tips-wl1" type="checkbox" /><label htmlFor="story-tips-wl1"></label></div><a href="#"><img src="/images/components-image/card-mobifone.png" alt="" /></a></div>
                </div>
              </div>
              <div className="story-tips-slick" data-index="damwgkamwgkmawkmfkawmfkamofaw">
                <div className="story-tips-slick"></div>
                <div className="row no-gutters">
                  <div className="col-sm-6 story-tips-top">
                    <div className="story-tips"><a className="tag-story" href="">story & tips</a>
                      <h4 className="story-tips__title"><a href="">Lorem ipsum dolor sit amet.</a></h4>
                      <div className="story-tips__detail">Lorem ipsum dolor sit amet ipsum dolor sit amet consecteturLorem ipsum delit. Quam, accusantium! Eum, minima?</div><a className="read-more" href="">Read More</a></div>
                  </div>
                  <div className="col-sm-6 story-tips-img">
                    <div className="story-tips--wishlist"><input id="story-tips-wl2" type="checkbox" /><label htmlFor="story-tips-wl2"></label></div><a href="#"><img src="/images/components-image/card-mobifone.png" alt="" /></a></div>
                </div>
              </div>
              <div className="story-tips-slick" data-index="vnjdrnfvjnsdrnvdrbnvdrbnvjhdrbvhdpro">
                <div className="story-tips-slick"></div>
                <div className="row no-gutters">
                  <div className="col-sm-6 story-tips-top">
                    <div className="story-tips"><a className="tag-story" href="">story & tips</a>
                      <h4 className="story-tips__title"><a href="">Lorem ipsum dolor sit amet.</a></h4>
                      <div className="story-tips__detail">Lorem ipsum dolor sit amet ipsum dolor sit amet consecteturLorem ipsum delit. Quam, accusantium! Eum, minima?</div><a className="read-more" href="">Read More</a></div>
                  </div>
                  <div className="col-sm-6 story-tips-img">
                    <div className="story-tips--wishlist"><input id="story-tips-wl3" type="checkbox" /><label htmlFor="story-tips-wl3"></label></div><a href="#"><img src="/images/components-image/card-mobifone.png" alt="" /></a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4">
            <div className="card-cashbank">
              <picture><img src="/images/components-image/card-cashback.jpg" alt="" /></picture>
              <div className="card-cashbank__title">VPBank<br />Cashbank Card</div>
              <div className="card-cashbank__button"><a className="btn btn-outline-primary" href="">Discover now</a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default StoryTips