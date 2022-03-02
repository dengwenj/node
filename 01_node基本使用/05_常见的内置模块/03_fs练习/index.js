const fs = require('fs')
const path = require('path')

const dirname = 'dwj' // 创建文件夹
const dirDwj = path.resolve(dirname)

// 在 dwj 文件里面创建 10 个 ww01 ~ ww10 文件夹
for (let i = 0; i < 10; i++) {
  const dwjDirWw = path.resolve(dirDwj, 'ww' + ((i + 1) + '').padStart(2, 0))
  // if (!fs.existsSync(dwjDirWw)) {
  //   fs.mkdir(dwjDirWw, (err) => {
  //     if (!err) {
  //       const file = path.resolve(dwjDirWw, 'dw' + ((i + 1) + '.txt').padStart(2, 0))
  //       fs.writeFile(file, 'dw' + i, { flag: 'a' }, (err) => {
  //         console.log(err);
  //       })
  //     }
  //   })
  // }
  // fs.mkdir(dwjDirWw, (err) => {
  //   if (!err) {
  //     const file = path.resolve(dwjDirWw, 'dw' + ((i + 1) + '').padStart(2, 0))
  //     fs.writeFile(file, 'dw' + i, { flag: 'a' }, (err) => {
  //       console.log(err);
  //     })
  //   }
  // })
  fs.rmdir(dwjDirWw, (err) => {
    console.log(err);
  })
}
// node.js的fs模块只提供了删除文件unlink夹及目录rmdir的功能，所以一起删除需要我们遍历删除
