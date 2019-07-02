FROM node:alpine as builder
RUN apk --no-cache add ca-certificates
WORKDIR /dependencies
COPY ./package.json .
RUN yarn install

FROM node:alpine
RUN apk --no-cache add ca-certificates
WORKDIR /app

COPY --from=builder /dependencies .
COPY ./src /app/src
COPY ./run.sh /app/run.sh
RUN chmod +x /app/run.sh

ENV NODE_ENV development
ENV SERVER_PORT 3000
ENV SERVER_MONGO_URI mongodb://mongo/node-blog-api
ENV SERVER_SECRET devsecret
ENV ADMIN_PORT 3001

RUN echo "> Dockerfile entrypoint"
ENTRYPOINT ["/app/run.sh"]
