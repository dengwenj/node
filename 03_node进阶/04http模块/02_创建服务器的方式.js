const http = require('http')

const server1 = http.createServer((req, res) => {
  res.end('server1')
})

server1.listen(8000, () => {
  console.log('server1');
})

const server2 = new http.Server((req, res) => {
  res.end('server2')
})

// listen函数有三个参数
// 端口port: 可以不传, 系统会默认分配端, 后续项目中我们会写入到环境变量中
// 主机host: 通常可以传入localhost、ip地址127.0.0.1、或者ip地址0.0.0.0，默认是0.0.0.0；
// 回调函数：服务器启动成功时的回调函数
server2.listen(8001, () => {
  console.log('server2');
})
