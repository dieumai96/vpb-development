import * as $ from 'jquery';
const RetailBanking = {
  init: () => {
    $('.retail-banking__content').slick({
      slidesToShow: 9,
      infinite: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            infinite: true,
            arrows: true,
            slidesToShow: 6,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 768,
          settings: {
            infinite: true,
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
      ]
    });
  },
};
export default RetailBanking;
