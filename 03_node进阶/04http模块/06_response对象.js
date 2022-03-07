const http = require('http')

const server = http.createServer((req, res) => {
  // 设置状态码
  // 1 直接赋值
  // res.statusCode = 400
  // 2 和 head 一起设置
  // res.writeHead(404)

  // 设置响应头
  // 1 
  // res.setHeader("Content-Type", "text/plain;charset=utf8")
  res.writeHead(200, {
    "Content-Type": "text/html;charset=utf8"
  })

  // 响应结果
  // res.write('server')
  // res.end('server1')
  res.end('<h2>你好啊</h2>')
})

server.listen(8000, () => {
  console.log('服务器启动成功~');
})