const express = require('express')

const app = express()

// 中间件应用
// app.use((req, res, next) => {
//   if (req.headers['content-type'] === 'application/json') {
//     req.on('data', (data) => {
//       const obj = JSON.parse(data.toString())
//       req.body = obj
//     })
//     req.on('end', () => {
//       next()
//     })
//     return
//   }
//   next()
// })

app.use(express.json())
// extended true : express 依赖的 qs 库
// extended false : 就是 node 里面的 querystring 模块
app.use(express.urlencoded({ extended: true }))

app.post('/login', (req, res, next) => {
  console.log(req.body, '111')
  res.end('login')
})

app.post('/user', (req, res, next) => {
  console.log(req.body) // { hhh: '2111' }
  // req.on('data', (data) => {
  //   console.log(data.toString()); // hhh=2111
  // })
  res.end('user')
})

app.listen(8000, () => {
  console.log('启动');
})