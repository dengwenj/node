const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const multer = require('koa-multer')

const app = new Koa()
const upload = multer()

app.use(bodyParser())
app.use(upload.any())

app.use((ctx, next) => {
  // form-data 里面写法
  console.log(ctx.req.body) // { username: 'dwj', password: '123' }
  // json urlencoded
  console.log(ctx.request.body) // { name: 'dwj', age: 22 }
  ctx.response.body = '参数解析'
})

app.listen(8000, () => {
  console.log('服务器启动成功')
})
