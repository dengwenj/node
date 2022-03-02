const fs = require('fs')

// 读取文件的信息
const filename = './dwj.txt'

// 1 同步操作
// const info = fs.statSync(filename)
// console.log(info)
// console.log('statSync 我是同步的')

// 2 异步操作 回调函数
// fs.stat(filename, (err, info) => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log(info);
// })
// console.log('我是异步的');

// 3 异步操作 promise
fs.promises.stat(filename).then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
})
console.log('我是异步的');