const http = require('http')
const url = require('url')
const qs = require('querystring')

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    // 获取 body 里面的数据
    req.setEncoding('utf-8')
    req.on('data', (data) => {
      const { username, password } = JSON.parse(data)
      console.log(username, password)
    })

    res.end('post请求')
    return
  }

  const { pathname, query } = url.parse(req.url)
  if (pathname === '/login') {
    console.log(query)
    const { username, password } = qs.parse(query)
    console.log(username, password)
    res.end('post请求')
  }
  
})

server.listen(8000, () => {
  console.log('服务器启动成功~')
})
