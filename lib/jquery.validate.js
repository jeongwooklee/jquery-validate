/*
 * jQuery Form Validation Plugin
 * version: 0.0.1
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright (c) Jeongwook Lee
 */
(function($){
  $.fn.validate = function(options, callback){
    if(typeof options === 'function') var callback = options;
    var settings = $.extend(true, {
      messages: {
        name: '이름을 입력해주세요.',
        email: '이메일을 입력해주세요.',
        password: '비밀번호를 입력해주세요.',
        minlength: '글자 이상 입력해주세요.'
      }
    }, options);
    var data = {
      result: true
    };
    this.find('input[data-message-type]').each(function(index, value){
      var item = $(value);
      if(!item.val()) {
        var name = item.data('message-type'),
            message = settings.messages[name];
        data.result = false;
        data.message = message;
        return false;
      }
      if(item.data('minlength')){
        var dataMinlength = item.data('minlength'),
            valueLength = item.val().length;
        if(valueLength < dataMinlength) {
          data.result = false;
          data.message = dataMinlength + settings.messages.minlength;
          return false;
        }
      }
    });
    callback(data);
  };
  return this;
})(jQuery);
