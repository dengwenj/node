const express = require('express')

// 创建服务器
const app = express()

// use 注册普通的中间件， 什么都会匹配到
app.use((req, res, next) => {
  console.log('中间件1')
  next()
})

app.use((req, res, next) => {
  console.log('中间件3')
  next()
})

app.use((req, res, next) => {
  console.log('中间件3')
  res.end('hello M')
})

app.listen(8000, () => {
  console.log('服务器已启动~')
})