const MongooseAdapter = require('moleculer-db-adapter-mongoose')

module.exports = new MongooseAdapter(process.env.MONGO_URI, {
  // user: process.env.DB_USERNAME,
  // pass: process.env.DB_PASSWORD
  keepAlive: true
})
