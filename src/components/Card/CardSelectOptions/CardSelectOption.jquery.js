import * as $ from 'jquery';

const cardOptionsList = $('.add-card-component .add-card-content');
let maxItem = 1;
const CardSelectOption = {
  init: () => {
    $('.add-card-component .add-card-content').not('.slick-initialized').slick({
      slidesToShow: maxItem,
      slidesToShow: 6,
      slidesToScroll: 1,
      arrows: true,
    });
  }
}
export default CardSelectOption;