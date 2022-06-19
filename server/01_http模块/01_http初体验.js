const http = require('http')

// 创建 web 服务器
const server = http.createServer((req, res) => {
  res.end('hello server')
})

// 启动服务器，指定端口号
server.listen(8000, () => {
  console.log('服务器启动成功~')
})
