import * as $ from 'jquery';
const Promotion = {
  init: () => {
    // $('.promotion-slide').slick({
    //   slidesToShow: 1,
    //   dots: true,
    //   arrows: false,
    // });
    // $('.promotion-slide').slick('unslick'); 
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
