$.fn.EditStage = function(opts){

  var container = $(this);

  var stageTemplateHTML = container.find('.template').html();



 

 
  
  events();

  function events(){
    syncInput();
    $(document).on('click touch', '.js-add-stage', function(){
      // var stageNum = $(this).parents('.js-stage-item').data('stage');
      // addStage(stageNum+1);
      $(stageTemplateHTML).insertAfter($(this).parents('.js-stage-item'));
      syncStageNum();
      // syncInput();
    
    });

    // 移除阶段
    $(document).on('click touch', '.js-remove-stage',function(){
      var stageNum = $(this).parents('.js-stage-item').data('stage');
      var length = $('.js-stage-item').length;
      if(stageNum >1 && stageNum < length-1){
        $(this).parents('.js-stage-item').remove();
        syncStageNum();
      }
      else{
        $(this).addClass('hide');
        $(this).next().removeClass('hide');
        $(this).parents('.js-stage-item').addClass('disabled');
      }
    })

    $(document).on('click touch', '.js-refresh-stage', function(){
      $(this).addClass('hide');
      $(this).prev().removeClass('hide');
      $(this).parents('.js-stage-item').removeClass('disabled');
    })
    
  }



  // 重制数字
  function syncInput(){
    $('input.input-number').on('change', function(){
      var n = $(this).val();
      $(this).parents('.js-stage-item').find('span.input-number').html(n);
    })
  }
 
   // 重制数列
  function syncStageNum(){
    var length = $('.js-stage-item').length;
    $(container).find('.js-stage-item').each(function(i){
      
      if(!$(this).parents().hasClass('template')){
        $(this).data('stage',i);
        if(i>1&&i<length-1){
          $(this).find('.input-wrapper span').html('第'+i+'阶段');
          $(this).find('.input-wrapper input').val('第'+i+'笔付款');
        };

      }
    })
    syncInput();
    $('[data-js-datepickerRange]').DatePickerRange();
  }


  
}
  