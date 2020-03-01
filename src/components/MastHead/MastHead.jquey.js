import * as $ from 'jquery';

const mastheadSlide = {
  init: () => {
    $('.masthead__slide').slick({
      slidesToShow: 1,
      dots: true,
    });
  },
};

export default mastheadSlide;
