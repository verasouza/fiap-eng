FROM node:current-alpine3.21

WORKDIR /usr/src/app

#copiar arquivos packages
COPY package*.json ./

#install dependacies
RUN npm install

COPY . .

EXPOSE 8089

CMD [ "npm", "start" ]