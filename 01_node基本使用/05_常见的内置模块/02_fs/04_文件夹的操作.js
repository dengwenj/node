const fs = require('fs')
const path = require('path')

const dirname = 'dwj'

// 1 新建一个文件夹
// 判断是否有这个路径 有返回 true 没有返回 false
if (!fs.existsSync(dirname)) {
  fs.mkdir(dirname, err => {
    console.log(err)
  })
}

// 2 读取文件夹的内容
// fs.readdir(dirname, (err, files) => {
//   files.forEach((file) => {
//     console.log(file);
//   })
// })

function getFiles(dirname) {
  // withFileTypes 获取到文件的类型
  fs.readdir(dirname, { withFileTypes: true }, (err, files) => {
    files.forEach(file => {
      if (file.isDirectory()) { // 判断是不是文件夹
        const filepath = path.resolve(dirname, file.name)
        getFiles(filepath)
      } else {
        console.log(file.name)
      }
    });
  })
}
getFiles(dirname)

// 3 重命名
fs.rename('dwj.txt', 'ww.txt', err => {
  console.log(err);
})