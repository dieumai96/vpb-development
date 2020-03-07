import * as $ from 'jquery';
const storyTipsSlide = $('.story-tips-box');

const Promotion = {
  init: () => {
    $('.promotion-slide').not('.slick-initialized').slick({
      slidesToShow: 1,
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
    })
  }
}

export default Promotion;
