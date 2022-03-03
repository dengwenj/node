const fs = require('fs')
const path = require('path')

const dirname = 'dwj' // 创建文件夹
const dirDwj = path.resolve(dirname)

const dirWw = 'ww'
if (!fs.existsSync(dirWw)) {
  fs.mkdir(dirWw, (err) => {
    console.log(err);
  })
}

// 在 dwj 文件里面创建 10 个 ww01 ~ ww10 文件夹
for (let i = 0; i < 10; i++) {
  const dwjDirWw = path.resolve(dirDwj, 'ww' + ((i + 1) + '').padStart(2, 0))
  const ww = path.resolve(dirWw, 'ww' + ((i + 1) + '').padStart(2, 0))
  if (!fs.existsSync(dwjDirWw)) {
    const file1 = path.resolve(dwjDirWw, 'dw' + ((i + 1) + '.txt').padStart(2, 0))
    const file2 = path.resolve(dwjDirWw, 'dw' + ((i + 1) + '.js').padStart(2, 0))
    fs.mkdir(dwjDirWw, (err) => {
      if (!err) {
        fs.writeFileSync(file1, 'dw' + i, { flag: 'a' }, (err) => {
          // console.log(err);
        })
        fs.writeFileSync(file2, 'dw' + i, { flag: 'a' }, (err) => {
          // console.log(err);
        })
        fs.mkdir(ww, (err) => {
          const p = path.resolve(ww, 'dw' + ((i + 1) + '.js').padStart(2, 0))
          if (!err) {
            // cope一份到 ww 里面
            fs.copyFile(file2, p, (file) => {
              console.log(file)
            })
          }
        })
      }
    })
  }
}

// node.js的fs模块只提供了删除文件unlink夹及目录rmdir的功能，所以一起删除需要我们遍历删除
// 删除文件夹和文件夹里面的文件
function getFile(dirname) {
  fs.readdir(dirname, { withFileTypes: true }, (err, files) => {
    files.forEach((item) => {
      if (item.isDirectory()) {
        const filepath = path.resolve(dirname, item.name)
        getFile(filepath, dirname)
      } else {
        // console.log(item.name);
        const deleteFile = path.resolve(dirname, item.name)
        // 删除文件
        fs.unlinkSync(deleteFile)
        // 在删除文件夹
        fs.rmdir(dirname, (err) => {
          console.log(err);
        })
      }
    })
  })
}
// getFile(dirname)