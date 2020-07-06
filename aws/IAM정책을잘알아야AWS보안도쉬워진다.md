https://www.youtube.com/watch?v=iPKaylieTV8&list=WL&index=44&t=0s


### IAM정책을 잘 알아야 AWS보안도 쉬워진다.

## AWS서비스 사용 - 계정생성

- Account Owner ID (Root Account)
    - 구독한 모든 서비스에 대한 접근
    - 과금 정보에 대한 접근
    - 콘솔 및 API 사용
    - 기술 지원 계약 변경
- IAM 사용자, 역할, Federated 사용자
    - 지정된 일부 서비스에 대한 접근
    - 콘솔 및 API 사용
    - 기술지원 요청
- 어플리케이션 위한 임시 보안 자격 증명
    - 지정된 일부 서비스에 대한 접근
    - 콘솔 및 API 사용
    
    
## AWS 서비스 사용 - Console 기반 작업
- 쉽게 시작할 수 있다.
- 반복작업에 적합하지 않다.
- 시간이 오래 걸린다.

## AWS 서비스 사용 - Script 기반 작업
- 반복작업에 적합하다.
- 원하는 항목에 대한 수정이 용잉하다
- 리소스의 준비 상태확인이 어렵다.
- 문제 발생시 복원이 어렵다.

## AWS 서비스 사용 - 프로비저닝 엔진사용
- 자동화 구현에 용이하다.
- 반복작업에 적합하다.
- 에러 발생시 원복이 쉽다.
- 최초 구현이 복잡하다.

## AWS 서비스 사용 - DOM모델 적용
- 코드 기반
- 원하는 형상에 대한 정의
- 초기 코딩의 복잡성

## AWS 서비스 사용 - CDK(Colud Development Kit) 사용

## 결국 중요한건 API

## SigV4를 사용한 API 호출 예제

## Identity & Access Management

## IAM Policy란?
- Policy는 AWS 서비스와 리소스에 대한 인가 기능을 제공합니다.
- Policy를 정의할 때는 어떤 IAM Principal 이 어떤 Condition 에서 AWS의 어떤 Resource에 대해 어떤 Action을 허용 혹은 차단할 것인지를 지정합니다.
- IAM은 사용자가 정의한 Policy를 기반으로 API 요청을 검사/평가 하게되며 최종적으로 허용 혹은 차단을 결정합니다.

## IAM Policy의 종류와 사용 목적
- AWS Organiztions 
    - Service Control Plicies(SCPs)
        - 어카운트 내의 특정 Principal 에 대한 서비스 제어
- Aws Identity and Access Management (IAM)
    - Permission Policies, Permission Boundaries
        - IAM Principal(Users,Roles)에 대한 상세권한 설정 및 사용 가능한 권한 경계
- AWS Security Token Service(Aws STS)
    - Session Policies
        - 역할 전환이나 Federation시 권한을 제어
- Specific Aws services
    - Resource-based Policies
        - 다수 계정 접속이나 서비스로부터의 접근을 제어
- VPC ENdpoints
    - Endpoint policeis
        - VPC EndPoint 에서 서비스로의 접근을 제어

모든 Policy는 동일한 문법을 사용(S3 ACL 예외)

## IAM Policy의 종류와 사용 목적

## IAM Policy의 구조

```
{
  "Statement":[{
    "Efeect":"Allow or Deny",
    "Principal":"principal",
    "Action":"action",
    "Resource":"arn",
    "Condition":{
        "condition":{
            "key":value
        }
      }
  }]
}
```

- Effect - 명시된 정책에 대한 허용 혹은 차단
- Principal - 접근을 허용 혹은 차단하고자 하는 대상
- Action - 허용 혹은 차단하고자 하는 접근 타입
- Resource - 요청의 목적지가 되는 서비스
- Condition - 명시된 조건 유요하다고 판단 될 수 있는 조건

### IAM 권한 할당 원리의 이해

## 권한 할당 원칙#1 - 명시적 Deny, 묵시적 Deny

## 권한 할당 원칙#1 - 명시적 허용

## 권한 할당 예제

- API 요청 : s3:GetObject / 버킷명 : KoreaSummit

- Permission Boundary
```yaml
{ 
    "Version": "2012-10-17",
    "Statement": [
      {
        "Effect": "Allow",
        "Action": [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents"
        ],   
      "Resource": "arn:aws:logs:*:*:*"
    }

  ]
} 
```
- Permission Policy
```yaml
{
    "Version": "2012-10-17",
    "Statement": [
      {
        "Effect": "Allow",
        "Action": [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents",
          "s3:*"
        ],   
      "Resource": "*"
    }

  ] 
}
```

## 적용된 권한 결과


## 권한 할당 예제

- API 요청 : s3:GetObject / 버킷명 : KoreaSummit

- Permission Boundary
```yaml
{ 
    "Version": "2012-10-17",
    "Statement": [
      {
        "Effect": "Allow",
        "Action": [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents"
        ],   
      "Resource": "arn:aws:logs:*:*:*"
    },
    {
      "Effect": "Allow",
      "Action": ["s3:GetObject"],
      "Resource":"arn:aws:s3:::KoreaSummit/*"
    }

  ]
} 
```
- Permission Policy
```yaml
 {
    "Version": "2012-10-17",
    "Statement": [
      {
        "Effect": "Allow",
        "Action": [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents",
          "s3:*"
        ],   
      "Resource": "*"
    }

  ]
} 
```

## 적용된 권한 결과

slacktest