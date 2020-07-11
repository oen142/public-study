## tail
- 문서 내용의 뒷부분을 출력한다.

- 옵션
    - `-c, --bytes=[+]NUM` : NUM byte 만 출력한다.
    - `-n, --lines=[+]NUM` : NUM line 만 출력한다.
    - `-f, --follow[={name|descr}]` : 추가되는 내용 대기한다. 추가되는 내용은 append 하여 출력을 한다.
    - `-F`
        - 파일이 truncate 되는 경우 re-open하여 follow 한다(logrotate 되는 파일에 유용하다.)
    - `NUM`
        - byte 입력시 K,M,G,T 입력이 가능하다.
        - `+`입력시 문서 시작의 NUM byte/lin 지점에서 출력을 시작한다.

- 예제
    - `tail /etc/passwd -n 1`
    - `tail /etc/passwd -n +5`
    - `cat /etc/passwd | tail -n 15`
    - `cat /etc/passwd | tail -n +5`