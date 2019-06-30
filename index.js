let { ServiceBroker } = require('moleculer')
let ApiService = require('moleculer-web')

let broker = new ServiceBroker({ logger: console })

broker.createService({
  mixins: [ApiService],
  settings: {
    routes: [{
      aliases: {
        // public routes

        'GET posts': 'posts.list',
        'GET posts/:id': 'posts.findOne',
        'GET categories': 'categories.list',
        'GET tags': 'tags.list',
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
