const fs = require('fs')
const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url)
  if (pathname === '/upload') {
    if (req.method === 'POST') {
      const writer = fs.createWriteStream('./foo.png', { flags: 'a+' })
      req.on('data', (data) => {
        console.log(data)
        // 这样做是错误的，因为字节流包含的信息很多 不止只有图片这个信息，还要其他的，都写到里面去了多了一些数据就不一样了
        writer.write(data, (err) => {
          console.log('写入成功')
        })
      })
      req.on('end', () => {
        console.log('end')
        res.end('已上传')
      })
    }
  }
})

server.listen(8000, () => {
  console.log('服务器启动成功~')
})