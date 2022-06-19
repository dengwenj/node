const express = require('express')

const app = express()

app.get('/user/:id/:name', (req, res, next) => {
  console.log(req.params)
  res.end(req.params.name)
})

app.get('/login', (req, res, next) => {
  console.log(req.query)
  res.end(req.query.username)
})

app.listen(8000, () => {
  console.log('服务器已启动~')
})