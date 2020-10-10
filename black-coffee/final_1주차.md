## 1주차 시간


- 해야할 요구사항
     - todo List에 todoItem을 엔터 키보드로 입력하여 추가한다.
     - list에 새로운 요소를 삽입한다.
     - todoList에 X버튼을 이용해서 엘리먼트를 삭제한다.
     - todoList를 더블 클릭했을때 input모드로 변경하고, li tag에 editing class로 만든다. 단, 이때 수정완료하지
     않은 상태에서 esc키를 누르면 수정되지 않은채로 다시 view모드로 복귀해야한다.
     
- 예시

처음 페어 프로그래밍을 진행했었다.
퇴근한 뒤 7시부터 시작을 했다.
같이 하는 분은 아직 학부생이라고 했고, 바닐라js실력은 비슷한 수준이였던것 같다.

- 진행하면서 아쉬웠던점
    - 그 시간에 분석을 하고 바로 코드를 짜려고 하니까 너무 뒤죽박죽이 되는 느낌이다.
    - 선 공부를 하고와서 페어프로그래밍을 하면 좋겠다.
- 궁금했던점
    - 스터디장님은 약 20분씩 돌아가면서 하라고 했었는데, 우리는 기능 구현단위에 교대를 했다.
    - 어떤것이 맞을까?
- 좋았던점
    -
    
    
    
- UserList 불러오기

|method|uri|
|---|---|
|GET|/api/users|

```
{
    response:[...]
}
```

- User 추가하기

|method|uri|
|---|---|
|POST|/api/users|

```
{
    requestBody:{
        "name" : "string"
    }
    response:{
        "_id": "string",
        "name": "string",
        "todoList" : []
    }
}
```
- User 불러오기

|method|uri|
|---|---|
|GET|/api/users/:userId|

```
{
    requestBody:{
        "name" : "string"
    }
    response:{
        "_id": "string",
        "name": "string",
        "todoList" : []
    }
}
```
