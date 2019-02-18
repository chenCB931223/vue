let mongoose = require('mongoose')
let Schema = mongoose.Schema

let user = new Schema({
  title: String,
  content: String,
  date: String,
  like: {
    type: Number,
    default: 0
  },
  comment: {
    type: Array,
    default: []
  }

}, { versionKey: false })

module.exports = mongoose.model('vueBlogs', user)
