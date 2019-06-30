FROM node:alpine as builder
RUN apk --no-cache add ca-certificates
WORKDIR /app
COPY ./package.json .
RUN yarn install

FROM node:alpine
RUN apk --no-cache add ca-certificates
WORKDIR /app
COPY --from=builder /app .
# CMD ["yarn run serve"]
