### HTML 태그

- 문서의 시작부분과 끝부분을 지칭

- lang 언어 설정 korea는 ko english는 en  
    - ISO 639-1 코드 목록
    
### !DOCKTYPE

- html5 사용하기 위해서 사용
    


## DOCTYPE(DTD, 버전지정)
DOCTYPE(DTD , Document Type Definition)은 마크업 언어에서 문서 형식을 정의한다.
이는 웹 브라우저에 우리가 제공할 HTML문서를 어떤 HTML버전의 해석 방식으로 구조화 하면 되는지를 알려준다.
**현재의 표준 모드는 HTML5이다.**

### HEAD
 
 - 문서의 정보 입력
     - html 문서의 제목
         - title tag
     - 기타 정보
         - meta tag
             - charset 문자가 인코딩 되는 방식
             
     - 스타일 직접 입력
     - 스타일 외부에서 가져와서 연결
     

## META(웹 페이지 정보)
- HTML문서에 관한 정보(표시 방식 , 제작자(소유자) , 내용, 키워드 등)를 검색엔진이나 브라우저에 제공한다.
- 빈 태그이다.

```html

<head>
    <meta charset="UTF-8">
    <meta name="author" content="작가">
    <meta name="description" content="설명">
</head>

```  

메타에서 사용할수 있는 속성과 값이 정해져 있다.
어떤 속성을 사용할 수 있고, 사용할수 없는지 잘 구분해야한다.
잘 사용하지 않는 속성도 있기 때문에 당장 모든 속성과 값을 암기할 필요는 없다.


|속성|내용|값|
|---|--------------|-----|
|charset|문자 인코딩 방식|`UTF-8` , `EUC-KR`등|
|name|검색엔진에게 제공하기 위한 정보의 종류 |`author`, `description` ,`keywords`,`viewport`등 |
|contents|`name` 이나 `http-equiv`속성의 값을 제공||

## LINK(CSS불러오기)
- 외부 문서를 연결할 때 사용한다.
특히 HTML 외부에서 작성된 CSS문서를 불러와 연결할때 사용한다.
- 빈태그이다.

```html
<head>
  <link rel="stylesheet" href="./css/main.css">
  <link rel="icon" href="./favicon.png">
</head>
```
|속성|내용|값|
|---|--------------|-----|
|`rel`|현재 문서와 외부 문서와의 관계를 지정 `필수`|`stylesheet`, `icon`등..|
|`href`|외부 문서의 위치를 지정|경로 |

## STYLE(CSS 작성하기)
- CSS를 외부 문서에서 작성하여 연결하는것이 아니라 HTML문서 내부에 작성할때 쓴다.
```html
<style>
    img {
        width: 100px;
        height: 100px;
    }   
</style>
```

## SCRIPT(JS 부르기 , 작성하기)
- HTML 문서에서 CSS는 작성된 CSS를 `<link>`로 불러오거나 `<style></style>`안에 작성할수 있다.
- JS는 `<script></script>`로 이 두가지 방식을 모두 작성이 가능하다.

```html
<script src="./js/main.js"></script>

<script>
  function windowOnClickHandler(event) {
    console.log(event);
  }
  window.addEventListener('click', windowOnClickHandler);
</script>
```

## BODY

- 문서의 구조 입력
- 구조는 사용자가 화면을 통해서 볼 수 있는 내용의 형태나 레이아웃 등을 의미한다.
로고, 헤더 , 푸터, 네비게이션 .. 등등 보이는 모든것들이 구조에 해당한다.
- 구조는 BODY 범위 안에서만 생성한다.

## DIV
- `<div></div>`의 `div`의미는 `division`의 약자로서 분할을 뜻한다. HTML에서는 문서의 부분이나
섹션을 정의한다.
- 따로 명확한 의미를 가지지 않기 때문에 단순히 특정 범위를 묶는 용도로 사용을 한다.

## IMG 이미지태그
- `<img>` 는 HTML에 이미지를 넣을때 사용한다.
        
- 웹 페이지에 이미지를 삽입하는 방식은 크게 2가지로 `HTML에서 삽입`과 `CSS에서 삽입`이 있습니다.

```html
<body>
    <img src="./test.png" alt="테스트">
</body>
```
|속성|내용|값|
|---|--------------|-----|
|src|이미지의 URL|`URL`|
|alt|이미지의 대체 텍스트를 지정||
- 만약 이미지태그의 alt 속성이 누락되었으면 웹 표준에 어긋난다!
