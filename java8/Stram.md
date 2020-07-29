## Stream

- Stream
    - 데이터를 담고 있는 저장소이지만 컬렉션이 아니다.
    - Functional in nature, 스트림이 처리하는 데이터 소스를 변경하지 않는다.
    - 스트림으로 처리하는 데이터는 오직 한번만 처리한다.
    - 무제한일 수도 있다.(Short Circuit 메소드를 사용해서 제한할 수 있다.)
    - 중개 오퍼레이션은 근본적으로 lazy 하다
    - 손쉽게 병렬 처리 할 수 있다.
- 스트림 파이프라인
    - 0 또는 다수의 중개 오퍼레이션과 한개의 종료 오퍼레이션으로 구성한다.
    - 스트림의 데이터 소스는 오직 터미널 오퍼레이션을 실행할 때에만 처리한다.
- 중개 오퍼레이션
    - Stream을 리턴한다
    - Stateless Stateful 오퍼레이션으로 더 상세하게 구분할 수도 있다.
> 대부분은 Stateless지만 distinct나 sorted처럼)
    이전 소스 데이터를 참조해야하는 오퍼레이션은 Stateful오퍼레이션이다. 
    - filter, map, limit, skip, sorted, ...
- 종료 오퍼레이션
    - Stream을 리턴하지 않는다.
    - collect, allMatch, count, forEach, min, max...

## Stream API

- 걸러내기
    - `Filter(Predicate)`
        - 이름이 3글자 이상인 데이터만 새로운 스트림으로
- 변경하기
    - `Map(Function)` , `FlatMap(Function)`
        - 각각의 Post 인스턴스에서 String title만 새로운 스트림으로
        - List<Stream<String>>을 String 스트림으로
- 생성하기
    - `generate(Supplier)` , `Iterate(T seed, UnaryOperator)`
        - 10부터 1씩 증가하는 무제한 숫자 스트림
        - 랜덤 int 무제한 스트림
- 제한하기
    - `limit(long)` , `skip(long)`
        - 최대 5개의 요소가 담긴 스트림을 리턴한다.
        - 앞에서 3개를 뺀 나머지 스트림을 리턴한다.

- 스트림에 있는 데이터가 특정 조건을 만족하는지 확인
    - `anyMatch()` , `allMatch()`, `nonMatch()`
        - k로 시작하는 분자열이 있는지 확인한다.(true또는 false를 리턴한다.)
        - 스트림에 있는 모든 값이 10보다 작은지 확인한다.
- 개수세기
    - `count()`
        - 10보다 큰 수의 개수를 센다.
- 스트림을 데이터 하나로 뭉치기
    - `reduce(identity, BiFunction)` , `collect()` , `sum()`, `max()`
        - 모든 숫자 합 구하기
        - 모든 데이터를 하나의 List 또는 Set에 옮겨담