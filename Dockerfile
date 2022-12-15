# BaseImage 지정 - FROM
# alpine : 최소 단위의 Linux 버전을 말한다.
FROM node:14-alpine

# DockerImage 안에서 사용할 복사해올 경로
WORKDIR /app

# 프로젝트 파일 복사하기 - npm바이너리로 의존성만 설치
COPY package*.json ./

# npm 설치
RUN npm install

# 도커 이미지 안에 앱의 소스 코드를 넣기 위해 사용
COPY . .

# 3000번 포트로 실행
EXPOSE 3000

# 도커가 실행될 때 실행되는 명령어 정의
CMD [ "node", "index.js" ]

