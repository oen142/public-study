제네릭이 뭔지 알아보자!

정의 다양한 타입의 객체들을 다루는 메서드나 클래스에 컴파일시 타입체크를 해주는 기능

    List<String> stringList = new ArrayList<>();

    stringList.add(1); // 에러
    stringList.add(1.3); // 에러
    stringList.add("ok"); // ok

의도하지 않은 타입이 들어오는것을 막는 기능이다.

효과 : 객체의 타입 안정성을 높이고, 형변환의 번거로움을 줄인다.

제네릭의 생김새
    
    public class Box <T> {}

    T : 타입 매게변수
    Box<T> :  제네릭 클래스


제네릭을 쓰면 뭐가 좋을까?

1. 강력한 타입 체크를 해준다.
2. 형변환을 하지 않아도 된다.


제네릭 사용법

참조변수와 생성자에 대입된 타입이 일치해야한다.

    Box<Apple> appleBox = new Box<Apple>();
    Box<Grape> appleBox = new Box<Grape>();
    Box<Fruit> appleBox = new Box<Apple>(); // Apple이 Fruit를 상속해도 불가능
  
제네릭 클래스가 상속 관계인것은 괜찮다.

    Box<Apple> appleBox = new FruitBox<Apple>();
    List<Fruit> fruits = new ArrayList<Fruit>();
    Box<Fruit> grapeBox = new FruitBox<Apple>(); // 에러 단, 여전히 대입되어야 하는 타입은 같아야 한다.
    
제한된 제너릭

    Box<Toy> fruitBox = new FruitBox<Toy>();


    public class Box<T extends Fruit>{
        List<T> items = new ArrayList<>(); // Fruit를 상속하는 타입만 들어올수 있다.
        
        void add(T item) {
            items.add(item);
        }
    }
    
    
다양한 타입의 매개변수


T - Type
E - Element
K - Key
V - Value
N - Number
R - Return타입
S,U,V .. - 2nd , 3rd, 4th types..

    타입 매개변수를 이렇게 표기하는것이 관례이다. 하지만, 원한다면 자신이 원하는 대로 표기하여 사용해도 문제가 없다.
    
제너릭 메서드

public <T> T foo(List<T> list){}

    <T> : 타입 매개변수
    T : 리턴 타입
    foo : 메소드명
    List<T> list : 매개변수
    
    
    만약 전달되는 타입 매개변수의 범위를 제한하고 싶다면?
    
    public <T> T foo(List<T extends Fruit> list){} //X
    
    public <T extends Fruit> T foo(List<T> list){}  //O

제네릭 메서드의 타입과 제네릭 클래스의 타입은 서로 다른것이다.

    public class Box<T>{
        public <T> void printParamClass(T t){
            System.out.println(t.getClass());
        }
    }
    
    Box<Fruit> box = new Box<>();
    
    box.printParamClass("String");
    box.printParamClass(1);
    box.printParamClass(3.14);
    
    class java.lang.String
    class java.lang.Integer
    class java.lang.Double
    
    제네릭 클래스가 아닌 일반 클래스에서도 사용이 가능하다.
    
와일드 카드

- 와일드 카드는 '?' 기호로 표현하고 와일드 카드는 어떠한 타입도 될 수 있다.

아무 타입의 리스트를 출력하는 메서드

    public static void printList(List<Object> list){
        for( Object elem  : list){
            soutv
        }
    } 
    
    List<Fruit> fruits = new ArrayList<>();
    MyClass.printList(fruits); 에러
    
    와일드 카드를 사용하여 모든 타입이 들어올수 있도록 수정
    
      public static void printList(List<? extends Object> list){
            for( Object elem  : list){
                soutv
            }
        } 
        
타입 이레이저(Type Erasure)

제네릭은 타입의 안정성을 보장하며 실행시간에 오버헤드가 발생하지 않도록 하기 위해 추가되었다.
컴파일러는 컴파일 시점에 제네릭에 대하여 "type erasure(타입 이레이저)" 라고 부르는 프로세스를 적용한다.
타입 이레이저는 모든 타입 파라미터들을 제거하고 나서 그 자리를 제한하고 있는 타입으로 변경하거나 타입 파라미터의 제한 타입이
지정되지 않았을 경우에는 Object로 대체한다. 따라서 컴파일 후에 바이트 코드는 새로운 타입이 생기지 않도록 보장하는 
일반 클래스들과 인터페이스, 메소드들만을 포함한다. Objtect타입도 컴파일 시점에 적절한 캐스팅이 적용된다.


    public <T> List<T> genericMethode( List<T> list){
        return list.stream().collect(Collectors.toList());
    }
    
타입 이레이저가 적용되면서 특정 타입으로 제한되지 않은 T는 다음과 같이 Object로 대체된다.
    
    public List<Object> withErasure(List<Object> list){
        return list.stream().collect(Collectors.toList());
    }
    
    
    public List withErasure(List list){
        return list.stream().collect(Collectors.toList());
    }
    
타입이 제한되어 있을 경우 그 타입은 컴파일 시점에 제한된 타입으로 교체될 것이다.

    public <T extends Building> void genericMethod(T t){
        ...
    }
    
위의 코드는 컴파일 후 다음과 같이 변경된다.

    public void genericMethod(Building t){
        ...
    }
    
제네릭과 기본 데이터 타입

자바에서는 제네릭 사용시 제약이 있는데 타입 파라미터는 기본 타입이 될 수 없다는 것이다.

    List<int> list = new ArrayList<>();
    list.add(17); //X
    
    
기본타입이 적용될수 없는 이유를 이해하기 위해서는 "제네릭은 컴파일 시점 기능" 이라는것을 기억하자.
이 뜻은 타입 파라미터가 제거되면 모든 제네릭 타입들이 Object타입으로 구현된다는 의미이다.

예를들어 리스트의 add 메소드를 보자

    List<Integer> list = new ArrayList<>();
    list.add(17);
    
add 메소드 시그니쳐는 다음과 같다.
    
    boolean add(E e);
    
그리고 , 다음과 같이 컴파일이 된다.

    boolean add(Object e);
    
타입 파라미터들은 Object로 변환될 수 있어야 한다. 기본 타입은 Object를 상속받지 않기 때문에 타입 파라미터로서
사용할 수 없는 것이다.
그러나 자바는 기본타입들에 대해 boxed type을 제공하며 다음과 같이 autoboxing 과 unboxing ( wrapping 과 unwrapping) 을 한다.

    Integer a = 17;
    int b = a;
    
정수들을 갖을수 있는 리스트를 생성하고 싶다면 우리는 다음과 같이 래퍼클래스들을 사용할 수 있다.

    List<integer> list = new ArrayList<>();
    list.add(17);
    int first = list.get(0);
    
위의 코드가 컴파일 되면 다음과 같아진다.

    List list = new ArrayList<>();
    list.add(Integer.valueOf(17));
    int first = ((Integer)list.get(0)).intValue();
    
