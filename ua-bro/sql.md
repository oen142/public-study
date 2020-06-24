https://www.youtube.com/watch?v=mezbxKGu68Y


JDBC , SQL MAPPER, ORM


Persistence(영속성)와 관련이 있다.

데이터를 생성한 프로그램의 실행이 종료되더라도 사라지지 않는 데이터의 특성

- 영구히 저장되는 그 어떤것


JDBC
- jdbc api

SQLMAPPER
- MyBatis
- Spring Jdbc

ORM
- JPA
- Hibernate
- Spring jdbc/jpa

1997년
JDBC가 등장했다. 1990년대 중반
- 인터넷 보급 , DB산업 성장
- 온라인 비지니스의 투자 증가. DB Connector에 대한 니즈
- Java 진영의 Database 연결표준 인터페이스



DriverManager를 이용해서 Connection인스턴스를 얻는다
Connection을 통해서 Statement를 얻는다
Statement를 통해 ResultSet을 얻는다

DriverManager->Connection->Statement->ResultSet

SQLMAPPER
Application -> JDBC Interface -> JDBC Implementations -> Persistence Layer

MyBatis 주요관심사 Sql분리

Query를 Java에서 XML로
- 복잡한 JDBC코드 X
- ResultSet과 같이 결과값을 맵핑하는 객체 X
- 간단한 설정!
- 관심사 분리!

ORM
Object-Relational-Mapping
SQL에 의존적인 개발

"물리적으로 SQL과 JDBC API를 데이터 접근 계층에 숨기는데 성공했을지는 몰라도 논리적으로는 엔티티와 아주 강한
의존관계를 가지고 있다."

패러다임 불일치가 생긴다.

애플리케이션 -> JPA표준 인터페이스
구현체가 hibernate , eclipseLink , DataNucleus



