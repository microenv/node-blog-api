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
  model: Post,
  methods: {
    async seedDB () {
      this.logger.info('Seed posts collection...')

      await this.adapter.insert({
        slug: 'hello-world',
        title: 'Hello World',
        excerpt: 'This post is only a demo to populate DB',
        body: '<h2>It works!</h2>\n<p>Content of the post here</p>',
        image: 'https://placehold.it/300x300?text=Hello'
      })
    }
  },
  afterConnected () {
    return this.adapter.count().then(async count => {
      if (count === 0) {
        await this.seedDB()
      }
    })
  }
})
