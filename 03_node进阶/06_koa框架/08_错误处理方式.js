const Koa = require('koa')

const app = new Koa()

app.use((ctx, next) => {
  if (true) {
    ctx.app.emit('error', ctx, new Error('还没有登录'))
  }
})

app.on('error', (ctx, error) => {
  ctx.status = 401
  ctx.body = error.message
})

app.listen(8000, () => {
  console.log('已启动')
})