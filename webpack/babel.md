## BABEL

### 바벨의 탄생배경

- 크로스 브라우징 : 
프론트 엔드 코드는 브라우저마다 사용하는 언어가 달라서 일관적이지 못할때가 많다. 
크로스 브라우징 혼란을 해결핼 줄수 있는것이 바벨이다. ECMAScript2015+로 작성한 코드를 모든
브라우져에서 동작하도록 호환성을 지켜준다.
- 트랜스 파일과 빌드 : 
변환하는 것을 트랜스파일 한다라고 표현한다. 변환 전후의 추상화 수준이 다른 빌드와는 달리 트랜스파일은 추상화 수준을 유지한
상태로 코드를 변환한다. 타입스크립트 -> 자바스크립트,jsx -> 자바스크립트 처럼 트랜스파일 후에도 여전히 코드를 읽을 수 있다.

### 바벨의 기본 동작

바벨은 ECMAScript2015이상의 코드를 적당한 하위 버전으로 바꾸는것이 주된 역할이다. 이렇게 바뀐 코드는 인터넷 익스플로러등
최신 코드를 이해하지 못하는 환경에서 잘 동작한다.

