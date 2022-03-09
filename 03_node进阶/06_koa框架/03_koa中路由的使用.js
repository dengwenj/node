const Koa = require('koa')

const userRouter = require('./routers/user')

const app = new Koa()

app.use((context, next) => {
  context.response.body = 'hello koa'
  next()
})

app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

app.listen(8000, () => {
  console.log('服务器已启动')
})
