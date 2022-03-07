const http = require('http')
const url = require('url')
const queryString = require('querystring')

const server = http.createServer((req, res) => {
  console.log(req.url); // /login?username=dwj&password=111
  // if (req.url === '/login') {
  //   res.end('登录')
  // } else if (req.url === '/info') {
  //   res.end('信息展示')
  // } else {
  //   res.end('不要吓输')
  // }
  const { query, pathname } = url.parse(req.url)
  console.log(queryString.parse(query));
  const { username, password } = queryString.parse(query)
  console.log(username, password);
  if (pathname === '/login') {
    console.log('登录')
  }
  res.end('server')
})

server.listen(8000, () => {
  console.log('服务器启动成功')
})
