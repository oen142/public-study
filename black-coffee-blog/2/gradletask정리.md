- 최근 젠킨스로 CI/CD작업을 하면서 gradle에 대해 궁금점이 생겼다.
과연 그레이들은 테스트가 실패했을경우에 내가 처리해야할 점들은 무엇일지 고민을 했다.
테스트가 실패를 하면 당연히 배포를 중단해야 할것만 같았다.

그래서 우리는 젠킨스에서 gradle build를 했을 경우 테스트가 실패했을때
jar가 생기질 않기를 바랬다. 그런데?! 그냥 jar가 생겨서 배포가 되는게 아닌가?

그래서 나는 찾기 시작했다.
그 중 gradle에서 task들이 있었는데 그레이들에 task 들이 무엇이 있을지 정리를 해보았다.

여러가지 기본 task들이 정의되어 있다.
보통 우리는 intellij를 사용하기 때문에 오른쪽에 플러그인으로 지원이 되나
인텔리 제이를 안쓰는 경우에는 터미널에서 사용이 가능하다.

`./gradlew tasks`

그중 여러가지 태스크들이 있는데 각각 무엇을 하는지 설명을 해보려고 한다.

- Application tasks
    - bootRun 
        - 이 프로젝트를 Spring 부트 애플리케이션으로 실행합니다.
- Build tasks
    - assemble
        - 이 프로젝트의 결과물들을 조합해서 만들어냅니다.
    - bootBuildImage
        - bootJar 태스크의 출력을 사용하여 애플리케이션의 OCI 이미지를 빌드합니다.
    - bootJar
        - 기본 클래스와 해당 종속성을 포함하는 실행 가능한 jar 아카이브를 조립합니다.
    - build
        - 이 프로젝트를 조립하고 테스트를 합니다.
    - buildDependents
        - 프로젝트에 의존하는 모든 프로젝트를 조립하고 테스트합니다.
    - buildNeeded
        - 프로젝트와 종속된 모든 프로젝트들을 조립하고 테스트 합니다.
    - classes
        - 주요 클래스를 조립합니다.
    - clean
        - 빌드디렉토리에 있는 파일들을 삭제합니다.
    - jar
        - 기본 클래스를 포함하는 jar아카이브들을 조립합니다.
    - testClasses
        - 테스트 클래스를 구성합니다.
- Build Setup tasks
    - init
        - 새로운 gradle 빌드를 초기화 합니다.
    - wrapper
        - Gradle 래퍼 파일을 생성합니다.
- Documentation tasks
    - javadoc
        - 기본 소스코드에 대한 javadoc api문서를 생성합니다.
- Help tasks
    - buildEnvironment
        - 루트 프로젝트에 있는 해당 프로젝트에 선언된 모든 빌드스크립트 종속성을 표시합니다.
    - components
        - 루트 프로젝트에서 생성된 구성요소들을 표시합니다.
    - dependencies
        - 루트 프로젝트에 선언된 모든 종속성을 표시합니다.
    - dependencyInsight
        - 루트 프로젝트의 특정 종속성에 대한 통찰력들을 표시합니다.
    - dependencyManagement
        - 루트 프로젝트에 선언 된 종속성 관리를 표시합니다.
    - dependencyComponents
        - 루트 프로젝트에 있는 구성 요소의 종속 구성 요소를 표시합니다.
    - help
        - 도움 메세지를 표시합니다.
    - model
        - 루트 프로젝트의 구성 모델을 표시합니다.
    - projects
        - 루트 프로젝트의 하위 플로젝트들을 표시합니다.
    - properties
        - 루트 프로젝트의 속성을 표시합니다.
    - tasks
        - 루트프로젝트에서 실행할 수 있는 작업을 표시합니다.
- Verification tasks
    - check
        - 모든 체크사항들을 실행합니다.
    - test
        - 모든 단위 테스트를 실행합니다.


```
./gradlew build --info
Initialized native services in: /Users/gimjong-wan/.gradle/native
The client will now receive all logging from the daemon (pid: 62033). The daemon log file: /Users/gimjong-wan/.gradle/daemon/4.10.3/daemon-62033.out.log
Starting 2nd build in daemon [uptime: 28.021 secs, performance: 99%, no major garbage collections]
Using 6 worker leases.
Starting Build
Settings evaluated using settings file '/Users/gimjong-wan/Desktop/next-step3/java-ladder/settings.gradle'.
Projects loaded. Root project using build file '/Users/gimjong-wan/Desktop/next-step3/java-ladder/build.gradle'.
Included projects: [root project 'java-ladder']

> Configure project :
Evaluating root project 'java-ladder' using build file '/Users/gimjong-wan/Desktop/next-step3/java-ladder/build.gradle'.
All projects evaluated.
Selected primary task 'build' from project :
Tasks to be executed: [task ':compileJava', task ':processResources', task ':classes', task ':jar', task ':assemble', task ':compileTestJava', task ':processTestResources', task ':testClasses', task ':test', task ':check', task ':build']
:compileJava (Thread[Daemon worker,5,main]) started.

> Task :compileJava
Task ':compileJava' is not up-to-date because:
  Value of input property 'toolChain.version' has changed for task ':compileJava'
All input files are considered out-of-date for incremental task ':compileJava'.
Full recompilation is required because no incremental change information is available. This is usually caused by clean builds or changing compiler arguments.
Compiling with JDK Java compiler API.
Created classpath snapshot for incremental compilation in 0.001 secs.
:compileJava (Thread[Daemon worker,5,main]) completed. Took 0.672 secs.
:processResources (Thread[Daemon worker,5,main]) started.

> Task :processResources UP-TO-DATE
Skipping task ':processResources' as it is up-to-date.
:processResources (Thread[Daemon worker,5,main]) completed. Took 0.025 secs.
:classes (Thread[Daemon worker,5,main]) started.

> Task :classes
Skipping task ':classes' as it has no actions.
:classes (Thread[Daemon worker,5,main]) completed. Took 0.0 secs.
:jar (Thread[Daemon worker,5,main]) started.

> Task :jar
Task ':jar' is not up-to-date because:
  No history is available.
:jar (Thread[Daemon worker,5,main]) completed. Took 0.246 secs.
:assemble (Thread[Daemon worker,5,main]) started.

> Task :assemble
Skipping task ':assemble' as it has no actions.
:assemble (Thread[Daemon worker,5,main]) completed. Took 0.0 secs.
:compileTestJava (Thread[Daemon worker,5,main]) started.

> Task :compileTestJava
Task ':compileTestJava' is not up-to-date because:
  Value of input property 'toolChain.version' has changed for task ':compileTestJava'
All input files are considered out-of-date for incremental task ':compileTestJava'.
Full recompilation is required because no incremental change information is available. This is usually caused by clean builds or changing compiler arguments.
Compiling with JDK Java compiler API.
Created classpath snapshot for incremental compilation in 0.04 secs. 1 duplicate classes found in classpath (see all with --debug).
:compileTestJava (Thread[Daemon worker,5,main]) completed. Took 0.475 secs.
:processTestResources (Thread[Daemon worker,5,main]) started.

> Task :processTestResources NO-SOURCE
file or directory '/Users/gimjong-wan/Desktop/next-step3/java-ladder/src/test/resources', not found
Skipping task ':processTestResources' as it has no source files and no previous output files.
:processTestResources (Thread[Daemon worker,5,main]) completed. Took 0.001 secs.
:testClasses (Thread[Daemon worker,5,main]) started.

> Task :testClasses
Skipping task ':testClasses' as it has no actions.
:testClasses (Thread[Daemon worker,5,main]) completed. Took 0.0 secs.
:test (Thread[Daemon worker,5,main]) started.
Gradle Test Executor 1 started executing tests.
Gradle Test Executor 1 finished executing tests.

> Task :test
Task ':test' is not up-to-date because:
```


그래서 알고보니까 gradle에서 빌드시 로그를 볼수 있는 작업들이 있었다.
로그를 보면 test task는 맨 마지막에  실행된다. 그러므로 jar 파일이 만들어지는게 당연했다.
하지만 실패할경우 로깅시 찍히는게 있기 때문에 내가 원하는 작업을 할 수 있겠다.