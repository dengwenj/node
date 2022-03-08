const http = require('http')
const qs = require('querystring')
const fs = require('fs')

const server = http.createServer((req, res) => {
  let body = ''
  const b = req.headers['content-type'].split(';')[1].split('=')[1]
  req.setEncoding('binary')
  req.on('data', (data) => {
    body += data
  })

  req.on('end', () => {
    const obj = qs.parse(body, '\r\n', ': ')
    const imgPneg = obj['Content-Type']
    const imgPnegLength = imgPneg.length
    const imgPnegIndex = body.indexOf(imgPneg)
    const sub = body.substring(imgPnegLength + imgPnegIndex).replace(/^\s\s*/, '')
    const imgStr = sub.substring(0, sub.indexOf(`--${b}`))
    fs.writeFileSync('./foo.png', imgStr, { encoding: 'binary' })
    res.end('文件上传成功')
  })
})

server.listen(8000, () => {
  console.log('服务器启动成功~');
})

