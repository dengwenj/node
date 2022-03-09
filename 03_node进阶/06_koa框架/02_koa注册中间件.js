const Koa = require('koa')

const app = new Koa()

// use 注册中间件
app.use((context, next) => {
  if (context.request.url === '/user') {
    if (context.request.method === 'GET') {
      context.response.body = '用户请求' 
    }
  } else {
    context.response.body = 'Hello Koa'
  }
})

// 没有这些方式注册中间件了, 一种功能的封装方式
/**
 * methods 方式：app.get() app.post
 * path 方式： app.use('/user', () => {})
 * 连续注册方式: app.use(() => {}, () => {})
 */

app.listen(8000, () => {
  console.log('服务器启动成功~')
})
