const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req.method)
  console.log(req.url)
  console.log(req.headers)
  res.end('post请求')
})

server.listen(8000, () => {
  console.log('服务器启动成功~')
})
