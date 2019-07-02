'use strict'

const mongoose = require('mongoose')

module.exports = mongoose.model('Post', {
  slug: { type: String, required: true },
  title: { type: String, required: true },
  excerpt: String,
  body: { type: String, required: true },
  image: String,
  categories: [String],
  tags: [String],
  custom_fields: [{ name: String, value: String }],
  created_at: { type: Date, default: Date.now }
})
