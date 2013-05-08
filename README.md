# jquery.validate.js v0.0.1

## markup

`data-message-type`로 응답받을 메세지의 종류를 지정하고 `data-minlength`로 최소 길이를 지정합니다. `data-message-type`이 지정되지 않은 input은 검사하지 않습니다.
```html
<form id="testForm">
  <label>이름</label>
  <input type="text" data-message-type="name" />
  <label>이메일</label>
  <input type="email" data-message-type="email" />
  <label>비밀번호</label>
  <input type="password" data-message-type="password" data-minlength="4" />
  <label>선택 입력창</label>
  <input type="text" />
  <input type="submit" value="submit" />
</form>
<p id="error"></p>
```

## js
첫번째 인자로 callback을 작성합니다.
```html
<script>
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
</script>
```
callback 응답은 다음과 같습니다.
```json
{
  "result": false,
  "message": "이름을 입력해주세요."
}
{
  "result": true
}
```

기본으로 제공되는 메시지를 변경하고 싶은 경우 첫번째 인자에 messages옵션을 추가합니다. 기본으로 제공되는 메시지는 다음과 같습니다.
```json
{
  "messages": {
    "name": "이름을 입력해주세요.",
    "email": "이메일을 입력해주세요.",
    "password": "비밀번호를 입력해주세요.",
    "minlength": "글자 이상 입력해주세요."
  }
}
```

첫번째 인자로 커스텀 메시지를 추가합니다.
```html
<script>
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
</script>
```

