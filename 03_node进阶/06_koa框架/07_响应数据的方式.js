const Koa = require('koa')
const koaStatic = require('koa-static')

const app = new Koa()

app.use(koaStatic('路径'))

app.use((ctx, next) => {
  console.log(ctx.query)
  ctx.status = 200
  ctx.body = {
    name: 'dwj',
    age: 22,
    sex: '男'
  }
})

app.listen(8000, () => {
  console.log('服务器已启动')
})
