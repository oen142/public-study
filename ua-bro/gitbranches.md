https://www.youtube.com/watch?v=MIGliPrUMGE

목차
- Why git?
- Git Overview
- Co-working with Git


### Why git?

- Version Control
- Co-wriking Tool
- Powerful Branching

### Version Control

- _Final
- Realfinal
- ..등등 지저분하다.

### Co-working Tool

- 너는 프론트 너는 콘텐츠 너는 데이터베이스 나는 숨쉬기 . 커뮤니케이션 비용이 든다

### Powerful Branching

- 관심사 분리가 가능

### 깃이 왜 어렵게 느껴질까?

- Commit


### Commit

- 각자 하나가 의미를 가지지 못하고 앞이 있어야 맥락을 가지고 있어야 한다.

### Common Parent

- o(origin) <- A <- B <- C /C->F
- o(origin) <- D <- E <- F

### Conflict
- Resolve Conflict
    - 수동으로 프로그래머가 수정
- Revert 

- Approve PR Commit


### Head operator

- git reset -COMMIT-
- git reset HEAD^^^
- git reset HEAD~3
- git reset -BRANCH_NAME-


### Git commands - push

- git push -Repo- -SRC_BRANCH- : -DEST_BRANCH-

- git remote add mirror URL
- git mirror Id:master

### Git commands - rebase

- git rebase -i -BRANCH-
- git rebase --onto -TARGET_BRANCH- -RANGE_FROM- -RANGE_TO-

### More Information

- Pro Git
- https://learngitbranching.js.org
- git -Commned- --help
- man git