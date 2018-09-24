$(document).ready(function(){
  slider();
  historyEllipsis();




  function slider(){
    $('.js-categories-slider').slick({
      dots: false,
      infinite: false,
      slidesToShow: 4,
      arrows: false
    })
  }
  
  $('[data-js-collapse]').Collapse({
    text: true
  });
  // $('[data-js-collapse-comments]').Collapse({
  //   text: true
  // });
  function historyEllipsis(){
    var defHeight = 52 * 3; //3 lines of search history
    var slideHeight = $('.js-history-list').height();
    var toggleHeight;
    var label;
    // init history height
    if(defHeight < slideHeight){
      label = '更多';
      $('.js-history-view-more').html(label);
      $('.js-history-view-more').removeClass('hide');
      toggleHeight = slideHeight;
      
    }
    // toggle height
    $('.js-history-view-more').on('click', function(){
      $('.js-history-box').animate({
        'height': toggleHeight + 'px'
      });
      
      toggleHeight = toggleHeight == defHeight? slideHeight : defHeight;
      label = label == '更多' ? '收起' : '更多';
      $('.js-history-view-more').html(label);
    })
  }

  

});