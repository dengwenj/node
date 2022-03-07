const http = require('http')

// http.get('http://localhost:8001', (res) => {
//   res.setEncoding('utf-8')
//   res.on('data', (data) => {
//     console.log(data)
//   })
//   res.on('end', () => {
//     console.log('结束');
//   })
// })

const req = http.request({
  method: 'POST',
  hostname: 'localhost',
  port: 8001
}, (res) => {
   res.on('data', (data) => {
    console.log(data)
  })
  res.on('end', () => {
    console.log('结束');
  })
})

req.end()