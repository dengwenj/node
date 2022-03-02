const fs = require('fs')

// stat 可以读取文件的信息
// 文件描述符来标识和跟踪每个特定的文件，每个打开的文件都分配了一个称为文件描述符的简单的数字标识符
fs.open('./dwj.txt', (err, fd) => {
  console.log(fd) // 数字标识符
  // 文件描述符可用于从文件读取数据、向文件写入数据、或请求关于文件的信息。
  fs.fstat(fd, (err, info) => {
    console.log(info);
  })
})
