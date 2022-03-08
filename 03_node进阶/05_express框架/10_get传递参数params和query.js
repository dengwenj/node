const express = require('express')

const app = express()

// params
app.get('/home/:id/:name', (req, res, next) => {
  console.log(req.params) // { id: '0000' }  { id: '0000', name: 'dwj' }
  res.end('id')
})

// query
app.get('/home', (req, res, next) => { // ?name=dwj&age=18
  console.log(req.query) // { name: 'dwj', age: '18' }
  res.end('query')
})

app.listen(8000, () => {
  console.log('成功')
})
