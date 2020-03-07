import * as $ from 'jquery';
const Testimonials = {
  init: () => {
    $('.testimonials .testimonials-wrap .testimonials__slide').slick({
      // centerPadding: '60px',
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: true,
          },
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  },
};
export default Testimonials;
