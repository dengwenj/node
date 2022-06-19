const http = require('http')

const server1 = http.createServer((req, res) => {
  res.end('server1')
})

server1.listen(8000, () => {
  console.log('服务器启动成功~')
})

// new http.Server 本质是 一样的
const server2 = new http.Server((req, res) => {
  res.end('server2')
})

server2.listen(8001, () => {
  console.log('服务器启动成功~~~')
})
