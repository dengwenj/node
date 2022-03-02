const path = require('path')

const basePath = '/user/dwj'
const myPath = 'dengwenjie'
const filePath = path.resolve(basePath, myPath) // resolve 函数会拼接起来
console.log(filePath) // /user/dwj/dengwenjie
