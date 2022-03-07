const fs = require('fs')

// 传统的写法 吧这个读取了放在其他文件中
// fs.readFile('./foy.txt', (err, data) => {
//   fs.writeFile('./foz.txt', data, (err) => {
//     console.log(err)
//   })
// })

// Stream 的方式
const reader = fs.createReadStream('./bar.txt')
const writer = fs.createWriteStream('./fod.txt')

// reader.on('data', (data) => {
//   writer.write(data, (err) => {
//     console.log(err);
//   })
// })

reader.pipe(writer)
// writer.close()