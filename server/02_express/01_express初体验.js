const express = require('express')

const app = express()

app.get('/', (req, res, next) => {
  res.end('get')
})

app.post('/login', (req, res, next) => {
  res.end('post')
})

app.listen(8000, () => {
  console.log('express 服务器已开启~')
})
