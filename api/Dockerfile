FROM node:20-alpine

WORKDIR /api-app

COPY package*.json ./

RUN npm install

COPY src src

EXPOSE 3000

CMD [ "node", "src/app.js" ]