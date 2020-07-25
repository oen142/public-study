## Webpack

#### 배경

문법 수준에서 모듈을 지원하기 시작한것은 ES2015부터다.
import/export 구문이 없었던 모듈 이전 상황을 살펴보는 것이 웹팩 등장 배경을 이해하는데 좋다.

`math.js`
```javascript
function sum(a ,b) { return a +b;}
```
`app.js`
```javascript
sum(1,2) ; //3
```

위 코드는 모두 하나의 HTML파일 안에서 로딩되야만 실행이 된다. math.js가 로딩되면 app.js는 이름 공간안에서
`sum`을 찾은뒤 함수를 실행된다. 문제는 `sum`함수가 전역공간에 노출된다는 것이다. 다른 파일에서도
`sum`이란 이름을 사용한다면 충돌한다.

#### IIFE방식의 모듈

이러한 문제를 예방하기 위해서 스코프을 사용한다. 함수 스코프를 만들어 외부에서 안으로 접근하지 못하게 공간을 격리하는것이다.
스코프 안에서는 자신만의 이름 공간이 존재하므로 스코프 외부와 이름 충돌을 막을수가 있다.

`math.js`

```javascript
var math = math || {}; // math 네임 스페이스
(function (){
    function sum(a,b) {return a+b;}
    math.sum = sum; // 네임스페이스에 추가한다.
})();
```

같은 코드를 즉시실행함수로 감쌌기 때문에 다른 파일에서 이안으로 접근 할 수가 없다. 심지어 같은 파일일지라도 말이다.
js함수 스코프의 특징이다. 'sum'이란 이름은 즉시실행함수 안에 감추어졌기 때문에 외부에서는 같은 이름을 사용해도 괜찮다.
전역에 등록한 'math'라는 이름 공간만 잘 활용하면 된다.

#### 다양한 모듈 스펙

자바스크립트 모듈을 구현하는 명세가 `AMD` , `CommonJS`이다

`CommonJs`는 자바스크립트를 사용하는 모든 환경에서 모듈을 사용하는것이 목표이다. exports 키워드로 모듈을 만들고
require()함수로 불러들이는 방식이다. 대표적으로 노드에서 사용한다.

`math.js`
```javascript
exports function sum(a,b) {return a+b};
```

`app.js`
```javascript
const math = require('./math.js');
math.sum(1,2); //3
```

AMD(Asynchronous Module Definition)은 비동기로 로딩되는 환경에서 모듈을 사용하는것이 목표이다. 브라우저 환경에서 많이 쓰인다.
UMD(Universal Module Definition)은 AMD기반으로 commonJS방식까지 지원하는 통합 형태이다.

각각의 커뮤니티에서 각자의 스펙을 제안하다가 ES2015에서 표준 모듈 시스템을 내놓았다.
지금은 바벨과 웹팩을 이용해 모듈 시스템을 사용하는것이 일반적이다.