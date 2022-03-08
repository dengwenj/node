const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.json(['哈哈', '嘻嘻'])
})

router.get('/:id', (req, res) => {
  res.json(`${req.params.id}信息`)
})

router.post('/', (req, res) => {
  res.json('post')
})

module.exports = router
