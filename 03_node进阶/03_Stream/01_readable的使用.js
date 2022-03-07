const fs = require('fs')

// 直接全部读完
// fs.readFile('./foo.txt', { encoding: 'utf-8' }, (err, data) => {
//   console.log(data)
// })

// 通过流的方式读取 一点一点的读
// start：文件读取开始的位置；
// end：文件读取结束的位置；
// highWaterMark：一次性读取字节的长度，默认是64kb；
const readStream = fs.createReadStream('./foo.txt', {
  start: 3,
  end: 7,
  // highWaterMark: 2
})

// 读取数据的过程
readStream.on('data', (data) => {
  console.log(data.toString())
  // 暂停文件
  readStream.pause()
  setTimeout(() => {
    // 恢复
    readStream.resume()
  }, 1000)
})

readStream.on('open', () => {
  console.log('文件以打开')
})

readStream.on('end', () => {
  console.log('文件已读完')
})

readStream.on('close', () => {
  console.log('文件已关闭')
})
