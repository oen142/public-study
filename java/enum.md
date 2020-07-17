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

