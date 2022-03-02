const path = require('path')

console.log(__dirname) // 获取这个所在的目录路径，/Users/dengwenjie/FE/myCode/node/01_node基本使用/05_常见的内置模块/01_path模块
console.log(__filename); // /Users/dengwenjie/FE/myCode/node/01_node基本使用/05_常见的内置模块/01_path模块/02_path的其他api.js
console.log(path.resolve(__dirname, 'src/page')) // /Users/dengwenjie/FE/myCode/node/01_node基本使用/05_常见的内置模块/01_path模块/src/page

// 获取路径的信息
const filepath = '/user/dwj/hh.js'
console.log(path.dirname(filepath)) // 获取文件的父文件夹  /user/dwj
// console.log(path.basename(filepath)) // 获取文件名 hh.js
// console.log(path.extname(filepath)) // 获取文件扩展名 .js

const basepath = './user/dwj'
const filename = 'gg.js'
const hhName = 'hh'

// 2 join 路径拼接
const filepath1 = path.join(basepath, filename)
console.log(filepath1) // /user/dwj/gg.js  user/dwj/gg.js

// 3 resolve 路径拼接
// resolve 会判断拼接的路径字符串中是否有以 / 或 ./ 或 ../ 开头的路径
const filepath2 = path.resolve(basepath, filename, hhName)
console.log(filepath2) // /gg.js