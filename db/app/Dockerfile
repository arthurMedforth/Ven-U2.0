FROM alpine:3.14
RUN apk add --update nodejs npm
WORKDIR /app
COPY ./package* .
COPY ./*.js .
RUN npm install
EXPOSE 8080
ENTRYPOINT [ "npm", "start" ]