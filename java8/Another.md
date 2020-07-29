## 어노테이션의 변화

- 어노테이션 관련 두가지 큰 변화
    - 타입 선언부에도 사용할 수 있게 됨.
    - 중복해서 사용할 수 있게 됨.

- 타입 선언 부
    - 제너릭 타입
    - 변수 타입
    - 매개변수 타입
    - 예외 타입
    - ....
    
- 타입에 사용할 수 있으려면
    - TYPE_PARAMETER : 타입 변수에만 사용할 수 있다.
    - TYPE_USE : 타입 변수를 포함해서 모든 타입 선언부에 사용할 수 있다.

- 중복 사용할 수 있는 애노테이션을 만들기
    - 중복 사용할 애노테이션 만들기
    - 중복 애노테이션 컨테이너 만들기
        - 컨테이너 애노테이션은 중복 애노테이션과 @Retention 및 @Target이 같거나 더 넓어야 한다.

- Chicken.java (중복 사용할 애노테이션)

```java
@Retention(RetentionPolicy.RUNTIME)
@Target(ElemntType.TYPE_USE)
@Rpeatable(ChicknContainer.class)
public @intrface Chickn{
    String value();
}
```

- ChickenContainer.java (중복 애노테이션의 컨테이너 애노테이션)
```java
@Retention(Retention.RUNTIME)
@Target(ElementType.TYPE_USE)
public @interface ChickenContainer{
    Chicken[] value();
}
```

컨테이너 애노테이션으로 중복 애노테이션 참조하기
```java
@Chicken("양념")
@Chicken("마늘 간장")
public class App{
    public static void main(String[] args){
      ChickenContainer chickenContainer = App.class.getAnnotation(ChickenContainer.class)
        Arrays.stream(chickenContainer.value()).forEach(c->{
            System.out.println(c.value());
        });
    }
}
```

## 배열 정렬

sort()와 parallelSort() 비교
```java
    int size = 1500;
    int[] numbers = new int[size];
    Random r = new Random();
    
```