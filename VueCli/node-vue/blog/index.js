let express = require('express')
let bodyParser = require('body-parser')
let mongoose = require('mongoose')
let router = require('./router')
let app = express()

var mongodbUrl = 'mongodb://localhost:27017/chen'
mongoose.connect(mongodbUrl, { useNewUrlParser: true }, function (err) {
  if (err) {
    console.error(err)
  } else {
    console.log('连接成功')
  }
})
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(router)

app.listen(9001, function () {
  console.log(new Date() + 'running')
})
