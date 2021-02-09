FROM node:15.8.0-alpine3.10

WORKDIR /app

RUN apk add --no-cache build-base gcc bash cmake git

COPY package.json .
RUN yarn install --silent

COPY . .

CMD [ "yarn","start" ]