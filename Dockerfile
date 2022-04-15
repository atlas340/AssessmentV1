FROM node:16-alpine

RUN apk add --update
RUN apk add --update ffmpeg


WORKDIR /app

COPY . .

RUN npm install

CMD [ "npm", "run", "start" ]