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

        'GET posts': 'posts.list',
        'GET posts/:id': 'posts.findOne',
        'GET categories': 'taxonomies.listCategories',
        'GET tags': 'taxonomies.listTags',
        'GET taxonomies': 'taxonomies.list',

        // protected routes

        'POST posts': 'posts.create',
        'PUT posts/:id': 'posts.updateOne',
        'DELETE posts/:id': 'posts.deleteOne',

        'POST taxonomies': 'taxonomies.create',
        'PUT taxonomies/:id': 'taxonomies.updateOne',
        'DELETE taxonomies/:id': 'taxonomies.deleteOne'
      }
    }]
  }
})

broker.start()
