### CSS

## 선택자의 역할

- 선택자는 HTML에 스타일(CSS)을 적용하기 위해 HTML의 특정한 요소를 선택하는 사인이다.

```css
h1{
    color:red;
}
p{
    color:blue;
}
```

## 속성(Properties) 과 값(Value)
- 속성과 값은 글자색은 무엇 너비는 얼마 여백은 얼마와 같은 스타일을 지정할때 사용한다.

## CSS 선언 방식

- 태그에 직접 작성하기

```html
<div style="color: red;">태그</div>
```
- HTML에 포함하기

```html
<head>
  <style>
    div {
      color: red;
    }
  </style>  
</head>
<body>
  <div>태</div> 
</body>
```

- HTML 외부에서 불러오기
```css
div {
  color: red;
}
```
```html
<head>
  <link rel="stylesheet" href="/css/main.css">
</head>
<body>
  <div>태그</div>
</body>
```

## 선택자
선택자는 html특정한 요소를 선택하는 사인이다.

## 태그로 찾기
```css
h1{
    color: red;
}
p {
    color: blue;
}
```
## 클래스로 찾기
```css
.title{
    color: red;
}
.main-text{
    color: blue;
}
```
```html
<h1 class="title">제목</h1>
<p class=".main-text">본문</p>
```

### 속성

## 크기

`width 가로너비`
- 요소의 가로 너비를 지정한다.
- 단위는 px(pixels)을 사용한다.
```css
div{
    width: 300px;
}
```
`height 세로너비`
- 요소의 세로 너비를 지정한다.
```css
div{
    height: 150px;
}
```

`font-size 글자 크기`
요소 내용의 글자 크기를 지정합니다.
```css
div{
    font-size: 15px;
}
```

## 여백

`margin 요소의 바깥 여백`
- 요소의 바깥 여백을 지정한다.
- 바깥 여백은 요소와 요소사이의 여백(거리,공간)을 생성할 때 사용한다.
```css
div{
    margin: 20px;
}
.div{
    margin-top: 20px;
    margin-right: 20px;
    margin-left: 20px;
    margin-bottom: 20px;
}
```


`padding 요소의 내부 여백`
- 요소의 내부 여백을 지정한다.
- 내부 여백은 자식 요소를 감싸는 여백을 의미한다.
```css
div{
    padding: 20px;
}
.div{
    padding-top: 20px;
    padding-right: 20px;
    padding-left: 20px;
    padding-bottom: 20px;
}
```

## 색상


`color 글자색상`
- 요소 내용의 글자 색상을 지정한다.
```css
div{
    color: red;
}
```



`background 요소 색상`
- 요소의 배경 색상을 지정합니다.
```css
div{
    background-color: red;
}
```
