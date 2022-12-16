# RMSoft 채용과제 - Docker를 활용하여 서버 제작하기

<br>

## 1. 작업 기간 : 📅 2022.12.13 ~ 2022.12.16 📅

<br>

## 2. 사용 Tech & Skill

- Node.js

  - 백엔드 런타임 엔진 도구로 사용

  - Express 프레임워크로 구성

  - npm으로 패키지 관리

  - VSCode로 프로젝트 관리 & 배포

- MySQL

  - MySQL으로 동적 쿼리 작성

  - Docker에서 mysql 이미지 설치후 외부 도구 Datagrip과 연동시켜서 쿼리 작업

  - node와는 pool을 통해서 connection

- Docker

  - 프로젝트 배포

  - MySQL 설치 후 DataGrip으로 외부접속

  - node 컨테이너는 포트 연동 오류로 인해 사용하지 못함

  - `docker-compose`로 컴포즈 관리

<br>

## 3. 프로젝트 Structure

```bash
├── config
│   ├── database.js
│   ├── express.js
│   ├── response.js
│   ├── secret.js
│   └── winston.js
├── log
├── node_modules
├── src ── app
│           ├── Buyer
│           │     ├── buyerController.js
│           │     ├── buyerDao.js
│           │     ├── buyerProvider.js
│           │     ├── buyerRoute.js
│           │     └── buyerService.js
│           ├── Company
│           │     ├── conpmayController.js
│           │     ├── companyDao.js
│           │     ├── companyProvider.js
│           │     ├── companyRoute.js
│           │     └── companyService.js
│           └── Product
│                 ├── productController.js
│                 ├── productDao.js
│                 ├── productProvider.js
│                 ├── productRoute.js
│                 └── productService.js
├── .dockerignore
├── .gitignore
├── docker-compose.yml
├── Dockerfile
├── env.mysql
├── index.js
├── package-lock.json
├── package.json
└── README.md
```

- Data req, res 로직

```bash
> Request(시작) / Response(끝)  ⇄ Router (*Route.js) ⇄ Controller (*Controller.js) ⇄ Service (CUD) / Provider (R) ⇄ DAO (DB)
```

<br>

## 4. 데이터베이스 모델 ERD

![RMsoft_ERD_20221210_121630](https://user-images.githubusercontent.com/57697624/208033732-dc714267-9e26-42fb-a788-5796949b11fb.png)

<br>

## 5. Docker Hub Repository 주소

> mysql image : https://hub.docker.com/repository/docker/seungwanryu/mysql

> node image : https://hub.docker.com/repository/docker/seungwanryu/rmsoft-docker

<br>

## 6. Github, Docker hub에서 프로젝트, 이미지 Pull 이후 구동 절차

```bash
$ npm install
$ docker compose up -d
$ nodemon index.js
```

## 7. 프로젝트 API CRUD 명세서 & 결과
