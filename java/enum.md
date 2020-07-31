이 글은 [이넘활용기](https://woowabros.github.io/tools/2017/07/10/java-enum-uses.html) 를 보고 공부하고 작성한 글이다.

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

만약 배치를 돌면서 하나의 테이블에 있는 내용을 2개의 테이블에 등록하는 기능이 있다.
문제가 됐던 것은 origin 테이블의 값은 `Y`,`N`인데, 테이블1,테이블2는 `1`/`0`, true/false형태인것이다.
그러다 보니 이런것을 분류하는 메소드를 일일이 만들어 줘야 했다.


```java
public class Transfer{
    public String toTable1Value(String originValue){
        if("Y".equals(originValue)){
            return "1";
        }else{
            return "0";
        }
    }
       
    public boolean toTable2Value(String originValue){
        if("Y".equals(originValue)){
            
            return true;
        }else{
            return false;
        }
    }
}
```

기능상의 문제는 없지만, 큰 문제가 있따.

- Y, 1, true는 모두 같은 의미라는 것을 알수가 없다.
    - Y라는 값은 1이 될수도 있고 true가 될 수도 있다라는 것을 항상 위에서 선언된 클래스와 메소드를 통해서 찾아야만한다.
- 불필요한 코드량이 많다.
    - Y,N 외에 값이 추가로 필요한 경우 if문을 포함한 메소드 단위로 코드가 증가하게 된다.
    - 동일한 타입의 값이 추가 되는것에 비해 너무 많은 반복성 코드가 발생하게 된다.
    
    
그래서 Enum으로 대체가 가능하다.

```java
public enum TableStatus{
    Y("1", true),
    N("0" , false);

    private String table1Value;
    private boolean table2Value;

    TableStatus(String table1Value , boolean table2Value){
        this.table1Value = table1Value;
        this.table2Value = table2Value;
    }
    public String getTable1Value(){
        return table1Value;
    }
    public boolean isTable2Value(){return table2Value;}
}   
```

"Y", "1" , true가 한묶음으로 "N" , "0", false가 한 묶음이 되었다.
또한 추가 타입이 필요할 경우에는 이넘 상수와 get메소드만 추가하면 된다.
이를 사용하는 곳에서도 깔끔하게 표현이 된다.

```java
@Test
public void searchEnum() throws Exception{
    //given
    TableStatus origin = selectFromOriginTable();
    
    //then
    String table1Value = origin.getTable1Value();
    String table2Value = origin.getTable2Value();
    ...
}
```

- 상태와 행위를 한곳에서 관리

서로 다른 계산식을 적용해야 할 때가 있다.

```java
public class Calculator(){
    public static long calculate(String code, long originValue){
        if("A".equals(code)){
            return originValue;
        } else if("B".equals(code)){
            return originValue*10;
        }else{
            return 0;
        }
    }   

}
```

이런식으로 메소드를 분리하고 실제로 사용하면 코드는 코드대로 조회를 하고 계산은 별도의 클래스 메소드를 통해 진행해야 함을 알 수 있다.

```java
@Test
public void getCode() throws Exception{
    String code = selectCode();
    long originValue = 1000L;
    long result = Calculator.calculate(code, originValue);
}
```

이 상황에서는 문제가 많이 있다.
클래스와 메소드 사이에 code는 서로가 관계있음을 코드로 표현하기 힘들다는 것이다.

뽑아낸 Code에따라 지정된 메소드에서만 계산되길 원하는데 현재 상태로는 강제할 수단이 없다.
지금은 문자열 인자를 받고 long타입을 리턴하는 모든 메소드를 사용할수 있는 상태라서 실수할 확률이 높게 된다.


- 똑같은 기능을 하는 메소드를 중복으로 생성할 수가 있다.
    - 코드가 관리 안된 상태에서 신규화면이 추가 되어야 할 경우 이러한 메소드가 있다는 것을 몰라 다시 만들수 있다.
    - 만약 기존 화면의 계산 로직이 변경될 경우 신규 인력은 2개의 메소드의 로직을 다 변경해야하는지 해당 화면만 변경해야하는지 알 수 가 없다.
    - 관리 포인트가 증가할 확률이 매우 높다.
- 메소드를 누락 할 수 도있다.
    - 결국 문자열과 메소드로 분리되어 있기 때문에 이 계산 메소드를 써야함을 알 수가 없어 새로운 기능 생성시 계산 메소드 호출이 누락 될 수 도있다.
  
```java
public enum Calculator{
    A(value -> value),
    B(value -> value*10),
    C(value -> 0L);
    
    private Function<Long,Long> expression;
    
    Calculator(Function<Long , Long> expression){
        this.expression = expression;
    } 
    public long calculate(long value){

        return expression.apply(value);
    }
}
```

각각의 코드가 본인만의 계산식을 갖게 지정한다.
> Java8이 업데이트 되면 인자값에 함수를 사용할 수 있게 되었다.


Entity클래스에 선언할 경우에는 String이 아닌 enum을 선언하면 된다.

> JPA를 사용하는 경우는 위처럼 @Enumerated(Enumtype.STRING)를 선언하면 Enum필드가 테이블에 저장시 숫자형인 1,2,3 이 아닌 Enum의 name이 저장된다.
> 여기서는 A,B,C등이 저장된다고 생각하면 된다. ordinal을 사용하게 되면 Enum상수값들 사이에 하나가 추가 될 경우 (ex: ) 3이란 ordinal은 CALC_C가 아닌 CALC_B_2를 가리키게 된다.
> 전체 값이 변경되어버리는 위험한 일이기 일어날수 있기 때문에 Enum에서는 @Enumerated를 함께 사용을 해야한다.


실제 사용하는 곳에서 코드에게 직접 계산을 요청하면 된다.

```java
@Test
public void calCodeEnum() throws Exception{
    Calculator code = selectType();
    long originValue = 1000L;
    long result = code.calculate(originValue);
    

}
```

값(상태)과 메소드(행위)가 어떤 관계가 있는지에 대해 더이상 다른 곳을 찾을 필요가 없게 되었다.
코드내에 전부 표현이 되어있고, Enum상수에게 직접 물어보면 되기 때문이다.

- 데이터 그룹 관리

결제라는 데이터는 결제 종류와 결제 수간이라는 2가지 형태로 표현된다.
예를 들어 신용카드 결제는 신용카드 결제라는 결제 수단이며, 카드라는 결제 종류에 포함된다.
이 카드 결제는 페이코, 카카오페이등 여러 결제 수단이 포함되어 있다고 생각하시면 될 것 같다.

결제된 건이 어떤 결제수단으로 진행됐으며, 해당 결제 방식이 어느 결제 종류에 속하는지를 확인할 수 있어야만 하는 조건이 있다.
이를 해결하는 방법은 문자열과 메소드 if문으로 구현하는 방법이 있는데 구데기다.

```java
public class LegacyPayGroup {
    
    public static String getPayGroup(String payCode){
        if("ACCOUNT_TRANSFER".equals(payCode) ||...){
            return "CASH";
        }else if("ACCOUNT_TRANSFER".equals(payCode) ||...){
            return "CARD";
        }else if("ACCOUNT_TRANSFER".equals(payCode) ||...){
            return "ETC";
        }else{
            return "EMPTY";
        }
    }
}

```

- 둘의 관계를 파악하기가 어렵다
    - 메소드는 포함관계를 나타내는 것인가? 아니면 단순한 대체값을 리턴한 것인가?
    - 현재는 결제종류가 결제 수단을 포함하고 있는 관계인데 메소드만으로는 표현이 불가능하다.
- 입력값과 결과값이 예측 불가능 하다.
    - 결제 수단의 범위를 지정할수가 없어서 문자열이면 전부 파라미터로 전달될 수 있다.
    - 마찬가지로 결과를 받는 쪽에서도 문자열을 받기 때문에 결제 종류로 지정된 값만 받을 수 있도록 검증 코드가 필요하게 된다.
- 그룹별 기능을 추가하기가 어렵다.
    - 결제 종류에 따라 추가 기능이 필요한 경우 현재 상태라면 어떻게 구현을 해야할까? 똑같이 if문으로 메소드를 실행하는 구데기 방식을 써야한다.

```java
    public void pushByPayGroup(final String payGroupCode){
        if("CASH".equals(payGroupCode)){
            pushCashMethod();
        }else if("CARD".equals(payGroupCode)){
            pushCardMethod();
        }...
    }
    public void printByPayGroup(final String payGroupCode){
        if("CASH".equals(payGroupCode)){
            doCashMethod();
        }else if("CARD".equals(payGroupCode)){
            doCashMethod();
        }...
    }
```
각각의 메소드는 원하는 때에 사용하기 위해 독립적으로 구성할 수 밖에 없는데,
그럴때 마다 결제종류를 분기하는 코드가 필수적으로 필요하게 된다.
이것은 좋지 못한 방법이라고 생각된다.

결제종류, 결제수단등의 관계를 명확히 표현하며
각 타입은 본인이 수행해야할 기능과 책임만 가질 수 있게 하려면 기존 방식으로는 해결하기가 어렵다고 생각된다.
그렇기에 이넘으로 진행해야 한다.

```java

public enum PayGroup {

    CASH("현금" , Arrays.asList("ACCOUNT_TRANSFER" , "REMITTANCE" , "TOSS")),
    CARD("카드" , Arrays.asList("PAYCO" , "CARD")),
    ETC("기타" , Arrays.asList("POINT" , "COUPON")),
    EMPTY("없음" , Collections.EMPTY_LIST);
    private String title;
    private List<String> payList;

    PayGroup(String title, List<String> payList){
        this.title = title;
        this.payList = payList;
    }

    public static PayGroup findByPayCode(String code){
        return Arrays.stream(PayGroup.values())
                .filter(payGroup -> payGroup.hasPayCode(code))
                .findAny()
                .orElse(EMPTY);
    }

    private boolean hasPayCode(String code) {
        return payList.stream().anyMatch(pay -> pay.equals(code));
    }
    public String getTitle(){
        return title;
    }

}
```
관리 주체를 PayGroup에게 준 결과로 이젠 PayGroup에게 직접 물어보면 된다.
```java

    @Test
    public void talkPayGroup() throws Exception{
        
        String payCode = selectPayCode();
        PayGroup payGroup = PayGroup.findByPayCode(payCode);
        
        ...
    }
```


결국 이것의 결제 수단이 문자열인것이 문자이다.
DB테이블의 결제수단 컬럼에 잘못된 값을 등록하거나,
파라미터로 전달된 값이 잘못되었을 경우가 있을 때 전혀 관리가 되지 않는다.
그래서 이 결제수단역시 Enum으로 관리하면 된다.

```java

public enum PayType {

    ACCOUNT_TRANSFER("계좌이체"),
    REMITTANCE("무통장입금"),
    ON_SITE_PAYMENT("현장결제"),
    TOSS("토스"),
    PAYCO("페이코"),
    ...
    
    private String title;

    PayType(String title) {
        this.title = title;
    }
    public String getTitle(){
        return title;
    }
}

```

이렇게 Enum으로 결제종류를 만들고, PayGroup에서 이를 사용하도록 해야한다.

```java

public enum PayGroup {

    CASH("현금" , Arrays.asList(PayType.ACCOUNT_TRANSFER ...)),
    CARD("카드" , Arrays.asList(PayType.PAYCO ...)),
    ETC("기타" , Arrays.asList(PayType.POINT ...)),
    EMPTY("없음" , Collections.EMPTY_LIST);
    private String title;
    private List<String> payList;

    PayGroup(String title, List<String> payList){
        this.title = title;
        this.payList = payList;
    }

    public static PayGroup findByPayCode(String code){
        return Arrays.stream(PayGroup.values())
                .filter(payGroup -> payGroup.hasPayCode(code))
                .findAny()
                .orElse(EMPTY);
    }

    private boolean hasPayCode(String code) {
        return payList.stream().anyMatch(pay -> pay.equals(code));
    }
    public String getTitle(){
        return title;
    }

}
```

그리고 사용을 하려면 다음과 같이 하면된다.

```java
@Test
public void TalkPayGroupToPayType() throws Exception{
    PayType payType = selectPayType();
    PayGroupAdvanced payGroupAdvanced = PayGroupAdvanced.findByPayType(PayType);

}
```
- 관리 주체를 DB에서 객체로

정산 플랫폼은 수많은 카테고리가 존재하기 때문에 UI에서 select box로 표현되는 부분이 많다.

코드를 테이블에 저장하고 사용하는 부분이 많았다.
하지만 코드를 테이블을 별도로 두고 이를 조회해서 사용하면 단점이 보이게 된다.

- 코드명만 봐서는 무엇을 나타내는지 알수가 없다.
- 항상 코드 테이블 조회 쿼리가 실행되여야 한다.
- 카테고리 코드를 기반으로한 서비스 로직을 추가할때 그 위치가 애매해진다.

카테고리같이 장기간 추가될까말까한 영역을 테이블로 구분한다는 것은 장점보다 단점이 더 많다고 생각이 된다.

카테고리성 데이터를 Enum으러 전환하고 팩토리와 인터페이스 타입을 선언하여 일관된 방식으로 관리되고 사용될 수 있도록
진행하는것이 좋다.

Enum을 바로 JSON으로 리턴하게 되면 상수 name만 출력이 된다.

```java
public interface EnumMapperType{
    String getCode();
    String getTitle();
}
```

```java
public class EnumMapperValue{
    private String code;
    private String title;
    public EnumMapperValue(EnumMapperType enumMapperType){
        code = enumMapperType.getCode();
        title = enumMapperType.getTitle();
    }

    public String getCode(){
        return code;
    }
    public String getTitle(){
        return title;
    }
    
    @Override
    public String toString(){
            return ...;
    }

}
```

```java
public enum FeeType implements EnumMapperType{
    PERCENT("정율"),
    MONEY("정액");
    
    private String title;
    FeeType(String title){
        this.title =title;
    }
    @Override
    public String getCode(){
        return name();
    }

    @Override
    public String getTitle(){
        return title;
    }
}
```

Enum을 중심으로 해서 View Layer와 어플리케이션 디비가 하나로 관리되도록 변경은 되었지만
한가지 아쉬운점이 있다. 필요할 때 마다 Enum.values를 통해 Value인스턴스를 생성하는 과정이 반복되는 것이였다.
런타임에 Enum의 상수들이 변경될 일이 없기때문에, 관리 대상인 Enum들은 미리 Bean에 등록하여 사용하도록 변경해봤다.
Enum Value들을 담을 팩토리 클래스를 생성한다.

```java
public class EnumMapper {
    
    private Map<String, List<EnumMapperValue>> factory = new LinkedHashMap<>();
    
    public EnumMapper(){}
    
    public void put(String key, Class<? extends EnumMapperType> e){
        factory.put(key , toEnumValues(e));
        
    }

    private List<EnumMapperValue> toEnumValues(Class<? extends EnumMapperType> e) {
        return Arrays.stream(e.getEnnumConstants())
                .map(EnumMapperValue::new)
                .collect(Collectors.toList());
        
    }
    public List<EnumMapperValue> get(String key){
        return factory.get(key);
    }
    
    public Map<String , List<EnumMapperValue>>get (List<Strinbg> keys){
        if(keys == null || keys.size() == 0){
            return new LinkedHashMap<>();
        }
        return keys.stream()
                .collect(Collectors.toMap(Function.identity() , key->factory.get(key)));
    }
    
    public Map<String , List<EnumMapperValue>> getAll(){
        return factory;
    }

}
```
이를 빈으로 등록한다.

```java

    @Bean
    public EnumMapper enumMapper(){
        EnumMapper enumMapper = new EnumMapper();
        enumMapper.put("feeType" , FeeType.class);
        return enumMapper;
    }

    @GetMapping("/categories")
    public List<EnumMapperValue> getCategories(){
        return enumMapper.get("FeeType");
    }
```

View Layer에서 사용하길 원하는 Enum타입들은 EnumMapper라는 빈에 등록하기만 하면 된다.


- 마무리

Enum을 적극적으로 활용하게 되면 많은 장점을 얻을수 있다.

코드의 사용법, 이 필드에는 허용되는 값이 무엇인지, A-B의 값이 실제로 동일한지 아니면 다른지,
이 코드를 사용하기 위해 추가로 필요한 매소드 들은 무엇이고, 변경되면 어디까지 변경해야 하는지등등
불 확실한 것들이 많은 상황에서 확실한 부분과 불학실한 부분을 분리할 수 있다.

문맥을 담는것이 정말 큰 장점이다.
A라는 상황에서 "a" B라는 상황에서 "a"는 똑같은 문자열이지만 다른 의미이다.
문자열은 이러한 표현이 불가능하지만 Enum은 가능하다.
실행되는 코드를 이해하기 위해 추가로 무언가를 찾아보는 행위를 최소화 할수있다.

Enum을 활용하는 것에 있어서 큰 단점은 변경이 어렵다이다.
코드를 추가하거나 변경해야 하는 일이 빈번하다면 매번 코드를 변경하고 배포하는 것보다 관리자 페이지에서 직접 변경하는것이
좋을 수 도있다.

다음 상황을 체크해 보면 좋을 것 같다.
- 한번 생성된 코드는 얼마나 많은 테이블에서 사용되나?
    - 사용된 테이블이 많아 변경하게 되면 관련된 테이블 데이터를 모두 변경해야 하나?
    - 한번 생성된 코드 테이블의 코드들을 변경할 일이 자주있나?
- 추가되는 코드는 한달에 몇번 발생하나?
    - 1년?
    - 매일?
- 하루에 배포는 몇번을 하나?

만약 위와 같은 상황이라면 테이블로 관리함으로써 얻는 장점이 정적언어를 활용함으로써 얻는 장점을 버릴 정도로 더 큰지 고민해봐야 할 문제라고 생각된다.
