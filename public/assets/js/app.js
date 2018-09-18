'use strict';

$(document).ready(function () {
  slider();
  historyEllipsis();

  function slider() {
    $('.js-categories-slider').slick({
      dots: false,
      infinite: false,
      slidesToShow: 4,
      arrows: false
    });
  }

  function historyEllipsis() {
    var defHeight = 52 * 3; //3 lines of search history
    var slideHeight = $('.js-history-list').height();
    var toggleHeight;
    // init history height
    if (defHeight < slideHeight) {
      $('.js-history-view-more').removeClass('hide');
      toggleHeight = slideHeight;
    }
    // toggle height
    $('.js-history-view-more').on('click', function () {
      $('.js-history-box').animate({
        'height': toggleHeight + 'px'
      });
      toggleHeight = toggleHeight == defHeight ? slideHeight : defHeight;
    });
  }
});