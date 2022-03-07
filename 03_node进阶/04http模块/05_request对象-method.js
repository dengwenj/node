const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url)

  if (pathname === '/login') {
    if (req.method === 'POST') {
      // 获取 body 中的数据
      req.setEncoding('utf-8')
      req.on('data', (data) => {
        const { username, password } = JSON.parse(data)
        console.log(username, password)
        // console.log(data.toString())
      })
    }
  }
  res.end('server')
})

server.listen(8000, () => {
  console.log('服务器启动成功')
})