/*
 * jQuery Form validation Plugin
 * version: 0.0.1
 *
 * Licensed under the MIT license
 * Copyright (c) Jeongwook Lee
 */
(function($){
  $.fn.validate = function(options, callback){
    var callback = callback || options;
    var settings = $.extend(true, {
      focus: true,
      messages: {
        required: '{{type}} - 필수입니다.',
        minlength: '{{type}} - {{num}}글자 이상이여야 합니다.'
      }
    }, options);
    var data = { result: true };
    this.find('input[data-message-type]').each(function(index, value){
      var item = $(value),
          type = item.data('message-type'),
          typeText = $('label[data-label-type="' + type + '"]').text();
      if(!item.val()) {
        data.result = false;
        data.message = settings.messages.required.replace(/{{type}}/g, typeText);
        if(settings.focus) item.focus();
        return false;
      }
      if(item.data('minlength')){
        var dataMinlength = item.data('minlength'),
            valueLength = item.val().length;
        if(valueLength < dataMinlength) {
          data.result = false;
          data.message = settings.messages.minlength.replace(/{{type}}/g, typeText).replace(/{{num}}/g, dataMinlength);
          if(settings.focus) item.focus();
          return false;
        }
      }
    });
    callback(data);
  };
  return this;
})(jQuery);
