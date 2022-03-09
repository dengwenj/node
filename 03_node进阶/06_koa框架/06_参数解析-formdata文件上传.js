const Koa = require('koa')
const Router = require('koa-router')
const multer = require('koa-multer')

const app = new Koa()
const router = new Router({ prefix: '/upload' })

// const upload = multer({
//   dest: './upload/'
// })

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './upload/')
  },
  filename(req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({
  storage
})

router.post('/', upload.fields([{ name: 'avatar' }, { name: 'file' }]), (ctx, next) => {
  // console.log(ctx.req.files)
  ctx.response.body = '上传成功'
})

app.use(router.routes())


app.listen(8000, () => {
  console.log('服务器启动成功')
})
