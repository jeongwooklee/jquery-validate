$('#testForm').on('submit', function(){
  $('#error').text('');
  $('#testForm').validate({
    messages: {
      name: '이름 커스텀 메시지',
      email: '이메일 커스텀 메시지'
    }
  }, function(data){
    if(!data.result){
      $('#error').text(data.message);
      return false;
    };
    alert('valitation complete');
  });
  return false;
});
