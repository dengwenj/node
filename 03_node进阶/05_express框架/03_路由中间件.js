const express = require('express')

const app = express()

// 路由匹配中间件
app.use('/info', (req, res, next) => {
  console.log('路由01')
  next()
})

app.use((req, res, next) => {
  console.log('普通01')
  next()
})

app.use('/info', (req, res, next) => {
  console.log('路由02')
  next()
})

app.use((req, res, next) => {
  console.log('普通02')
})

app.listen(8000, () => {
  console.log('启动~')
})