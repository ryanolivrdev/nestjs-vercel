FROM node:16.18.1-alpine as api

WORKDIR /app

COPY ["package*.json", "./"]
COPY tsconfig.json ./

RUN npm install --legacy-peer-deps

RUN yarn build

COPY . .

EXPOSE 8080

RUN npm i --global @nestjs/cli

CMD [ "npm", "run", "start:dev" ]

FROM postgres AS db

COPY ./src/migrations/init.sql /docker-entrypoint-initdb.d/
