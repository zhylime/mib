$(document).ready(function(){
  banner();



  function banner(){
    $('.js-banner').slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      arrows: false
    })
  }
});