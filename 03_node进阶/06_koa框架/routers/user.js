const Router = require('koa-router')

const router = new Router({ prefix: '/user' })

router.get('/', (ctx, next) => {
  ctx.response.body = 'get user'
  next()
}, (ctx, next) => {
  console.log('可以')
  next()
})

router.post('/', (ctx, next) => {
  ctx.response.body = 'post user'
})

module.exports = router