## head
- 문서 내용의 앞부분을 출력한다.

- 옵션
    - `-c , --bytes=[-]NUM` : NUM byte 만 출력한다.
    - `-n , --lines=[-]NUM` : NUM line 만 출력한다.
    - `NUM`
        - byte 입력시 K,M,G,T 입력이 가능하다.
        - `-` 입력시 문서의 마지막 NUM byte/line 을 제외하고 출력한다.

- 예제
    - `head /etc/passwd`
    - `head -n 1 /etc/passwd`
    - `cat /etc/passwd | head -n 15`
    - `cat /etc/passwd | head -n 5`
    