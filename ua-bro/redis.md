## Redis

- Redis 개요
- Cache 개념
- Redis 자료구조
- Redis 주의사항

- 쿠팡이 모든 상품들이 품절로 표시되는 적이 있다.
    - 오류 원인이 레디스DB가 문제인것으로 드러났다.

- Remote Dictionary Server
    - 외부 HashMap Key -Value 서버

- 32bit CPU에서 Int 최대값은?
    - 21억 ..
    - key가 integer range 를 넘어서 key값이 너무 많아져서
    - int -> long으로 바꾸게 되었다.
    
- What is Redis
    - database , cache, Message broker
    - In-memory Data Structure Store
    - Supports rich data structure
- Cache
    - 나중의 요청에 대한 결과를 미리 저장했다가 빠르게 사용하는것
- Memory Hierarhy
    - Storage(SSD, HDD)
    - Main Memory(DRAM)
    - CPU Cache
    - CPU Register

- 맥북 설명
    - 12 MB CacheMemory ( SRAM  CPU Cache)
        - 비싸고 빠르고 작음
    - 16GB DRAM
        - 적당히 빠르고 적당히 비쌈 적당히 큼 휘발성
    - 512GB SSD
        - 비교적 느림 비교적 저렴함 엄청 큼 비휘발성

- DataBase
    - HDD, SSD 저장한다.
- Main Memory
    - DRAM

- database보다 더빠른 Memory에 더 자주 접근하고 덜 자주 바뀌는 데이터를 저장하자
    - In-memory Database(Cache)
- Data Structure
     - Collection을 지원 
     - 비교되는 메모리 캐시( MemCache)
     
     
- String
    - Key - Value 쌍
    - Java의 Map Entry
    - Set <Key> <Value>
    - Get<Key
    - Del<Key>
- List
    - Key - List쌍
    - Java의 LinkedList
    - Lush & Rpush <Key> <Elements...>
    - Lpop & Rpop <Key>
    - Lragne <Key> <Start> <End>
    - Lindex<Key> <Index>
- Set
    - Key - Set쌍
    - Java의 HashSet
    - Sadd <Key> <Element>
    - Smembers<Key>
    - Sismember<Key> <Element>
    - Srem<Key> <Element>
- Sorted Set
    - Key - Set쌍
    - Java의 TreeSet
    - Zadd<Key><Scroe><Element>
    - Zrange<Key><Start><End>
    - Zrangebyscroe<Key><min><max>
    - Zrem<Key><Element>
- Hash
    - Key - Hash 쌍
    - Java의 HashMap(혹은 Object)
    - Hset<Key><Sub-key> <Sub-value>
    - Hget<Key><Sub-key>
    - Hgetall<Key>

- Java - Redis
    - HashMap에다가 데이터베이스에 저장해도되지 않나?
    - 서버가 여러대인경우 Consistency의 문제 발생   
    - Session같은 경우에 자바 객체에 저장하게 되면 다른 서버에서는 해당 세션이 없기때문에
    문제가 발생할수 있다.
    - Multi-Threaded 환경에서 Race Condition이 발생할 수 있다.
- Race Condition?
    - Race Condition이란 여러개의 Thread가 경합하는것
    - Context Switching에 따라 원하지 않는 결과가 발생
    - Redis는 기본적으로 싱글쓰레드
    - Redis자료구조는 Atomic Critical Section에 대한 동기화를 제공
        - 동시에 프로세스가 접근하면 안되는 영역
    - 서로 다른 Transcation Read/Write를 동기화
    
- 어디서 쓰나요?
    - 여러 서버에서 같은 데이터를 공유할때
    - Single Server라면? Atomic 자료구조 & Cache
    - 세션등등
- 주의해야할 점
    - Single Thread 서버이므로 시간 복잡도를 고려해야한다.
    - In-memory특성상 메모리 파편화, 가상 메모리등의 이해가 필요하다.
- Single Threaeded
    - Event Driven(비동기)
    - IO-bound Process
    - Context Switching의 효율이 적다
- 개발의 단순함 사용의 단순함
- 커멘드가 오랜 시간 요청되는 경우 나머지 요청들이 처리되지않고 서버가 다운될수 있다.
- 그만큼 처리가 빨라야 한다
    - KeyS Flush GetAll 연산을 주의하자
- Memory 관리
    - 메모리 파편화
        - 메모리를 할당받고 해제하는 경우에 부분부분비는곳이 보인다.
        - 실제 메모리에서 사용하지 못하는 경우가 생긴다.
        - 실제 메모리보다 보이는 메모리가 적을수 도 있다.
        - 여유있게 사용해야 한다.
    - 가상메모리 Swap
        - 실제로 프로세스를 메모리에 올릴때 전체 프로세스를 올리지않고 덜쓰이는 메모리들은디스크에저장했다가
        필요할때 메모리에 올린다.
        -이 과정에서 지연이 발생하고 그경우 싱글쓰레도 환경에서 문제가 발생할 가능성이 있다.
    - Replication - Fork
        - 휘발성을 가지고 있는 메모리상의 데이터 저장소이다. 유실될 문제를 안고 있어야 한다.
        - 복제 기능을 제공하는데 복사를 해서 슬레이브 레디스 서버나 디스크에 전송해서 저장하는 방식을 씀
        - 프로세스를 동일하게 복제해서 사용하는 방식을 사용하는데 메모리가 가득차있으면 복사하지 못하고 죽는 경우가 발생한다.
        - 메모리를 여유있게 사용해야 한다.
        
- Redis를 저장소 처럼 -> Redis Persistence RDB, AOF
- Redis는 메모리  제한이 되어있기 때문에 주기적으로 Scale out Back up을 해야함 -> Redis Cluster
- 부하분산 -> Constant Hashing
- Data Grid -> Spruing Gemfiere, Hazlcast  

 