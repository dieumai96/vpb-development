import * as $ from 'jquery';

const mastheadSlide = {
  init: () => {
    $('.masthead__slide').not('.slick-initialized').slick({
      slidesToShow: 1,
      dots: true,
    });
  },
};

export default mastheadSlide;
