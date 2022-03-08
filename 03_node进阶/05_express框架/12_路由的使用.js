const express = require('express')

const userRouter = require('./routers/user')

const app = express()

app.use('/user', userRouter)

app.listen(8000, () => {
  console.log('成功')
})
