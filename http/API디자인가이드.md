## HTTP 디자인 하는 방법

#### 올바른 상태코드를 반환하자
각 응답에 적절한 HTTP상태코드를 반환하는 것이다. 성공적인 응답에는 반드시 이 가이드에 맞춰 코드를 지정해야 한다.
- 200: `GET` 호출 `DELETE` 또는 `PATCH` 호출에 따른 요청이 성공했고, 동시에 완료되었다.
- 201: `POST` 호출에 따른 요청이 성공했고, 동시에 완료되었다.
- 202: `POST`,`DELETE`,`PATCH` 호출을 받았고, 비동기적으로 수행될 예정이다.
- 206: `GET` 이 성공했지만 부분적인 응답만 반환됐다.

#### 가능하다면 전체 리소스를 모두 제공하라

기회가 된다면 항상 응답에 전체 리소스 표현(즉, 모든 속성을 갖고 있는 객체)를 제공하자 `PUT`,`PATCH`와 `DELETE` 요청을 포함, 200,201응답에는 항상
전체 리소스를 제공하자.

```
$ curl -X DELETE \  
  https://service.com/apps/1f9b/domains/0fd4

HTTP/1.1 200 OK
Content-Type: application/json;charset=utf-8
...
{
  "created_at": "2012-01-01T12:00:00Z",
  "hostname": "subdomain.example.com",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

202 응답에는 전체 리소스 표현이 포함되지 않는다.
```
$ curl -X DELETE \  
  https://service.com/apps/1f9b/dynos/05bd

HTTP/1.1 202 Accepted
Content-Type: application/json;charset=utf-8
...
{}
```

#### 요청의 본문에 직렬화된 JSON을 허용하라
양식에 따라 인코딩된 데이터를 대신하거나 그에 덧붙여, `PUT`/`PATCH`/`POST` 요청 본문에 직렬화된 JSON을 허용하자. 이는 JSON으로
직렬화된 응답본문과 잘 어울리는 대칭성을 보여준다.

```
$ curl -X POST https://service.com/apps \
    -H "Content-Type: application/json" \
    -d '{"name": "demoapp"}'

{
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "demoapp",
  "owner": {
    "email": "username@example.com",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  ...
}
```

#### 리소스(UU)ID를 제공하라
각 리소스에는 기본적으로 `id`속성을 부여하자. 다른 좋은 이유가 없다면, UUID를 사용하자. 서비스의 여러 인스턴스나 서비스 내부의 다른
리소스와 전역적으로 유일하게 구분되지 않는 ID는 사용해선 안되며 , 특히 자동으로 증가하는 ID를 주의하자

UUID는 8-4-4-4-12 포맷에 맞춰 소문자로 표현하자. 예를 살펴보자
```
"id": "01234567-89ab-cdef-0123-456789abcdef"
```

#### 표준 타임 스탬프를 제공하자
리소스에 `created_at`과 `updated_at` 타임스탬프를 기본으로 제공하자.
```
{
  "created_at": "2012-01-01T12:00:00Z",
  "updated_at": "2012-01-01T13:00:00Z",
}
```
#### ISO8601 포맷에 맞춘 UTC시간을 사용하자
시간은 UTC만을 허용하고 UTC만을 반환토록 하자. 시간은 ISO8601포맷에 맞추자.
```
"finished_at": "2012-01-01T12:00:00Z"
```


#### 일관성 있는 경로 포맷을 사용하라
- 리소스 이름
    - 해당 리소스가 시스템 내에서 싱글턴으로 존재하지 않는다면(대부분에 시스템에선 하나의 사용자가 하나의 계정만을 가질수 있다.), 해당 리소스의 복수형
    버전을 사용하도록 하자. 이는 특정 리소스를 참조하는 방식을 일관되게 유지할 수 있도록 해준다.
- 액션
    - 개별 리소스에 대한 특별한 액션이 필요 없는 엔드포인트 레이아웃을 선호해야한다.
    특별한 액션이 필요한 경우에 이를 표준화된 `action` 접두사 아래에 위치 시켜서 다음과 같이 명확히 구분해 표현토록 하자.
    `/resources/:resource/actions/:action`
    - ex) `/runs/{run_id}/actions/stop`
- 경로와 속성은 소문자로 만들자
    - 소문자와 가운데 줄로 구분된 경로 이름을 사용해 호스트 이름과 그 모습을 갖추도록 하자.
    - 속성도 마찬가지로 소문자를 사용하자. 다만 자바스크립트에서 타입 지정하기 위해 따옴표로 둘러쌀 필요가 없도록 밑줄을 구분해 사용하자.
```
service-api.com/users
service-api.com/app-setups
``` 
`service_class:"first"`

- 외래키 관계를 중첩시켜라
    - 외래키 참조는 중첩된 객체로 직렬화 하자.
```
{
    "name" : "service",
    "owner":{
        "id": "5d8201b0..."    
    },
}
```