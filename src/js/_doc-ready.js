$(document).ready(function(){
  slider();
  history();



  function slider(){
    $('.js-categories-slider').slick({
      // centerMode: true,
      dots: false,
      infinite: false,
      slidesToShow: 4,
      arrows: false
    })
  }

  function history(){
    var defHeight = 52 * 3; //3 lines of search history
    var slideHeight = $('.js-history-list').height();
    var toggleHeight;

    console.log(slideHeight);
    if(defHeight < slideHeight){
      $('.js-history-view-more').removeClass('hide');
      // $('.js-history-box').css('height', defHeight + 'px');
      toggleHeight = slideHeight;
    }
    // $('.js-history-box').css('max-height', 'initial');
    $('.js-history-view-more').on('click', function(){
      $('.js-history-box').animate({
        'height': toggleHeight + 'px'
      });
      toggleHeight = toggleHeight == defHeight? slideHeight : defHeight;
    })
  }

  // function historyEllipsis(){
  //   $('.js-history-list').animate({
  //     'height': toggleHeight + 'px'
  //   });
  //     toggleHeight = defHeight;
    
  // }

});