# 📝 RMSoft 채용과제 : Docker를 활용하여 서버 제작하기

<br>

## 1. 작업 기간 : 📅 2022.12.13 ~ 2022.12.16 📅

<br>

## 2. 사용 Tech & Skill

- **Node.js**

  - 백엔드 런타임 엔진 도구로 사용

  - Express 프레임워크로 구성

  - npm으로 패키지 관리

  - VSCode로 프로젝트 관리 & 배포

- **MySQL**

  - MySQL으로 동적 쿼리 작성

  - Docker에서 mysql 이미지 설치후 외부 도구 Datagrip과 연동시켜서 쿼리 작업

  - node와는 pool을 통해서 connection

- **Docker**

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

- **Data req, res 로직**

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

<br>

## 7. 프로젝트 API CRUD 테스트 & 결과 명세서

> https://docs.google.com/spreadsheets/d/1geGhbjWTtfBrDfNDSNyYeo_EYXHJA1mc/edit?usp=sharing&ouid=103635671036342373717&rtpof=true&sd=true

<br>

## 8. 과제 후 소감

### 🐳Docker를 처음으로 프로젝트에 사용해볼 수 있던 소중한 경험😀

과제나 프로젝트 임무를 부여받을 수록 역량과 경험이 쌓여간다는 점에 있어서 행복하다.
특히, 그 중에서 Docker는 여러 애플리케이션을 한 번에 배포가 가능하다는 점에서 메리트가 있다고 한 적이 있었으나
프로젝트에 도입해본 경험이 없었다. 하지만 이번 과제를 계기로 사용을 할 수 있었던 것 같다.

> Docker를 공부하면서 블로그에 기록함 : https://velog.io/@ryu0114/%EB%8F%84%EC%BB%A4Docker%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80

그러나, 맨 처음에 API를 설계 구현하고 docker로 배포하려고 순서를 정했던 것 때문인 지, node 이미지를 빌드하고 한 번에 다 배포하려는
과정에서 실패해서 그런 점이 아쉬웠다. docker를 처음부터 공부했었으면 처음 프로젝트를 만들 때 디렉토리 구조를 현재 프로젝트처럼
구성하지 않았을 것이다. 따라서, 이번 과제를 통해 교훈을 얻었으므로 docker를 도입할 때는 디렉토리 설계부터 다시 설계할 것이다.

<br>

## 9. 참고 블로그 & 자료들

https://about-tech.tistory.com/entry/Docker-Docker-Compose-%EC%82%AC%EC%9A%A9%EB%B2%95-%EB%8F%84%EC%BB%A4-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC-%EA%B5%AC%EC%84%B1

https://loy124.tistory.com/360

https://millo-l.github.io/docker-compose-nodejs-mysql-%EC%8B%A4%ED%96%89-%EC%88%9C%EC%84%9C-%EB%8F%99%EA%B8%B0%ED%99%94/

https://velog.io/@willneedme/docker-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B02-with-docker-compose-nodejs-nginx

https://meetup.toast.com/posts/277

https://growupcoding.tistory.com/42
