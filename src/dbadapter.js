const MongooseAdapter = require('moleculer-db-adapter-mongoose')

module.exports = new MongooseAdapter('mongodb://localhost/node-blog-api', {
  // user: process.env.DB_USERNAME,
  // pass: process.env.DB_PASSWORD
  keepAlive: true
})
