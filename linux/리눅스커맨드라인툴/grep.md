## grep

- 파일 내용중 원하는 내용을 찾는다
- `grep [OPTIONS] PATTERN [FILE...]`

- 자주 사용되는 옵션
    - `-r` : recursive
    - `-i` : ignore case
    - `-v` : invert match
    - `-q` : quiet mode

- 사용예제
    - `grep fork *.c`
    - `grep fork *.c -q`
    - `grep "\<for\>" *.c`
    - `grep "^static.*(void)" *.c`
    - `ls -al | grep posix`
    - `find . | grep posix`