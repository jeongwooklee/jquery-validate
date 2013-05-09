# jquery.validate.js v0.0.1

## markup
`data-label-type`과 `data-message-type'으로 label과 input을 연결하고 검증해야할 요소임을 지정합니다.
* `data-message-type`이 지정되지 않은 input은 검사하지 않습니다.
* `data-label-type`의 텍스트가 리턴되는 메시지의 {{type}}과 매칭되며, `data-minlength`의 값이 {{num}}과 매칭됩니다.
```html
<form id="testForm">
  <label data-label-type="name">이름</label>
  <input type="text" data-message-type="name" />
  <label data-label-type="email">이메일</label>
  <input type="email" data-message-type="email" />
  <label data-label-type="password">비밀번호</label>
  <input type="password" data-message-type="password" data-minlength="4" />
  <label>선택 입력창</label>
  <input type="text" />
  <input type="submit" value="submit" />
</form>
<p id="error"></p>
```

## js
별도의 옵션을 지정하지 않을 경우 첫번째 인자로 callback을 작성합니다.
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
callback data는 다음과 같이 구성됩니다.
```json
{
  "result": false,
  "message": "이름을 입력해주세요."
}
```
```json
{
  "result": true
}
```

기본으로 제공되는 메시지를 변경하고 싶은 경우 첫번째 인자에 messages옵션을 추가합니다.
```html
<script>
  $('#testForm').on('submit', function(){
    $('#error').text('');
    $('#testForm').validate({
      messages: {
        require: '{{type}} is required.',
        minlength: '{{type}} must be at least {{num}} characters long.'
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

기본으로 제공되는 메시지는 다음과 같습니다.
```json
{
  "messages": {
    "require": "{{type}} - 필수입니다.",
    "minlength": "{{type}} - {{num}}글자 이상이여야 합니다."
  }
}
```

검증에 실패하였을 경우 자동으로 해당 input에 jQuery Focus event를 실행합니다. 이를 실행하고 싶지 않을 경우 옵션에 `focus: false` 를 추가하십시오.
```html
<script>
  $('testForm').validate({ focus: false }, function(data) { ... });
</script>
```

## options
이름 | 종류 | 설명 | 기본값 | 필수
--- | --- | ---
focus | Boolean | 검증에 실패한 input에 focus이벤트를 실행합니다. | true | no
messages | Object | callback data의 메시지 부분을 설정합니다. {{type}}과 {{name}}을 사용하여 사용자가 원하는 대로 변형할 수 있습니다. | "messages": { "require": "{{type}} - 필수입니다.", "minlength": "{{type}} - {{num}}글자 이상이여야 합니다." } | no
