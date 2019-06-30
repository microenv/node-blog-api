'use strict'

const ApiService = require('moleculer-web')
const broker = require('../broker')
const E = ApiService.Errors

broker.createService({
  mixins: [ApiService],
  settings: {
    port: process.env.PORT || 3000,

    cors: {
      origin: '*',
      methods: ['GET', 'OPTIONS', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: []
    },

    routes: [{
      authorization: true,
      aliases: {
        // public routes

        'GET posts': 'v1.posts.list',
        // 'GET posts/:id': 'v1.posts.findOne',
        'GET categories': 'v1.taxonomies.listCategories',
        'GET tags': 'v1.taxonomies.listTags',
        'GET taxonomies': 'v1.taxonomies.list',

        // protected routes

        'POST posts': 'v1.posts.create'
        // 'PUT posts/:id': 'v1.posts.updateOne',
        // 'DELETE posts/:id': 'v1.posts.deleteOne',

        // 'POST taxonomies': 'v1.taxonomies.create',
        // 'PUT taxonomies/:id': 'v1.taxonomies.updateOne',
        // 'DELETE taxonomies/:id': 'v1.taxonomies.deleteOne'
      }
    }]
  },
  methods: {
    /**
     * Temporary authorization method
     * TODO: remove env SECRET and implement real user authentication
     */
    authorize (ctx, route, req, res) {
      if (req.method === 'POST') {
        let auth = req.headers['authorization']
        if (auth && auth.startsWith('Bearer')) {
          let token = auth.slice(7)

          // Check the token
          if (token === process.env.SECRET) {
            // Set the authorized user entity to `ctx.meta`
            ctx.meta.user = { id: 1, name: 'John Doe' }
            return Promise.resolve(ctx)
          } else {
            // Invalid token
            return Promise.reject(new E.UnAuthorizedError(E.ERR_INVALID_TOKEN))
          }
        } else {
          // No token
          return Promise.reject(new E.UnAuthorizedError(E.ERR_NO_TOKEN))
        }
      }
    }
  }
})

broker.start()
