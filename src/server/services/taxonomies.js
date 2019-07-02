'use strict'

const DbService = require('moleculer-db')
const dbadapter = require('../dbadapter')
const Taxonomy = require('../models/Taxonomy')
const broker = require('../broker')

broker.createService({
  name: 'taxonomies',
  version: 1,
  mixins: [DbService],
  adapter: dbadapter,
  model: Taxonomy,
  actions: {
    async listCategories () {
      let taxs = await this.adapter.find({ type: 'category' })
      let response = { rows: taxs }
      return response
    },
    async listTags () {
      let taxs = await this.adapter.find({ type: 'tag' })
      let response = { rows: taxs }
      return response
    }
  }
})
