const Koa = require('koa')

const app = new Koa()

app.use((context, next) => {
  context.response.body = 'Hello Koa'
})

app.listen(8000, () => {
  console.log('服务器启动成功~')
})
