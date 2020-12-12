### 아키텍쳐
- 현재 진행중인 아키텍쳐

### 기술진단
- 안정성
    - 백업 및 복구
        - 인스턴스 스냅샷, DB snapshot 활용 여부
    - 가용성 / 이중화
        - Auto scailing 활용 , RDS multi-AZ
    - 관리형 서비스 활용
        - 관리 point 절감을 위해 RDS, SQS, DynamoDB등 활용 여부
- 운영 효율성
    - 구성 관리 및 자동화
        - 인프라 구성 및 배포는 어떻게 진행하는지?
        - CloudFormation, OpsWorks 이용 여부
    - 모니터링
        - 현재 모니터링은 어떤식으로 진행하고 있는지?
        - CloudWatch 이용, 3rd party 서비스 이용등
- 성능
    - DB 활용
        - RDS - Aurora , MySQL , EC2에 DB설치 여부
    - Cache 사용
        - ElasticCache (Memcached, redis) 구성 여부
    - CDN 사용
        - CloudFront, 국내 CDN사용 여부
- 비용 최적화
    - RI, Spot 활용
        - RI 및 Spot instance 활용 요령
    - 인스턴스 타입 선택
        - EC2등 다양한 인스턴스 타입 선택 요령
    - 스토리지 비용 최적화
        - S3 Lifecycle 구성 , S3-IA, Glacier 사용 여부
- 보안
    - 계정 접근 관리
        - IAM, MFA 사용여부
        - IAM 보안 강화 방법
    - VPC 활용
        - VPC구성 여부
    - 로그 관리
        - 로그 관리 저장 분석상황 여부


- Q. 백업을 위해 AWS backup을 이용하는게 좋을지? EBS 및 DB 스냅샷을 이용한 백업 방식이 좋은지?
    - A. AWS Backup은 중앙에서 관리합니다. AWS에서 백업을 해도되고 RDS 스냅샷을 활용하는것도 좋습니다.
    Backup기능이 더 많기 때문에 사용하는것을 추천하나 손에 맞는것을 사용하는것이 좋습니다.
- Q. ELB를 이용하여 오토스케일링에서 가용영역 마다 오토스케일링 그룹이 설정되어
    - A. ELB 오토스케일링은 둘다 신경써야 합니다. 서브넷을 선택할때 모든 서브넷이 가용영역에 걸쳐서 형성됩니다.
    오토스케일링을 시작템플릿으로 만들때 서브넷과 보안 그룹을 선택하는데 두개이상의 가용영역에 설치를 하고 퍼블릭으로 열지말고
    private를 사용합니다. 외부로 통하는 ELB는 퍼블릭으로 선택하면 됩니다.
- Q. RDS를 이중화할때 어떻게 사용해야하나요?
    - A. RDS 이중화는 Primary/Secondary로 구성하는게 좋습니다.
         Read Replica는 동기화 백업 방식이 아닙니다. 분산 목적, 이중화가 목적이 아닙니다.
         Aurora사용하시면 기본적으로 Read Replica가 Secondary의 역할을 할 수 있도록 되어 있으나, Sync의 차이가 있습니다.
- Q. Jenkins를 이용한 pipeline을 통해 Build후 S3에 저장후 AWS CodeDeploy를 호출하여 Ec2에서 무중단 배포 예정입니다. 맞는 방향인가요? 
    - A. AWS 내부의 배포방식을 사용하지 않고 다른 서비스를 연동해서 사용해도 괜찮다. 하지만 나중에 AWS를 사용하다가
    문제가 생길경우 도움을 받기 곤란할수도 있다.
    젠킨스를 사용하게 되면 젠킨스에 관련한 문서를 많이 읽어보길 바랍니다.
         - [블루그린 배포 가이드라인](https://docs.aws.amazon.com/ko_kr/codedeploy/latest/userguide/deployment-groups-create-blue-green.html)
         - [오토스케일링 트러블슈팅](https://docs.aws.amazon.com/ko_kr/codedeploy/latest/userguide/troubleshooting-auto-scaling.html)
         - [서비스롤 생성방법](https://docs.aws.amazon.com/ko_kr/codedeploy/latest/userguide/getting-started-create-service-role.html)
         - [오토스케일링 생성 템플릿](https://docs.aws.amazon.com/ko_kr/autoscaling/ec2/userguide/create-launch-template.html)
- Q. Cloud Watch와 Cloud Trail을 이용할 예정입니다. 가이드라인이 있을까요?
    - 클라우드 와치서비스를 사용하면 나중에는 능숙하게 사용하게 될겁니다. 특히 모든 서비스가 와치를 사용해야 합니다.
    서비스마다 어떻게 구성해야하는지는 다르기 때문에 일반적인 가이드를 주기는 힘듭니다.
- Q. RDS를 이용한 MariaDB를 이용하려고 합니다. 
vpc를 public subnet과 private subnet으로 나누고
 NAT Gateway를 이용해서 public sunber과 private subnet을 구성할려고 합니다. 
 그리고 RDS를 private subnet 가용영역을 설정 할려고 합니다. 
 이때 외부에서 DB에 접근 하고 싶으면 퍼블릭 엑세스를 허용을 해야하는지 아니면 퍼블릭 엑세스를 차단해도 되는지 궁금합니다. 
    - A. alb같은 외부에 노출되어야 하는것들은 퍼블릭으로 열되,나머지들은 다 private로 닫는것이 좋다.
    하지만 예외적으로 DB같은경우 접근해야 할 일이 있을수 있기 때문에 베스천호스트를 사용하는것이 좋다.
    - NAT가 필요한 이유는 EC2같은 서비스에서 아웃바운드를 사용하기 위한것이다(서비스 업데이트나 패치)
    보안그룹같은 서비스를 제한두지 않으면 서브넷끼리의 연결은 가능합니다.
        - [VPC flowlogs](https://aws.amazon.com/ko/premiumsupport/knowledge-center/rds-connect-ec2-bastion-host/)
- Q. CloudFrount를 이용해서 React를 정적 호스팅으로 구성을 하고
 ELB를 통해서 Spring API Gateway Auto Scaling Group으로 트래픽을 보내주는 구성을 하고 있습니다. 
  이런 구성이 맞을까요??
- Q. IAM 보안을 위해서 사용자에 대한 정책을 직접 연결을 해주어여야하는지 아니면 그룹을 만들어서 필요한 정책별로 그룹을 만들어서 IAM에 그룹을 추가를 해주어야하는지 궁금합니다.
    - A. 사용자가 많아지면 그룹을 만들어서 사용하는게 좋습니다. 담당자가 변할때마다 그룹을 분리하면 좋습니다.
    그룹을 활용하는게 조직에 변화가 많을때 유리해집니다. 
- Q. AWS Inspector를 이용하여 주기적으로 보안 검사를 하는게 맞을까요 아니면 서비스가 추가 될때마다 하는게 맞을까요??
    - A. 보안검사는 주기적으로 하면서 서비스가 추가(이벤트 발생시)할때마다  추가적으로 하는것을 권고합니다.
- Q. 로그 관리, 저장, 분석을 위해서 Cloud Watch 및 Cloud Trail만 사용해도 되는지 궁금합니다.
    - A. 로그관리경우 AWS내부에 있는 ELK 스택을 쓰는것을 추천한다. 시각화를 해서 편하게 사용가능하기 때문이다.
        - [aws elk](https://aws.amazon.com/ko/elasticsearch-service/the-elk-stack/)
        - [elk getting start](https://aws.amazon.com/ko/elasticsearch-service/getting-started/)
        - [log](http://search-sa-log-solutions.s3-us-east-2.amazonaws.com/logstash/html/Lab_Guide_ABD326.html)
- Q. S3 퍼블릭 엑세스는 무조건 차단해야 합니까?
    - A. 퍼블릭엑세스를 열어야 할때도 있고 차단해야 할때도 있다.
    무조건 차단은 아닙니다. 중요한 백업데이터나 민감한 개인정보를 데이터들을 올리는 경우들도 보았다.
    그럴경우 퍼블릭으로 하면 보안사고가 일어날수 있습니다.
        - [S3관련 문서](https://docs.aws.amazon.com/ko_kr/AmazonS3/latest/dev/storage-inventory.html)
        - [S3관련 문서2](https://docs.aws.amazon.com/ko_kr/AmazonS3/latest/dev/storage-inventory.html)
- Q. 여러 환경에서 사용해야하는 private한 공통 key들은 어디서 관리를 하면 좋을까요?
    - A. Secret Manager를 사용하면 좋습니다.
        - [Secret Manager](https://aws.amazon.com/ko/secrets-manager/)
        - [Secret Manager2](https://docs.aws.amazon.com/ko_kr/secretsmanager/latest/userguide/managing-secrets.html)