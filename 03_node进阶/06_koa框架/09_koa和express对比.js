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

// ctx 他们都是同一个 引用一样
const middleware1 = async (ctx, next) => {
  ctx.name = 'd'
  await next() // 下面的代码就相当于 ctx 全是更新过的，有异步要等前面的异步先执行完才拿得到
  ctx.body = ctx.name // dwj
  console.log(2);
}
const middleware2 = async (ctx, next) => {
  ctx.name += 'w'
  await next()
  console.log(1)
}
const middleware3 = (ctx, next) => {
  process.nextTick(() => {
    ctx.name += 'j'
  })
  console.log(0);
}

app.use(middleware1)
app.use(middleware2)
app.use(middleware3)

app.listen(8000, () => {
  console.log('启动')
})

// 类似于这样 洋葱模型
// function bcx() {
//   console.log(3);
// }

// function bar() {
//   bcx()
//   console.log(2);
// }


// function foo() {
//   bar()
//   console.log(1);
// }

// foo()
