## find

- 조건에 맞는 파일을 찾아 명령을 수행한다.
- 기본 사용방법 : `find [OPTIONS] path EXPR`

## 자주 사용되는 옵션
- 조건
    - `-name` :이름으로 검색
    - `-regex` : regex에 매치로 검색
    - `-empty` : 빈 디렉터리 혹은 빈 검색
    - `-size` : 사이즈로 검색(M,G로 표기가능)
        - -N : 이하
        - +N : 이상
    - `-type` : 파일타입으로 검색
        - d : directory
        - p : named pipe
        - f : regular file
        - l : softlink
        - s : socket
    - `-perm` : 퍼미션으로 검색
        - mode : 정확히 일치하는 파일
        - +mode : 모든 flag가 포함된 파일
        - /mode : 어떤 flag라도 포함된 파일
- 액션
    - `-delete` : 파일삭제
    - `-ls` : ls -dils 명령 수행
    - `-print` : 파일 이름 출력
    - `-printf` : 파일 이름을 포맷에 맞게 출력
    - `-exec` : 주어진 명령 수행
    - `-execdir` : 해당 디렉터리로 이동하여 명령 실행
    - `-ok` : 사용자에게 확인후 exec
    - `-okdir` : 사용자에게 확인 후 실행 execdir
    
- 사용예제
    - `find . name "*.py"`
    - `find 'pwd' -name "*.py"`
    - `find . -regextype egrep - regex'.*hash.*.c$'`
    - `find . -empty`
    - `find . -type d`
    - `find . -type f`
    - `find . -perm 0644`
    - `find . -perm /u+x`
    - `find . -type f -perm /001`
    - `find . -type f -perm /001 -ls`
    - `find . -type f -perm /001 -exec ls -l {} \`
    - `find . -type f -perm 755 -printf '%f-$i\n'`
    - `find . -type f -name "*.py" -exec stat {} \`
    - `find . -type f -perm 755 -execdir pwd \; | uniq`
    - `find . -type f -name "README" -ok rm {} \`