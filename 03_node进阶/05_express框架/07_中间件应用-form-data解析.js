const express = require('express')
const multer = require('multer')

const app = express()

const upload = multer()

// form-data 解析
app.use(upload.any())

app.post('/login', (req, res) => {
  console.log(req.body) // { username: 'dwj', password: '123' }
  res.end('login')
})

app.listen(8000, () => {
  console.log('启动')
})