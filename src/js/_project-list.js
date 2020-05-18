$.fn.ProjectList = function(opts){

  // var sliderContainer = $(this).find('.js-categories-slider');
  var favoriteIcons = $(this).find('.js-favorite');
  var filter1 = $(this).find('.filter-1');
  var filterBtn = $(this).find('.filter .filter-btn');


 
  
  events();

  function events(){
    // slider();
   
    toggleFavorite();


    filterBtn.on('click touch',function(){
      filterBtn.removeClass('active');
      $(this).addClass('active');
      $('.filter__dropdown').hide();
    })
    filter1.find('.filter-btn').on('click touch', function(e){
      $(this).next().stop().slideToggle();
      $(this).addClass('active')
    })
   }

  function slider(){
    sliderContainer.slick({
      dots: false,
      infinite: false,
      slidesToShow: 3,
      arrows: false
    })
  }

  function toggleFavorite(){
    favoriteIcons.each(function(){
      $(this).on('click touch', function(e){
        e.preventDefault();
        e.stopPropagation();
        $(this).toggleClass('active');
      })
    })
  }

}
  