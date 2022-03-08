const express = require('express')

const app = express()

app.use((req, res, next) => {
  console.log('普通的中间件')
  next()
})

app.get('/info', (req, res, next) => {
  console.log('连续注册中间件00')
  next()
})
// 连续注册中间件
app.get('/info', (req, res, next) => {
  console.log('连续注册中间件01')
  next()
}, (req, res, next) => {
  console.log('连续注册中间件02')
  next()
}, (req, res, next) => {
  console.log('连续注册中间件03')
  next()
}, (req, res, next) => {
  console.log('连续注册中间件04')
  res.end('连续注册中间件')
})

app.listen(8000, () => {
  console.log('启动')
})