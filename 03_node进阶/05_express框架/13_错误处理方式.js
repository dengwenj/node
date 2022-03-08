const express = require('express')

const app = express()

app.get('/user', (req, res, next) => {
  if (false) {
    res.end('成功')
  } else {
    next(new Error('user失败'))
  }
})

app.get('/login', (req, res, next) => {
  if (false) {
    res.end('登录成功')
  } else {
    next(new Error('login失败'))
  }
})

app.use((err, req, res, next) => {
  let message = ''
  let status = 404
  switch (err.message) {
    case 'login失败':
      message = 'login失败'
      break
    case 'user失败': 
      message = 'user失败'
      break
    default:
      break
  }
  res.json({
    errCode: status,
    errMessage: message
  })
})

app.listen(8000, () => {
  console.log('成功')
})