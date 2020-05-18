$.fn.DatePickerRange = function(opts){

  var container = $(this);
  var datePicker = container.find('.js-ui-datepicker-range');
  const DatePickerDefaultValue = '点击设置折扣价的有效周期';



  
 
  
  events();

  function events(){
 
    rangePicker();

    container.find('.js-clear-date').on('click touch', function(){
      clearDate($(this));
    })
  }

  function rangePicker(){
    var selectedRange;
    var defaultVal = $(datePicker).val();
    datePicker.datepicker({
      dateFormat:'yy/mm/dd',
      numberOfMonths: 1,
      onSelect: function( selectedDate ) {
          if(!$(this).data().datepicker.first){
              $(this).data().datepicker.inline = true
              $(this).data().datepicker.first = selectedDate;
          }else{
              if(selectedDate > $(this).data().datepicker.first){
                  $(this).val($(this).data().datepicker.first+" - "+selectedDate);
              }else{
                  $(this).val(selectedDate+" - "+$(this).data().datepicker.first);
              }
              $(this).data().datepicker.inline = false;
              selectedRange = $(this).val();

          }
      },
      onClose:function(){
          $(this).parents('.datepicker-wrapper').find('.js-date-display').html(selectedRange);

          // $(this).val(defaultVal);

          // $('.display-date').addClass('active');
          $(this).parents('.datepicker-wrapper').find('.display-date').addClass('active').removeClass('hide');
          delete $(this).data().datepicker.first;
          $(this).data().datepicker.inline = false;
      }
    })
  }

  function clearDate(el){
    el.prev().html('');
    el.parents('.display-date').removeClass('active');
    el.parents('.datepicker-wrapper').find('.date-picker-input').val(DatePickerDefaultValue);

  }
  
 

}