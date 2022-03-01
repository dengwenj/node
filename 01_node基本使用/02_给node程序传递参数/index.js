console.log(process)

process.argv.forEach((item) => {
  console.log(item);
  // /usr/local/bin/node
  // /Users/dengwenjie/FE/myCode/node/01_node基本使用/02_给node程序传递参数/index.js
  // dengwj
})
// node index.js dengwj 这个 dengwj 会传给 process.argv 中是个数组