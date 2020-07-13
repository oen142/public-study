## nl
- 파일 내용을 라인 넘버와 함께 출력한다.

- 옵션
    - `-ba` : 모든 라인에 대해 라인을 넘버링 한다.
    - `-v N`: 시작 라인 넘버를 N으로 지정한다.
    - `-s` : 라인 넘버 출력 후 출력할 separator를 지정한다.

- 예제
    - `cat FILENAME`
    - `nl FILENAME`
    - `nl -ba FILENAME`
    - `nl -ba -s ":  " FILENAME`
    - `nl -ba -s ":  " FILENAME | tail`
    