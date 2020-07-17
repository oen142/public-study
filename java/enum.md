## ENUM

- 열거형 JDK 1.5이상부터 사용가능하다.

- 클래스처럼 보이게 하는 상수이다.
- 서로 관련이 있는 상수를 모아서 심볼릭한 명칭의 집합으로 정의한 것이다.
- Enum 클래스형을 기반으로 한 클래스형으로 선언한 것이다.
- 새로운 열거형을 선언하면 내부적으로 Enum클래스형 기반의 새로운 클래스형이 만들어진다.


## 열거형 선언하기

- 하나의 java파일로 만들어서 선언하기
```java
public enum Type{
    WALKING , RUNNING, TRACKING, HIKING
}
```
```java
public class Shoes{
    public String name;
    public int size;
    public Type type;
}
```
- 클래스 안에서 선언하기
```java
public class Shoes{
    public String name;
    public int size;
    public enum Type{
       WALKING , RUNNING, TRACKING, HIKING
    }
}
```
- 클래스 밖에서 선언하기
```java
public class Shoes{
    public String name;
    public int size;
    public enum Type{
       WALKING , RUNNING, TRACKING, HIKING
    }
}
```
> 열거된 순서에 따라 0 부터 순서값을 가짐. 차례대로 증가한다.
> enum 열거형으로 지정된 상수는 대문자를 사용한다.
> 마지막 끝에는 세미콜론을 붙이지 않는다.

- 사용하기
```java
enum Type{
       WALKING , RUNNING, TRACKING, HIKING
}
public class Shoes{
    public String name;
    public int size;
    public Type type;
    
    public static void main(String[] args){
    
    Shoes sh = new Shoes();
    sh.name = "나이키";
    sh.size = 230;
    sh.type = Type.RUNNING;
    }
}
```
- 메소드
    - `values()` : 열거된 모든 원소를 배열에 담아 순서대로 반환
    - `ordinal()` :  원소에 열거된 순서를 정수 값으로 반환
    - `valueOf()` : 매개변수로 주어진 String과 열거형에서 일치하는 이름을 갖는 원소를 반환한다. 
        - 주어진 String과 일치하는 원소가 없는 경우에는 `IllegalArgumentException` 예외가 발생한다.

- 열거형 상수를 다른 값과 연결하기

```java
enum Type{
    CAT("고양이"), DOG("강아지"),

    final private String name;

    private Type(String name){
        this.name = name;
    }
    private String getName(){
        return name;
    }
    
}
```
- 클래스의 static final을 이용해서 열거형 선언하기

```java
class Type {
    static final String WALKING = "워킹화";
    static final String RUNNING = "러닝화";
    static final String TRACKING = "트래킹화";
    static final String HIKING = "등산화";
}
 
public class Shoes {
    public static void main(String[] args) {
        String w = Type.WALKING;
        System.out.println(w);
    }
}

```

개발을 진행할때 Enum을 통해 얻는 기본적인 장점이 있다.

- 문자열과 비교해, IDE의 지원을 받을수 있다.
    - 자동완성, 오타검증, 텍스트 리팩토리등
- 허용 가능한 값들을 제한할 수 있다.
- 리팩토링시 변경 범위가 최소화 된다.
     - 내용의 추가가 필요하더라도, Enum코드 외에 수정할 필요가 없다.
     
이 장점들은 모든 언어들의 Enum에서 얻을 수 있는 공통의 장점이다.
하지만 Java의 Enum은 이보다 더 많은 장점을 갖고있다.
C/C++의 경우 Enum이 결국 int이지만, Java의 Enum은 완전한 기능을 갖춘 클래스이기 때문이다.


- 데이터들의 연관관계 표현

