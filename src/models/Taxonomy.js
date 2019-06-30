'use strict'

const mongoose = require('mongoose')

module.exports = mongoose.model('Taxonomy', {
  parent_slug: String,
  slug: { type: String, required: true },
  type: { type: String, required: true },
  title: { type: String, required: true },
  excerpt: { type: String, required: true }
})
