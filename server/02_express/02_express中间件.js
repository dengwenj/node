const express = require('express')

const app = express()

// next 用于执行下一个中间件函数
/**
 * 中间件函数可以执行以下任务：
 * 1、执行任何代码。
 * 2、对请求和响应对象进行更改。
 * 3、结束请求/响应循环。
 * 4、调用堆栈中的下一个中间件。
 */

// 最普通的中间件 都会执行
app.use((req, res, next) => {
  console.log('01')
  next()
})

app.use((req, res, next) => {
  console.log('02')
  next()
})

app.use((req, res, next) => {
  console.log('03')
  res.end('成功')
})

app.listen(8000, () => {
  console.log('express 服务器已开启~')
})
