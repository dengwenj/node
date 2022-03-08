const express = require('express')

// app 是一个函数,函数也是对象
const app = express()

app.get('/', (req, res, next) => {
  res.end('hello express')
})

app.post('/', (req, res) => {
  res.end('hello express post')
})

app.post('/submit', (req, res) => {
  res.end('hello submit')
})

app.listen(8000, () => {
  console.log('服务器已启动~')
})
