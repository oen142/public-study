## Optional

- 자바 프로그래밍에서 NPE를 종종 보게되는 이유
    - null을 리턴한다. null체크를 하지 않았다.
- 메소드에서 작업중 특별한 상황에서 값을 제대로 리턴할 수 없는 경우 선택할 수 있는 방법
    - 예외를 던진다.(스택트레이스를 찍어버려서 비용이 비싸다.)
    - null을 리턴한다. (비용문제는 없지만 그 코드를 사용하는 클라이언트 코드가 주의해야한다.)
    - Optional을 리턴한다(클라이언트 코드에게 명시적으로 빈 값일 수도 있다는걸 알려주고, 빈 값인 경우에 대한 처리를 강제한다.)
- Optional
    - 오직 값 한개가 들어있을수도 있고 없을수도 있는 컨테이더이다.
    
- *주의할것*
    - 리턴값으로만 쓰기를 권장한다.(메소드 매개변수 타입, 맵의 키 타입, 인스턴스 필드 타입으로 쓰는거는 금물한다.)
    - Optional를 리턴하는 메소드에서 null을 리턴하지 않는다.
    - 프리미티브 타입용 Optional을 따로 쓴다. OptinalInt, OptionalLong,...
    - Collection, Map, StreamArray, Optional은 Optional로 감싸지 않는다.
    
## Optional API

- Optional 만들기
    - Optional.of()
    - Optional.ofNullable()
    - Optional.empty()
- Optional에 값이 있는지 없는지 확인하기
    - isPresent()
    - isEmpty() (Java 11부터 제공)
- Optional에 있는 값 가져오기
    - get()
    - 만약에 값이 비어있는 Optional에서 무언가 꺼낸다면?
- Optional에 값이 있는 경우에 그 값을 가지고 ~~를 하라
    - ifPresent(Consumer)
    - ex) Spring으로 시작하는 수업이 있으면 id를 출력하라.
- Optional에 값이 있으면 가져오고 없는 경우에 ~~을 리턴하라
    - orElse(T)
    - ex) JPA로 시작하는 수업이 없다면 비어있는 수업을 리턴하라.
- Optional에 값이 있으면 가져오고 없는 경우에 ~~를 하라
    - orElseGet(Supplier)
    - ex) JPA로 시작하는 수업이 없다면 새로 만들어서 리턴하라
- Optional에 값이 있으면 가져오고 없은 경우 에러를 던져라
    - OrElseThrow()
- Optional에 값 걸러내기
    - Optional filter(Predicate)
- Optional에 들어있는 값 변환하기
    - Optional map(Function)
    - Optional flatMap(Function) : Optional 안에 들어있는 인스턴스가 Optional인 경우에 사용하면 편리하다.