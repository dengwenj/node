const message = 'hello'

// 这种方式创建 buffer 不行了，过期了
// const buffer = new Buffer(message)
// console.log(buffer) // <Buffer 68 65 6c 6c 6f>

// 这里一个字符就是一个字节
const buffer = Buffer.from(message)
console.log(buffer); // <Buffer 68 65 6c 6c 6f>