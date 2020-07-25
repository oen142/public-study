# HTTP HEADER

- HTTP 메시지 헤더
- HTTP 헤더 필드
    - HTTP 헤더 필드는 중요한 정보를 전달한다.
    - HTTP 헤더 필드의 구조
    - 4종류의 HTTP 헤더 필드
    - HTTP/1.1 헤더 필드 알람
    - HTTP/1.1 이외의 헤더 필드
    - End-to-end 헤더와 Hop-by-hop헤더
- HTTP/1.1 일반 헤더 필드
    - Cache-Control
    - Connection
    - Date
    - Pragma
    - Trailer
    - Transfer-Encoding
    - Upgrade
    - Via
    - Warning
- 리퀘스트 헤더 필드
    - Accept
    - Accept-Charset
    - Accept-Encoding
    - Accept-Language
    - Authorization
    - Expect
    - From
    - Host
    - If-Match
    - If-Modified-Since
    - If-None-Match
    - If-Range
    - If-Unmodified-Since
    - Max-Forwards
    - Proxy-Authorization
    - Range
    - Referer
    - TE
    - User-Agent
- 리스폰스 헤더 필드
    - Accept-Ranges
    - Age
    - ETag
    - Location
    - Proxy-Authenticate
    - Retry-After
    - Server
    - Vary
    - WWW-Authenticate
- 엔티티 헤더 필드
    - Allow
    - Content-Encoding
    - Content-Language
    - Content-Length
    - Content-Location
    - Content-MD5
    - Content-Range
    - Content-Type
    - Expires
    - Last-Modified
- 쿠리를 위한 헤더 필드
    - Set-Cookie
    - Cookie
- 그 이외의 헤더 필드
    - X-frame-Option
    - X-XSS-Protection
    - DNT
    - P3P
    

## HTTP 메시지 헤더

- 메시지 헤더 : 클라이언트와 서버 처리에 필요한 주요 정보가 담겨있다.
- 메시지 바디 : 사용자와 리소스를 필요하는 정보가 담겨있다.

HTTP 프로토콜의 리퀘스트와 리스폰스에는 반드시 메시지 헤더가 포함되어 있다.
메시지 헤더에는 클라이언트나 서버가 리퀘스트나 리스폰스를 처리하기 위한 정보가 들어있다.
이러한 정보의 대부분은 클라이언트를 이용하는 사용자가 직접 볼 필요는 없다.

#### 리퀘스트의 HTTP메시지
- 메소드
- URI
- HTTP 버전
- HTTP 헤더 필드||클래스|설명|
            |---|--------------|-----|
            |1xx|Informational|리퀘스트를 받아들여 처리중|
            |2xx|Success|리퀘스트를 정상적으로 처리했다.|
            |3xx|Redirection|리퀘스트를 완료하기 위해서 추가 동작이 필요|
            |4xx|Client Error|서버는 리퀘스트를 이해 불가능하다.|
            |5xx|Server Error|서버는 리퀘스트를 처리 실패했다.|

#### 리스폰스의 HTTP메시지
- HTTP 메시지
- HTTP 버전
- 상태코드(코드와 설명)
- HTTP 헤더 필드

## HTTP 헤더 필드

####  HTTP 헤더 필드는 중요한 정보를 전달한다.
HTTP 헤더 필드는 HTTP 메시지를 구성하는 요소중 하나이다. 헤더 필드는 HTTP 프로토콜 중에서 클라이언트와
서버간의 통신에서 리퀘스트에도 리스폰스에도 사용되고 있고, 부가적으로 중요한 정보를 전달하는 역할을 담당하고 있다.
그리고 메시지 바디의 크기나 사용하고 있는 언어 인증 정보등을 브라우저나 서버에 제공하기 위해 사용하고 있따.

#### HTTP 헤더 필드의 구조
HTTP 헤더 필드는 헤더 필드 명과 필드 값으로 구성되어 있고 콜론으로 나뉘어져 있다.
> 헤더 필드명 : 필드값

> HTTP 헤더 필드가 중복된 경우는 어떻게 될까?
> 이러한 내용은 사양으로 명확하게 정해져 있는게 아니기 때문에 브라우저에 따라 다르게 동작한다.


#### 4종류의 HTTP 헤더필드

- 일반적 헤더 필드(General Header Fields)
    - 리퀘스트 메시지와 리스폰스 메시지 둘다 사용되는 헤더이다.
- 리퀘스트 헤더 필드(Request Header Fields)
    - 클라이언트 측에서 서버 측으로 송신된 리퀘스트 메시지에 사용되는 헤더로 리퀘스트의 부가적 정보와
클라이언트 정보, 리스폰스의 콘텐츠에 관한 우선순위등을 부가한다.
- 리스폰스 헤더 필드(Respoense Header Fields)
    - 서버 측에서 클라이언트 측으로 송신한 리스폰스 메시지에 사용되는 헤더이다.
리스폰스의 정보와 서버의 정보, 클라이언트의 추가정보 요구등을 부가한다.
- 엔티티 헤더 필드(Entity Header Fields)
    - 리퀘스트 메시지와 리스폰스 메시지에 포함된 엔티티에 사용되는 헤더로 콘텐츠 갱신시간 등의 엔티티에 관한 정보를 부가한다.


#### Http/1.1헤더 필드 일람

#####일반헤더 필드
|헤더 필드 명|설명|
|--------------|-----|
|Cache-Control|캐싱 동작 지정|
|Connection|Hop-by-hop 헤더, 커넥션 관리|
|Date|메시지 생성 날짜|
|Pragma|메시지 제어|
|Trailer|메시지의 끝에 있는 헤더의 일람|
|Transfer-Encoding|메시지 바디의 전송 코딩 형식 지정|
|Upgrade|다른 프로토콜에 업그레이드|
|Via|프록시 서버에 관한 정보|
|Warning|에러 통지|

#####리퀘스트 헤더 필드
|헤더 필드 명|설명|
|--------------|-----|
|Accept|유저 에이전트가 처리 가능한 미디어 타입|
|Accept-Charset|문자셋 우선 순위|
|Accept-Encoding|콘텐츠 인코딩 우선 순위|
|Accept-Language|언어 우선 순위|
|Authorization|웹 인증을 위한 정보|
|Expect|서버에 대한 특정 동작의 기대|
|From|유저의 메일 주소|
|Host|요구된 리소스의 호스트|
|If-Match|엔티티 태그의 비교|
|If-Modified-Since|리소스의 갱신시간 비교|
|If-None-Match|앤티티 태그의 비교(If-Match)와 반대|
|||
|||
|||

#####리스폰스 헤더 필드
|헤더 필드 명|설명|
|--------------|-----|
|||

#####엔티티 헤더 필드
|헤더 필드 명|설명|
|--------------|-----|
|Allow|리소스가 제공하는 HTTP메소드|
|Content-Encoding|엔티티 바디에 적용되는 콘텐츠 인코딩|
|||
|||
|||
|||
|||
|||
|||
|||

## HTTP/1.1 이외의 헤더 필드
HTTP에서 교환되는 HTTP헤더 필드가 RFC2616에서 정의된 47종류만 있는것이 아니다.
이러한 비표준 헤더 필드는 RFC4229 HTTP Header Field Registrations에 정리되어 있다.

## End-to-end 헤더와 Hop-by-hop헤더
HTTP 헤더 필드는 캐시와 비캐시 프록시의 동작을 정의하기 위해 두 카테고리가 있다.

- End-to-end 헤더
    - 이 카테고리에 분류된 헤더는 리퀘스트나 리스폰스의 최종 수신자에게 전송된다.
    - 캐시에서 구축된 리스폰스중 보존되어야 하고, 다시 전송된지 않으면 안되도록 되어있다.
- Hop-by-hop 헤더
    - 이 카테고리에서 분류된 헤더는 한번 전송에 대해서만 유효하고 캐시와 프록시에 의해서 전송되지 않는 것도 있다.
    - HTTP/1.1과 그 이후에서 사용되는 Hop-by-hop헤더는 Connection 헤더 필드에 열거해야 한다.
        - Connection
        - Keep-Alive
        - Proxy-Authenticate
        - Proxy-Authorization
        - Trailer
        - TE
        - Transfer-Encoding
        - Upgrade


## HTTP/1.1 일반 헤더 필드
일반 헤더 필드는 리퀘스트 메시지와 리스폰스 메시지 양쪽에서 사용되는 헤더이다.

### Cache-Control
디렉티브로 불리는 명령을 사용하여 캐싱 동작을 지정한다.
지정한 디렉티브에는 파라미터가 있는것과 없는 것도 있으며 여러개의 디렉티브를 지정하는 경우 콤마로 구분한다.
Cache-Control헤더 필드의 디렉티브는 리퀘스트 및 리스폰스 할 때 사용할 수 있다.

`Cache-Control: private, max-age=0, no-cache`

- Cache-Control 디렉티브 일람
사용 가능한 디렉티브를 리퀘스트와 리스폰스로 나눠서 다음과 같이 나타낸다.

##### 캐시 리퀘스트 디렉티브
|디렉티브|파라미터|설명|
|-----|-----|---|
|no-cache|없음|오리진 서버에 강제적인 재검증|
|no-store|없음|캐시는 리퀘스트, 리스폰스의 일부분을 보존해서는 안됨|
|max-age=[초]|필수|리스폰스의 최대 age값|
|max-state(=[초])|생략 가능|기한이 지난 리스폰스를 수신|
|min-fresh=[초]|필수|지정한 시간 이후에 변경된 리스폰스를 보냄|
||||
||||
||||
