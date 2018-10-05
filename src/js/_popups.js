$.fn.Popups = function(opts){

  var container = $(this);

 
  
  events();

  function events(){
    txtMsgPopup();
  }

  function txtMsgPopup(){
    $(document).on('click touch', '.js-open-popup-code', function(e){
      e.stopPropagation()
      // $('.js-popup-code').show();
      showPopup($('.js-popup-code'));
    });
    $(document).on('click touch', '.js-popup-cover', function(e){
      e.stopPropagation();
      closePopup($('.js-popup-code'));
    });
  }

  function showPopup(ele){
    var ele = ele;
    ele.show();
    $('.js-popup-cover').show();
  }

  function closePopup(ele){
    var ele = ele;
    ele.hide();
    $('.js-popup-cover').hide();
  }

}
  