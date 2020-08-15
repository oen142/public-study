## JPA 프로젝트 생성

- H2 데이터 베이스
    - 최고의 실습용 DB
    - 가볍다
    - 웹용 쿼리툴 제공
    - MySQL, Oracle 데이터베이스 시뮬레이션 가능
    - 시퀀스 Auto Increment 기능 지원
    
- 메이븐
    - 자바 라이브러리, 빌드 관리
    - 라이브러리 자동 다운로드 및 의존성 관리
    - 최근에는 그레들이 점점 유명
    
    
- 라이브러리 추가

- JPA 설정하기 - persistence.xml
    - JPA 설정파일
    - /META-INF/persistence.xml 위치
    - persistence-unit name으로 이름지정
    - javax.persistence로 시작: JPA 표준 속성
    - hibernate로 시작: 하이버네이트 전용 속성
    
- persistence.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<persistence version="2.2"
xmlns="http://xmlns.jcp.org/xml/ns/persistence" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/persistence http://xmlns.jcp.org/xml/ns/persistence/persistence_2_2.xsd">
    <persistence-unit name="hello">
        <properties>
        <!-- 필수 속성 -->
            <property name="javax.persistence.jdbc.driver" value="org.h2.Driver"/>
            <property name="javax.persistence.jdbc.user" value="sa"/>
            <property name="javax.persistence.jdbc.password" value=""/>
            <property name="javax.persistence.jdbc.url" value="jdbc:h2:tcp://localhost/~/test"/>
            <property name="hibernate.dialect" value="org.hibernate.dialect.H2Dialect"/>
            <!-- 옵션 -->
            <property name="hibernate.show_sql" value="true"/>
            <property name="hibernate.format_sql" value="true"/>
            <property name="hibernate.use_sql_comments" value="true"/>
        <!--<property name="hibernate.hbm2ddl.auto" value="create" />-->
        </properties>
    </persistence-unit>
</persistence>
```
- 데이터베이스 방언
    - JPA는 특정 데이터베이스에 종속하지 않는다.
    - 각각의 데이터 베이스가 제공하는 SQL 문법과 함수는 조금씩 다르다
        - 가변 문자 : Mysql = varchar , oracle = varchar2
        - 문자열을 자르는 함수: sql표준은 substring() , oracle은 substr()
        - 페이징 : mysql = limit , orcle = rownum
    - 방언 : SQL표준을 지키지 않는 특정 데이터베이스만의 고유한 기능
    - hibernate.dialect 속성에 지정
        - H2 : org.hibernate.dialect.H2Dialect
        - Oracle 10g : org.hibernate.dialect.Oracle1gDialect
        - Mysql : org.hibernate.dialect.MySQL5InnoDBDialect
    - 하이버네이트는 40가지 이상의 데이터베이스 방언 지원
        

## JPA 애플리케이션 개발

- JPA 구동 방식
1. 설정 정보 조회 META-INF/persistence.xml -> Persistence
1. 생성 Persistence -> EntityManagerFactory 
1. 생성 EntityManagerFactory -> EntityManager


- 객체와 테이블을 생성하고 매핑하기
    - @Entity : JPA가 관리할 객체
    - @Id : 데이터베이스 PK와 매핑
    
```java
 @Entity
 public class Member {
    @Id
    private Long id;
    private String name;
    
    //Getter, Setter ...
}
```

- 주의
    - 엔티티 매니저 팩토리는 하나만 생성해서 애플리케이션 전체에서 공유
    - 엔티티 매니저는 쓰레드간에 공유하지 않는다( 사용하고 버려야 한다. )
    - JPA의 모든 데이터 변경은 트랜잭션 안에서 실행
    
    
- JPQL 소개
    - 가장 단순한 조회방법
        - EntityManager.find()
        - 객체 그래프 탐색 (a.getB().getC())

- JPQL
    - JPA를 사용하면 엔티티 객체를 중심으로 개발
    - 문제는 검색 쿼리
    - 검색을 할 떄도 테이블이 아닌 엔티티 객체를 대상으로 검색
    - 모든 DB 데이터를 객체로 변환해서 검색하는 것은 불가능
    - 애플리케이션이 필요한 데이터만 DB에서 불러올려면 결국 검색 조건이 포함된 SQL이 필요
    - JPA는 SQL을 추상화한 JPQL이라는 객체지향쿼리 언어를 제공
    - SQL문법과 유사, select, from, where, group by, having, join 지원
    - JPQL은 엔티티 객체를 대상으로 쿼리
    - SQL은 데이터 베이스 테이블을 대상으로 쿼리
    - 테이블이 아닌 객체를 대상으로 검색하는 객체 지향 쿼리
    - SQL을 추상화해서 특정 데이터베이스 SQL에 의존하지 않는다.
    - JPQL을 한마디로 정의하면 객체지향 SQL
    