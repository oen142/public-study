## Templeate Method Pattern 
알고리즘의 구조를 메소드에 정의하고 하위클래스에서 알고리즘 구조의 변경없이 알고리즘을 재정의 하는 패턴

## 목표

일정한 프로세스를 가진 요구사항을 템플릿 메소드 패턴을 이용하여 구현할 수 있다.

- 구현하려는 알고리즘이 일정한 프로세스가 있다. (여러 단계가 있다.)
- 구현하려는 알고리즘이 변경 가능성이 있다. 


- 알고리즘을 여러 단계로 나눈다.
- 나눠진 알고리즘의 단계를 메소드로 선언한다.
- 알고리즘을 수행할 탬플릿 메소드를 만든다.
- 하위 클래스에서 나눠진 메소드들을 구현한다.


요구 사항
- 신작 게임의 접속을 구현해주세요.
    - requestConnection(String str) : String
- 유저가 게임 접속시 다음을 고려해야한다.
    - 보안 과정 : 보안 관련 부분을 처리한다.
        -  doSecurity(String str) : String
    - 인증 과정 : username과 password가 일치하는지 확인한다.
        - authentication(String id , String password) : boolean
    - 권한 과정 : 접속자가 유료 회원인지 무료회원인지 게임 마스터 인지를 확인한다.
        - authorization(String username) : int
    - 접속 과정 : 접속자에게 커넥션 정보를 넘겨준다.
        - connection(String info) : String
        
추가 요구사항

- 보안 부분이 정부 정책에 의해서 강화되었다. 강화된 방식으로 코드를 변경해야한다.
- 여가부에서 밤 10시 이후에 접속이 제한되도록 한다.

