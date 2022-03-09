const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router({ prefix: '/user' })

router.get('/:id', (ctx, next) => {
  console.log(ctx.request.query) // { name: 'dengwj', age: '22' }
  console.log(ctx.request.params) // { id: '111' }
  ctx.response.body = '参数解析'
})

app.use((ctx, next) => {
 console.log(ctx.request.query) //  { name: 'dengwj', age: '22' }
 console.log(ctx.request.params) // undefined 没有 koa.use 里面没有 params
 ctx.response.body = 'Hello Koa'
 next()
})

app.use(router.routes())

app.listen(8000, () => {
  console.log('服务器启动成功~')
})
