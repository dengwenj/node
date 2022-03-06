const fs = require('fs')

// sharp 库在 node 当中想要处理图片的时候可以使用这个库
const sharp = require('sharp')

// fs.readFile('./dwj.txt', (err, data) => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log(data) // <Buffer e4 bd a0 e5 a5 bd e4 b8 96 e7 95 8c> ,读取的都是二进制的东西
//   console.log(data.toString()) // 你好世界
// })

fs.readFile('./bar.png', (err, data) => {
  fs.writeFile('./bax.png', data, (err) => {
    console.log(err)
  })
})

sharp('./bar.png')
  .resize(300)
  .toFile('./bay.png', (err, info) => {
    console.log(info)
  })