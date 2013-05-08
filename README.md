# jquery.validate.js v0.0.1
## html
'data-message-type'로 응답받을 메세지를 지정하고 'data-minlength'로 최소 길이를 지정합니다. 'data-message-type'가 지정되지 않은 input은 검사하지 않습니다.
```html
<form id="testForm">
  <label>이름</label>
  <input type="text" data-message-type="name" />
  <label>이메일</label>
  <input type="email" data-message-type="email" />
  <label>비밀번호</label>
  <input type="password" data-message-type="password" data-minlength="4" />
  <input type="submit" value="submit" />
</form>
<p id="error"></p>
```
## js
첫번째 인자로 callback함수를 넘깁니다.
'''js
$('#testForm').validate(function(data){
  // callback data
  // { result: false, message: "이름을 입력해주세요." }
  if(!data.result){
    alert(data.message);
    return false;
  };
  alert('success');
  // do something ..
});
'''
메시지를 편집하고 싶은 경우 첫번째 인자에 옵션을 추가합니다.
'''js
$('#testForm').on('submit', function(){
  $('#error').text('');
  $('#testForm').validate({
    messages: {
      name: 'name is required.',
      email: 'email is required.'
    }
  }, function(data){
    if(!data.result){
      $('#error').text(data.message);
      return false;
    };
    alert('valitation complete');
    // do something ..
  });
  return false;
});
'''


