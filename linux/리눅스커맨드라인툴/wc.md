## wc
- /line/word/byte 갯수를 출력한다.

- 옵션
    - `-l` : 라인수만 출력한다.

- 예제
    - `wc FILENAME`
    - `wc -l FILENAME`
    - `cat FILENAME | wc -l` : stdinㅇㅡ로부터 라인수만 획득한다.
    - `wc -l FILENAME | cut -d ' ' -f 1` : 라인수만 획득한다.
    - `wc -l FILENAMe | awk '{print $1}'` : 라인수만 확득힌다.
    - `wc *.c` : 여러 파일 입력시 합계를 출력한다.
    