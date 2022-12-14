# π RMSoft μ±μ©κ³Όμ  : Dockerλ₯Ό νμ©νμ¬ μλ² μ μνκΈ°

<br>

## 1. μμ κΈ°κ° : π 2022.12.13 ~ 2022.12.16 π

<br>

## 2. μ¬μ© Tech & Skill

- **Node.js**

  - λ°±μλ λ°νμ μμ§ λκ΅¬λ‘ μ¬μ©

  - Express νλ μμν¬λ‘ κ΅¬μ±

  - npmμΌλ‘ ν¨ν€μ§ κ΄λ¦¬

  - VSCodeλ‘ νλ‘μ νΈ κ΄λ¦¬ & λ°°ν¬

- **MySQL**

  - MySQLμΌλ‘ λμ  μΏΌλ¦¬ μμ±

  - Dockerμμ mysql μ΄λ―Έμ§ μ€μΉν μΈλΆ λκ΅¬ Datagripκ³Ό μ°λμμΌμ μΏΌλ¦¬ μμ

  - nodeμλ poolμ ν΅ν΄μ connection

  - rootκ³μ μμ rmsoft_db μμ±νκ³  νμ΄λΈ μμ μ§ν

- **Docker**

  - νλ‘μ νΈ λ°°ν¬

  - MySQL μ€μΉ ν DataGripμΌλ‘ μΈλΆμ μ

  - node μ»¨νμ΄λλ ν¬νΈ μ°λ μ€λ₯λ‘ μΈν΄ μ¬μ©νμ§ λͺ»ν¨

  - `docker-compose`λ‘ μ»΄ν¬μ¦ κ΄λ¦¬

<br>

## 3. νλ‘μ νΈ Structure

```bash
βββ config
β   βββ database.js
β   βββ express.js
β   βββ response.js
β   βββ secret.js
β   βββ winston.js
βββ log
βββ node_modules
βββ src ββ app
β           βββ Buyer
β           β     βββ buyerController.js
β           β     βββ buyerDao.js
β           β     βββ buyerProvider.js
β           β     βββ buyerRoute.js
β           β     βββ buyerService.js
β           βββ Company
β           β     βββ conpmayController.js
β           β     βββ companyDao.js
β           β     βββ companyProvider.js
β           β     βββ companyRoute.js
β           β     βββ companyService.js
β           βββ Product
β                 βββ productController.js
β                 βββ productDao.js
β                 βββ productProvider.js
β                 βββ productRoute.js
β                 βββ productService.js
βββ .dockerignore
βββ .gitignore
βββ docker-compose.yml
βββ Dockerfile
βββ env.mysql
βββ index.js
βββ package-lock.json
βββ package.json
βββ README.md
```

- **Data req, res λ‘μ§**

```bash
> Request(μμ) / Response(λ)  β Router (*Route.js) β Controller (*Controller.js) β Service (CUD) / Provider (R) β DAO (DB)
```

<br>

## 4. λ°μ΄ν°λ² μ΄μ€ λͺ¨λΈ ERD

![RMsoft_ERD_20221210_121630](https://user-images.githubusercontent.com/57697624/208033732-dc714267-9e26-42fb-a788-5796949b11fb.png)

<br>

## 5. Docker Hub Repository μ£Όμ

> mysql image : https://hub.docker.com/repository/docker/seungwanryu/mysql

> node image : https://hub.docker.com/repository/docker/seungwanryu/rmsoft-docker

<br>

## 6. Github, Docker hubμμ νλ‘μ νΈ, μ΄λ―Έμ§ Pull μ΄ν κ΅¬λ μ μ°¨

```bash
$ npm install
$ docker compose up -d
$ nodemon index.js
```

<br>

## 7. νλ‘μ νΈ API CRUD νμ€νΈ & κ²°κ³Ό λͺμΈμ

> https://docs.google.com/spreadsheets/d/1geGhbjWTtfBrDfNDSNyYeo_EYXHJA1mc/edit?usp=sharing&ouid=103635671036342373717&rtpof=true&sd=true

<br>

## 8. κ³Όμ  ν μκ°

### π³Dockerλ₯Ό μ²μμΌλ‘ νλ‘μ νΈμ μ¬μ©ν΄λ³Ό μ μλ μμ€ν κ²½νπ

κ³Όμ λ νλ‘μ νΈ μλ¬΄λ₯Ό λΆμ¬λ°μ μλ‘ μ­λκ³Ό κ²½νμ΄ μμ¬κ°λ€λ μ μ μμ΄μ νλ³΅νλ€.
νΉν, κ·Έ μ€μμ Dockerλ μ¬λ¬ μ νλ¦¬μΌμ΄μμ ν λ²μ λ°°ν¬κ° κ°λ₯νλ€λ μ μμ λ©λ¦¬νΈκ° μλ€κ³  ν μ μ΄ μμμΌλ
νλ‘μ νΈμ λμν΄λ³Έ κ²½νμ΄ μμλ€. νμ§λ§ μ΄λ² κ³Όμ λ₯Ό κ³κΈ°λ‘ μ¬μ©μ ν  μ μμλ κ² κ°λ€.

> Dockerλ₯Ό κ³΅λΆνλ©΄μ λΈλ‘κ·Έμ κΈ°λ‘ν¨ : https://velog.io/@ryu0114/%EB%8F%84%EC%BB%A4Docker%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80

κ·Έλ¬λ, λ§¨ μ²μμ APIλ₯Ό μ€κ³ κ΅¬ννκ³  dockerλ‘ λ°°ν¬νλ €κ³  μμλ₯Ό μ νλ κ² λλ¬ΈμΈ μ§, node μ΄λ―Έμ§λ₯Ό λΉλνκ³  ν λ²μ λ€ λ°°ν¬νλ €λ
κ³Όμ μμ μ€ν¨ν΄μ κ·Έλ° μ μ΄ μμ¬μ λ€. dockerλ₯Ό μ²μλΆν° κ³΅λΆνμμΌλ©΄ μ²μ νλ‘μ νΈλ₯Ό λ§λ€ λ λλ ν λ¦¬ κ΅¬μ‘°λ₯Ό νμ¬ νλ‘μ νΈμ²λΌ
κ΅¬μ±νμ§ μμμ κ²μ΄λ€. λ°λΌμ, μ΄λ² κ³Όμ λ₯Ό ν΅ν΄ κ΅νμ μ»μμΌλ―λ‘ dockerλ₯Ό λμν  λλ λλ ν λ¦¬ μ€κ³λΆν° λ€μ μ€κ³ν  κ²μ΄λ€.

<br>

## 9. μ°Έκ³  λΈλ‘κ·Έ & μλ£λ€

https://about-tech.tistory.com/entry/Docker-Docker-Compose-%EC%82%AC%EC%9A%A9%EB%B2%95-%EB%8F%84%EC%BB%A4-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC-%EA%B5%AC%EC%84%B1

https://loy124.tistory.com/360

https://millo-l.github.io/docker-compose-nodejs-mysql-%EC%8B%A4%ED%96%89-%EC%88%9C%EC%84%9C-%EB%8F%99%EA%B8%B0%ED%99%94/

https://velog.io/@willneedme/docker-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B02-with-docker-compose-nodejs-nginx

https://meetup.toast.com/posts/277

https://growupcoding.tistory.com/42
