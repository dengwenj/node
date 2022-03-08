const path = require('path')

const express = require('express')
const multer = require('multer')

const app = express()

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './upload/')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({
  // dest: './upload/'
  storage
})

// form-data 解析
app.post('/login', upload.any(), (req, res) => {
  console.log(req.body) // { username: 'dwj', password: '123' }
  res.end('login')
})

// 文件上传
// upload.single 一张
// 传多张 key 一样 upload.array('file')，key 不一样 upload.fields([{ name: 'file', maxCount: 1 }, { name: 'hh', maxCount: 1 }])
app.post('/upload', upload.fields([{ name: 'file', maxCount: 1 }, { name: 'hh', maxCount: 1 }]), (req, res) => {
  console.log(req.files);
  res.end('文件上传成功')
})

app.listen(8000, () => {
  console.log('启动')
})