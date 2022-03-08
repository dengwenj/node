const express = require('express')

const app = express()

app.get('/home', (req, res, next) => {
  // 设置状态码
  res.status(201)
  // res.end('响应数据的方式')
  // 返回 json 数据
  res.json({ name: 'dengwj', age: 22 })
})

app.listen(8000, () => {
  console.log('成功')
})
