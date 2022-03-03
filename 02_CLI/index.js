#!/usr/bin/env node
  
/**
 * 自定义终端命令
 * 1、 #!/usr/bin/env node
 * 2、package.json "bin": { "dwj": "index.js" }
 * 3、npm link
 * 4、dwj 生效
 */
// console.log('hello cli');

const { Command } = require('commander')

const progarm = new Command()

// 查看版本号
progarm.version(require('./package.json').version)
progarm.version(require('./package.json').version, '-v --version')

// 增加自己的 options
progarm.option('-j --dwj', 'a dwj is cli')
progarm.option('-d --dest [type]', 'a destination folder, src/components')

// 解析
progarm.parse(process.argv)

console.log(progarm.opts().dest); // 这里拿到的就是你命令行输入的参数 dwj -d 后面的东西
