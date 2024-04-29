FROM node:18.16.0-alpine3.17
RUN mkdir -p /src
COPY package.json /src/package.json
WORKDIR /src
RUN npm i --only=production --silent
COPY . /src
EXPOSE 3000
CMD npm start