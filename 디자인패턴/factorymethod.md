## Factory Method Pattern

- 팩토리 메소드 패턴에서 템플릿 매소드 패턴의 사용됨을 안다.
    - 어떤 알고리즘을 개발 하고 이해하려면 여러 단계의 스텝으로 나뉘어진다면 나뉜 스텝별로 메소드를 선언하고
    하위 클래스에서 메소드를 구현한다.
- 팩토리 메소드 패턴에서의 구조와 구현의 분리를 이해하고 구조와 구현의 분리의 장점을 안다.

### 요구사항

- 게임 아이템과 아이템 생성을 구현하라
    - 아이템을 생성하기 전에 데이터베이스에서 아이템 정보를 요청한다.
    - 아이템을 생성후 아이템 복제등의 불법을 방지하기 위해 데이터베이스에 아이템 생성 정보를 남긴다.
- 아이템을 생성하는 주체를 ItemCreator로 이름을 짓는다.
- 아이템은 item이라는 interface로 다룰 수 있도록 한다.
    - item은 use함수를 기본함수로 갖고있따.
- 현재 아이템의 종류는 체력 회복 물약, 마력 회복 물약이 있다.
