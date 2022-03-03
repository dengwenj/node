#!/usr/bin/env node
  
/**
 * 自定义终端命令
 * 1、 #!/usr/bin/env node
 * 2、package.json "bin": { "dwj": "index.js" }
 * 3、npm link
 * 4、dwj 生效
 */
// console.log('hello cli');

const progarm = require('commander')

// 查看版本号
progarm.version(require('./package.json').version)
progarm.version(require('./package.json').version, '-v, --version')

progarm.parse(process.argv)
 