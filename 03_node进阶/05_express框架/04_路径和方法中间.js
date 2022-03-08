const express = require('express')
 
const app = express()

app.use((req, res, next) => {
  console.log('普通中间件')
  next()
})

// 路径和方法中间件匹配
app.get('/info', (req, res, next) => {
  console.log('路径和方法中间件匹配get')
})

app.post('/info', (req, res, next) => {
  console.log('路径和方法中间件匹配post')
})

app.listen(8000, () => {
  console.log('启动~');
})
