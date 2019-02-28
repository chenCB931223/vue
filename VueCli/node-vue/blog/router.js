let express = require('express')
let Db = require('./db')
let url = require('url')
let DbLogin = require('./dbLogin')
let router = express.Router()

router.get(/^\/blog/, function (req, res) {
  let limit = 3
  let newUrl = url.parse(req.url, true)
  let page = newUrl.query.page || 1
  Db.find().sort({ _id: -1 }).then((doc) => {
    let pages = Math.ceil(doc.length / limit)
    let list = doc.slice(limit * (page - 1), limit * page)
    let data = {
      page: page,
      pages: pages,
      list: list
    }
    res.send(data)
    return doc
  }).catch((err) => {
    console.error(err)
  })
})
router.post('/addUser', function (req, res) {
  let name = req.body.name
  let password = req.body.passWord
  DbLogin.findOne({ name: name }).then((result) => {
    if (!result) {
      let login = new DbLogin({
        name: name,
        password: password
      })
      return login.save()
    }
  }).then((doc) => {
    res.json(doc)
  })
})
router.post('/login', function (req, res) {
  let user = req.body.name
  let password = req.body.password
  DbLogin.findOne({
    name: user,
    password: password
  }).then((result) => {
    res.send(result)
  }).catch((err) => {
    console.error(err)
  })
})
router.post('/publish', function (req, res) {
  let title = req.body.title
  let content = req.body.content
  let date = req.body.date

  Db.find().then(() => {
    let blog = new Db({
      title: title,
      content: content,
      date: date
    })
    return blog.save()
  }).then((docs) => {
    res.json(docs)
  }).catch((err) => {
    console.error(err)
  })
})

router.post('/search',function (req,res) { 
  let title = req.body.search
  let limit = 3
  let newUrl = url.parse(req.url, true)
  console.log(newUrl);
  let page = newUrl.query.page || 1
  Db.find({title:title}).then((docs) => {
    let pages = Math.ceil(docs.length / limit)
    let list = docs.slice(limit * (page - 1), limit * page)
    let data = {
      page: page,
      pages: pages,
      list: list
    }
    console.log(data)
    res.send(data)
    return docs
  }).catch((err) => {
    console.error(err);
  })
 })

module.exports = router
