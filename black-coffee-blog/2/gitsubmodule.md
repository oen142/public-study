#### Git submodule을 사용하는 이유
하나의 언어로 여러 프로젝트를 진행할 시에 예를들면 Gradle같은 경우에는 멀티프로젝트라는 개념이 있습니다.
하나의 모듈들이 각각의 기능을 제공하고 나머지는 취합해서 프로젝트를 제공하게 됩니다.
하지만 만약 Domain이 여러 프로젝트에 쓰고싶으면? 이럴경우 귀찮기 때문에 같은 공용 컴포넌트, 공용 모듈을 만들어서 공유할수 있게 구축이 된다면,
모듈에서 이슈가 생길 경우에는 도메인 모듈에서만 작업이 이루어질수 있기 때문에 생산성이 높아진다고 판단을 했습니다.


#### 서브모듈의 사용법
1. 서브모듈 사용하기
1. 서브모듈 추가하기
1. 부모 프로젝트에서 자식 프로젝트의 내용 변경하고 업데이트하기
1. 자식 프로젝트에서 수정 후 부모 프로젝트에 적용하기
1. 서브 모듈이 있는 프로젝트 클론하기
1. 변경된 서브모듈 업데이트하기

이번 시간에는 서브모듈을 사용해서 레포지토리에 올리는 방법을 저술하겠습니다.


`mkdir git-module`
`cd git-module`
`git clone https://github.com/oen142/git-submodule-common-tutorial.git`
`git clone https://github.com/oen142/git-submodule-root-tutorial.git`
`git submodule add -b master https://github.com/oen142/git-submodule-root-tutorial.git root`
` git add .`
` git commit -m 'submodule init'`
