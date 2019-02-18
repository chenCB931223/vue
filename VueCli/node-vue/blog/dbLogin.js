let mongoose = require('mongoose')
let Schema = mongoose.Schema

let user = new Schema({
  name: String,
  password: String
}, { versionKey: false })

module.exports = mongoose.model('vueLogin', user)
