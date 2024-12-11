FROM node:current-alpine3.21

WORKDIR /usr/src/app/frontend

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]