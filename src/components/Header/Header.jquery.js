import Util from '../../utils/util';
import * as $ from 'jquery';
const STICKY_STOP_POINT = 46;
const MOBILE_BREAKPOINT = 1024;
const $generalButton = $('.top-primary .js-general-button, .top-primary .js-button-icon');
const $searchWrap = $('.top-primary .js-search-icon');
const $searchButton = $('.top-primary .js-search-icon > span');
const $searchClose = $('.top-primary .js-search-icon span.icon-close');

const Header = {
  init: () => {
    console.log('here');
    console.log($('.mobile-menu'));
    $('.mobile-menu').click(() => {
      $('.navbar-mobile').toggleClass('display');
      $('.mobile-menu').toggleClass('hamburger-hover');
      $('body').addClass('side-menu-open');
    });

    $('.navbar-mobile .nav-link i').click((event) => {
      // event.preventDefault();
      const $this = $(event.currentTarget);
      $this.parents('li').find('.sub-menu').addClass('display');
    });

    $('.navbar-mobile .nav-link .internet-banking').click((event) => {
      event.preventDefault();
      const $this = $(event.currentTarget);
      $this.parents('li').find('.sub-menu').addClass('display');
    });

    $('.navbar-mobile .go-back i').click((event) => {
      const $this = $(event.currentTarget);
      $this.parents('li').find('.sub-menu').removeClass('display');
    });

    $('.overlay-mobile, .button-close-nav').click(() => {
      $('.navbar-mobile').toggleClass('display');
      $('.mobile-menu').toggleClass('hamburger-hover');
      $('body').removeClass('side-menu-open');
    });

    $('.top-secondary .search .navbar-item').click((event) => {
      const $input = $(event.currentTarget)
        .parents('.search')
        .find('input[name=search');
      $input.focus();
    });

    $generalButton.click((event) => {
      // event.preventDefault();
      $generalButton.find('.sub-menu').toggleClass('display');
    });

    // INFO: if click in document, hide isDropdownOpen.
    $(document).mouseup((e) => {
      if (!$generalButton.is(e.target) && $generalButton.has(e.target).length === 0) {
        $generalButton.find('.sub-menu').removeClass('display');
      }
    });

    // Search button action
    $searchButton.click((event) => {
      // event.preventDefault();
      $searchWrap.find('.sub-menu').addClass('display');
    });

    $searchClose.on('click', (event) => {
      $searchWrap.find('.sub-menu').removeClass('display');
    });

    // INFO: if click in document, hide isDropdownOpen.
    $(document).mouseup((e) => {
      if (!$searchWrap.is(e.target) && $searchWrap.has(e.target).length === 0) {
        $searchWrap.find('.sub-menu').removeClass('display');
      }
    });


    Header._initStickyHeader();
  },

  onWindowResize: () => {
    if ($('body').width() > MOBILE_BREAKPOINT) {
      $('.navbar-primary').css('display', 'flex');
    } else {
      $('.navbar-primary').css('display', 'none');
    }
  },

  _initStickyHeader: () => {
    const $sticky = $('.top-primary');
    $(window).scroll(() => {
      const windowTop = $(window).scrollTop();

      if (STICKY_STOP_POINT < windowTop) {
        if (Util.detechIE()) {
          $sticky.addClass('sticked');
        } else {
          $sticky.addClass('sticked');
        }
      } else {
        $sticky.removeClass('sticked');
      }
    });
    $(window).scroll();
  },
};
export default Header;
