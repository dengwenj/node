const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/login', (req, res, next) => {
  console.log(req.body) // { username: 'dengwenjie', password: '111' }
  res.end('success')
})

app.post('/pro', (req, res, next) => {
  console.log(req.body)
  res.end('pro')
})

app.listen(8000, () => {
  console.log('服务器已启动~')
})