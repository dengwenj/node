const fs = require('fs')

const writeStream = fs.createWriteStream('./bar.txt', {
  flags: 'a',
  start: 3
})

// 写入
writeStream.write('你好啊', (err) => {
  console.log('写入成功')
})

writeStream.write('嘻嘻', (err) => {
  console.log('写入成功')
})

writeStream.on('open', (err) => {
  console.log('文件打开')
})

// writeStream.close()
writeStream.end('文件写入完')

writeStream.on('finish', () => {
  console.log('文件写完');
})

writeStream.on('close', () => {
  console.log('文件关闭');
})


