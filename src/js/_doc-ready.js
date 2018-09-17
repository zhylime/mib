$(document).ready(function(){




  slider();



  function slider(){
    $('.js-categories-slider').slick({
      // centerMode: true,
      dots: false,
      infinite: false,
      slidesToShow: 4,
      arrows: false
    })
  }

});