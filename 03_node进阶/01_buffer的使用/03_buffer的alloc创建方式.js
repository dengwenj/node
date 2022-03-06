// 用 alloc 创建 buffer
const buffer = Buffer.alloc(8) // 分配内存空间单独塞东西
console.log(buffer) // <Buffer 00 00 00 00 00 00 00 00>

buffer[0] = 0x11 // 在 js 里面用 0x 开头的直接表示的就是16进制 
console.log(buffer) // <Buffer 11 00 00 00 00 00 00 00> 这里显示的时候是 16 进制的形式