const name = '你好'

const buffer = Buffer.from(name)
// const buffer = Buffer.from(name, 'utf16le')
console.log(buffer); // <Buffer e4 bd a0 e5 a5 bd> 中文是3个字节一个字符,utf16le 不是3个字节一个字符是2个 默认 utf8 编码

// 对字节进行解码
console.log(buffer.toString()); // 你好
// console.log(buffer.toString('utf16le')); // 你好

// 怎样的编码就要用怎么的解码 不然会乱码 这里默认是 utf8 编解码，可以 utf16le