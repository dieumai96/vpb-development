import * as $ from 'jquery';
const FooterJquery = {
  init: () => {
    FooterJquery.footerRounting();
  },

  footerRounting: () => {
    const sectionTarget = $('.footer');
    function isIE() {
      const ua = window.navigator.userAgent;
      const msie = ua.indexOf('MSIE '); // IE 10 or older
      const trident = ua.indexOf('Trident/'); // IE 11
      return (msie > 0 || trident > 0);
    }

    if (sectionTarget.length) {
      const linkTarget = sectionTarget.find('.footer__link__item ul li a');
      if (linkTarget.length) {
        linkTarget.each((index, item) => {
          const $this = $(item);
          const fullLink = $this.attr('href');
          const chunks = fullLink.split('#');
          const formattedDate = chunks[0];
          const reworkLink = chunks[1];

          if (formattedDate === window.location.pathname) {
            $this.attr('href', '#' + reworkLink)
          }
        });
      }

      linkTarget.on('click', (event) => {
        const $this = $(event.currentTarget);
        const $target = $($this.attr('href'));
        const topPrimaryHeight = $('.top-primary').height();
        $('.card-detail-content__head__list a').removeClass('active');
        $this.addClass('active');
        if ($target.length) {
          if (isIE()) {
            const heightMenufix = $('.top-secondary').height();
            const w = $(window).scrollTop();
            if (w > heightMenufix) {
              // event.preventDefault();
              $('html, body').stop().animate({
                scrollTop: $target.offset().top - topPrimaryHeight,
              }, 1000);
            } else {
              // event.preventDefault();
              $('html, body').stop().animate({
                scrollTop: $target.offset().top - topPrimaryHeight,
              }, 1000);
            }
          } else {
            // event.preventDefault();
            $('html, body').stop().animate({
              scrollTop: $target.offset().top - topPrimaryHeight,
            }, 1000);
          }
        }
      });
    }
  },
};
export default FooterJquery;
