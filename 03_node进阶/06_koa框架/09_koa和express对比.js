const Koa = require('koa')

const app = new Koa()

// 同步
// next 是递归的
// next() 返回值是 promise
// const middleware1 = (ctx, next) => {
//   ctx.name = 'd'
//   next()
//   ctx.body = ctx.name // dw
// }
// const middleware2 = (ctx, next) => {
//   ctx.name += 'w'
//   next()
// }
// const middleware3 = (ctx, next) => {
//   ctx.name += 'j'
// }

const middleware1 = async (ctx, next) => {
  ctx.name = 'd'
  await next() // 下面的代码就相当于 ctx 全是更新过的
  ctx.body = ctx.name // dwj
}
const middleware2 = async (ctx, next) => {
  ctx.name += 'w'
  await next()
}
const middleware3 = (ctx, next) => {
  process.nextTick(() => {
    ctx.name += 'j'
  })
}

app.use(middleware1)
app.use(middleware2)
app.use(middleware3)

app.listen(8000, () => {
  console.log('启动')
})
