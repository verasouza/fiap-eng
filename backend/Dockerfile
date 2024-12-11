FROM node:current-alpine3.21

WORKDIR /usr/src/app/backend

COPY . .

#install dependacies
RUN npm install

EXPOSE 8089

CMD [ "npm", "start" ]