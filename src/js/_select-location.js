$.fn.SelectLocation = function(opts){

  var container = $(this);
  var completeBtn = container.find('.js-complete');
  var selections = container.find('.js-selection');
  var selected = container.find('.js-selected');

  const btnLabel = completeBtn.html();

 
  
  events();

  function events(){
    var queryString;

    selections.on('click touch', function(){
      var countryName = $(this).find('.c-location--item--name').html();
      selections.removeClass('active');
      $(this).toggleClass('active');
      selected.find('.c-location--item--name').html(countryName);
      selected.removeClass('hide');

      var locString = $(this).find('[data-location]').attr('data-location');
      
      queryString = 'loc=' + locString;
      console.log(queryString);

    })

    completeBtn.on('click touch', function(){
      // 这里返回之前页面并且需要有参数
      window.location.href="./setting-user.html?" + queryString;
    });

    // 默认选中国
    selections.find('[data-location="中国"]').click();
    
    
  }
  function getLocation(){


  }

  
}
  