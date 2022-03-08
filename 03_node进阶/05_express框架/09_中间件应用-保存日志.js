const fs = require('fs')

const express = require('express')
const morgan = require('morgan')

const writerStream = fs.createWriteStream('./log/all.log', {
  flags: 'a+'
})

const app = express()

app.use(morgan('combined', { stream: writerStream }))

app.get('/info', (req, res) => {
  res.end('日志')
})

app.listen(8000, () => {
  console.log('日志')
})
