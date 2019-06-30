'use strict'

const ApiService = require('moleculer-web')
const broker = require('../broker')

broker.createService({
  mixins: [ApiService],
  settings: {
    port: process.env.PORT || 3000,
    routes: [{
      aliases: {
        // public routes

        'GET posts': 'v1.posts.list',
        // 'GET posts/:id': 'v1.posts.findOne',
        'GET categories': 'v1.taxonomies.listCategories',
        'GET tags': 'v1.taxonomies.listTags',
        'GET taxonomies': 'v1.taxonomies.list',

        // protected routes

        // 'POST posts': 'v1.posts.create',
        // 'PUT posts/:id': 'v1.posts.updateOne',
        // 'DELETE posts/:id': 'v1.posts.deleteOne',

        // 'POST taxonomies': 'v1.taxonomies.create',
        // 'PUT taxonomies/:id': 'v1.taxonomies.updateOne',
        // 'DELETE taxonomies/:id': 'v1.taxonomies.deleteOne'
      }
    }]
  }
})

broker.start()
