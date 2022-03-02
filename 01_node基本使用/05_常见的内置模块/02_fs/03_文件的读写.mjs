import { writeFile, readFile } from "fs"

const content = '小哈哈哈'

// 文件写入
writeFile('./dwj.txt', content, { flag: 'a+' }, (err) => {
  console.log(err);
})

// 文件读取
readFile('./dwj.txt', { encoding: 'utf-8' }, (err, content) => {
  console.log(content);
})