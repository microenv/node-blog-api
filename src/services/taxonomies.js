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
  model: Taxonomy
})
