const { promisify } = require('util')
const download = promisify(require('download-git-repo'))

const { reactRepo } = require('../config/repo-config')

const createProjectAction = async (project, other) => {
  // clone 项目
  await download(reactRepo, project, { clone: true })
  // npm i
  // npm start
  // 打开浏览器
}
 
module.exports = {
  createProjectAction
}


// 高阶函数（函数柯里化）promiseify 手写实现
// const promisify = (fn) => {
//   return (...args) => {
//     return new Promise((resolve, reject) => {
//       fn(...args, (err, data) => {
//         if (err) reject(err)
//         resolve(data)
//       })
//     })
//   }
// }

// const do1 = promisify((a, b, c, call) => {
//   console.log(a, b, c);
//   call(null, a + b + c)
// })

// do1(1, 2, 3).then((res) => {
//   console.log(res, 'res')
// })
