## apropos

- man page 이름과 설명을 검색한다.

>자주 사용되는 옵션
- `-s , --sections=LIST , --section=LIST` : 탐색할 섹션을 colon으로 구분하여 입력

- 사용예제
    - `apropos pthread`
    - `apropos pthread -s 7`
    - `apropos '^sem_'`
    - `apropos '.*'`
    - `apropos '.*' -s 5:6:7`