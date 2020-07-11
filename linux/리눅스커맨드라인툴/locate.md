## locate

- 파일의 위치를 찾아 보여준다.
- 단, updatedb가 저장해놓은 DB 파일 내에서 검색하므로 누락 파일이 생길수 있다.
- `locate [OPTION]... PATTERN...`

-자주 사용되는 옵션
    - `-i, --ignore-case` : 대소문자 구분없이 검색
    - `-l, --limit, -n LIMIT` : 출력 결과를 LIMIT 만큼만 출력
    - `--regex` : PATTERN을 regex로 해석

- 사용 예제
    - `locate main.c`
    - `locate main.c -n 10`
    - `locate --regex "/usr/src/.*\<main.c$"`