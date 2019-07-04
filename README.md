# Node Blog API
A CMS that serves blog posts as JSON like a REST API.

## API Endpoints

More details in the docs (TODO)

| URI | Description |
| --- | --- |
| GET /posts | List posts (with search and pagination)
| GET /categories | List categories
| GET /tags | List tags
| GET /taxonomies | List taxonomies
| POST /posts | Create post

TODO: _Will be available soon_

| URI | Description |
| --- | --- |
| PUT /posts/:id | Update post
| DELETE /posts/:id | Delete post
| POST /taxonomies | Create taxonomy (category, tag or custom)
| PUT /taxonomies/:id | Update taxonomy
| DELETE /taxonomies/:id | Delete taxonomy

## CMS

A ReactJS panel to manage your posts:

Run the project, then visit:

```
http://localhost:3001
```

## Setup

### Requirements

* Docker
* Docker compose
* NodeJS
* Yarn

### Run locally

Execute this commands

```shell
git clone https://github.com/microenv/node-blog-api.git
cd node-blog-api
yarn install
cd docker/dev
docker-compose up -d
```

## Make it yours

Informations you need to know to deploy this project in your own environment.

### Main files

* `/src/server/api_server.js`: REST API / webservice
* `/src/admin/admin_panel.js`: Just a GUI that automatically connects to the API and allows you to manage your blog. You can (_of course_) create a mobile app or a website that uses that same API. Do whatever you want, it's your life.

> **NOTE:** If you're creating a React or Vue website/app, you should create your project with SSR feature. The admin panel is created with [https://nextjs.org/](Next), a universal framework to create ReactJS websites (SSR by default).

### Environment Variables

This project needs some environment variables to run properly.

| ENV variable | Default | Description |
| --- | --- | --- |
| NODE_ENV | development | Current environment
| SERVER_PORT | 3000 | Port to expose API
| SERVER_MONGO_URI | mongodb://localhost/database_name | Mongo database URI with database's name
| SERVER_SECRET | devsecret | Secret token. Need to pass as authorization bearer token to post requests (_create posts, etc._)
| ADMIN_PORT | 3001 | Port to expose CMS

## Authentication

Any GET request is public. But every POST, PUT or DELETE is private.

You need to pass the `Authorization` header with `Bearer {SERVER_SECRET}`.

> **IMPORTANT:** For now, this is the only way you can secure this APP. Want to contribute? Send me an email at giovanneafonso@gmail.com and we can talk.
