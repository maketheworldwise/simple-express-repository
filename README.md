# simple-express-repository

> Express의 전체적인 흐름을 파악하기 위한 Repository입니다.

## 프로젝트 구성 과정

**기본 설정** :

```shell
npm init -y
npm install express --save
npm start
```

**추가 패키지** :

```shell
# nodemon
npm install -g nodemon
nodemon server.js

# cors
npm install cors --save

# dotenv
npm install dotenv --save

# morgan (log formatting)
npm install morgan --save
```

**TypeScript** :

- `ts-node` : Node.js는 js만 사용하기에 변환 후 실행해야하는 번거로움을 한번에 처리
- `@types/*` : Typescript 전용 패키지 설치

```shell
npm install typescript -g --save
npm install ts-node --save
npm install @types/node --save
npm install @types/express --save
npm install @types/cors --save
npm install @types/morgan --save

tsc --init
```

**TypeOrm** :

```shell
npm install mysql2 --save
npm install typeorm --save

dbmate new create_post_table
dbmate up
# dbmate down
```

**Unit Test** :

- Jest로 하나의 메서드가 잘 동작하는 것은 보장할 수 있지만, 그들이 결합되었을 때도 잘 작동한다는 보장 할 수 없기에 ExpressJS 통합 테스트용 라이브러리인 Supertest를 사용
- `jest.config.js` 추가

```shell
npm install jest --save-dev
npm install babel-jest --save-dev
npm install @babel/core --save-dev
npm install @babel/preset-env --save-dev
npm install @types/jest --save-dev
npm install ts-jest --save-dev
npm install supertest --save-dev
npm install @types/supertest --save-dev

# run test
npm run test
```

## 참고

- [Nodemon](https://www.npmjs.com/package/nodemon)
- [CORS](https://www.npmjs.com/package/cors)
- [dbmate](https://github.com/amacneil/dbmate)
- [NodeJS .gitignore default](https://github.com/github/gitignore/blob/main/Node.gitignore)
- [Express Project Structure](https://blog.logrocket.com/organizing-express-js-project-structure-better-productivity/)
- [Jest Configuration](https://jestjs.io/docs/configuration)
