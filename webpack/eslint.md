## Lint

#### 탄생 배경

코드의 오류나 버그 스타윌을 점검하는것을 린트 혹은 린터라고 지칭한다.

#### 린트가 필요한 상황

즉시 실행 함수를 실행하려는 코드이다.
```javascript
console.log()
(function() {})()
```
하지만 이 코드를 브라우저에서 실행해보면 Typerror가 발생한다. 브라우저는 코드에 세미콜론을 자동으로 넣는 과정
을 수힝해는데 위와 같은 코드는 우리의 의도대로 해석하지 못한다.

린트는 코드의 가독성을 높이는 것 뿐만 아니라 동적언어의 특성인 런타임 버그를 예방하는 역할도 한다.

## ES Lint

#### 개념

ESLint는 ECMAScript 코드에서 문제점을 검사하고 일부는 더 나은 코드로 정정하는 것이 린트 도구중에 하나이다.

코드에서 검사하는 항목은 두가지이다.
- 포맷팅
- 코드 품질

포맷팅은 일관된 코드 스타일을 유지하도록 하고 개발자로 하여금 쉽게 읽히는 코드를 만들어준다.
코드 품질은 어플리케이션의 잠재적 오류나 버그를 예방하기 위함이다. 사용하지 않는 변수를 쓰지 않거나
글로벌 스코프 함부로 다루지 않기등의 오류를 줄여준다.

#### 설치및 사용

노드 패키지로 제공되는 ESLint도구를 다운로드 한다.

`npm i -D eslint`

환경 설정 파일을 프로젝트 최 상단에 생성한다

`.eslintrc.js`

`module.exports ={}`

빈 객체로 아무런 설정없이 모듈만 만들었다. ESLint로 코드를 검사하면 아무런 결과를 출력하지 않고 프로그램을 종료한다.

#### 규칙

ESLint는 검사 규칙을 미리 정해 놓았다. 문서의 Rules메뉴에서 규칙 목록을 확인 할 수 있다.

우리가 우려했던 문제와 관련된 규칙은 no-unexpected-multiline 이다.
설정 파일의 룰객체에 규칙을 추가한다.

```javascript
module.exports = {
    rules: {
        "no-unexpected-multiline": "error"
    }
}
```

규칙에 설정하는 값은 세가지이다. `off`나 `0`은 끔, `warn`이나 `1`은 경고 `error` 나`2`는 오류
설정한 규칙에 어긋나는 코드를 발견하면 오류를 출력하도록 한다.


#### 자동으로 수정할수  있는 규칙


## Prettier

프리티어는 코드를 더 예쁘게 만든다. ESLint의 역할 중 포매팅과 겹치는 부분이 있지만 프리티어는
좀더 일관적인 스타일로 코드를 다듬는다. 반면에 코드품질과 관련된 기능은 하지 않는것이 다른점이다.


#### 설치및 사용

프리티어 패키지를 다운로드하고

`npm i -D prettier`

코드를 작성한다.

```javascript
//app.js
console.log('hello world')
```

Prettier로 검사해보자

`npx prettier app.js --write`

--write옵션을 추가하면 파일을 재 작성한다. 그렇지 않을 경우 결과를 터미널에 출력한다.
변경된 모습을 보면

```javascript
//app.js
console.log("Hello world");
```

작은 따옴표를 큰 따옴표로 변경했다. 문장 뒤에 세미콜론도 추가되었다. 프리티어는 ESLint와 달리 규칙이 미리세팅되어있기
때문에 설정 없이도 바로 사용할 수 있다.

#### 포매팅
다음코드를 보자
```javascript
//app.js
console.log('----------------------------------')
```

ESLint는 max-len 규칙을 이용해 위 코드를 검사하고 결과만 알려 줄 뿐 수정하는 것은 개발자의 몫이다. 반면 프리티어는
어떻게 수정해야할지 알고 있기 때문에 아래처럼 코드를 다시 작성한다.

```javascript
//app.js
console.log("----------------");
```
아래 코드는 어떻게 변한될것인가?

```javascript
foo(reallyLongArg() , omgSoManyParameters(), ISouldRefactorThis());
```
프리티어는 코드를 문맥을 어느 정도 파악하고 상황에 따라 최적의 모습으로 스타일을 수정한다.

```javascript
foo(
    reallyLongArg(),
    omgSoManyParameters(),
    IShouldRefactorThis()
);
```

## 통합 방법

여전히 ESLint를 사용해야 하는 이유는 남아있다. 포맷팅은 프리티어에게 맡기더라도 코드 품질과 관련된 검사는
ESLint의 몫이기 때문이다. 따라서 이둘을 같이 사용하는것이 최선이다. 프리티어는 이러한 ESLint와 통합 방법을 제공한다.
`eslint-config-prettier`는 프리티어와 충돌하는 ESLint 규칙을 끄는 역할을 한다.
둘다 사용하는 경우는 규칙이 충돌하기 때문이다.

패키지를 설치한뒤,
`npm i -D eslint-config-prettier`

설정 파일의 extends배열에 추가한다.

```javascript
//.eslintrc.js
{
    extends: [
        "eslint:recommneded",
        "eslint-config-prettier"
    ]
}
```

예를들면 ESlint는 중복 세미콜론 사용을 검사한다. 이것을 프리티어도 마찬가이다 . 따라서 어느 한쪽에서는
규칙을 꺼내야하는데 eslint-config-prettier를 extends하면 중복되는 ESLint규칙을 비활성화 한다.
```javascript
var foo = '' // 사용하지 않은 변수. ESLint가 검사
console.log();;;;;;;; // 중복 세미콜론 사용. 프리티어가 자동 수정
```
ESLint는 중복된 포매팅 규칙을 프리티어에게 맞기고 나머지 코드 품질에 관한 검사만 한다. 따라서 아래처럼
두개를 동시에 실행해서 코드를 검사한다.

프리티어에 의해서 코드가 아래와 같이 포매팅 된다.
