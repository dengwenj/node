const http = require('http')

const server = http.createServer((req, res) => {
  // request 对象中封装了客服端给我们服务器传递过来的所有信息
  console.log(req.url);
  console.log(req.method)
  console.log(req.headers)
  res.end('server')
})

server.listen(8000, () => {
  console.log('服务器启动成功')
})
