'use strict'

const DbService = require('moleculer-db')
const dbadapter = require('../dbadapter')
const Post = require('../models/Post')
const broker = require('../broker')

broker.createService({
  name: 'posts',
  version: 1,
  mixins: [DbService],
  adapter: dbadapter,
  model: Post
})
