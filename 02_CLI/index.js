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

// const helpOptions = require('./lib/core/help.js')
// const createCommands = require('./lib/core/create')

const progarm = new Command()

// 查看版本号
progarm.version(require('./package.json').version)

// 增加自己的 options 定义选项, 这个 options 写了，在 --help 里面看的见
progarm.option('-j --dwj <type>', 'a dwj is cli', '默认值1') // dwj -j
progarm.option('-d --dest [type]', 'a destination folder, src/components', '默认值2') // dwj -d src/components
//  默认值直接  dwj 后面不写其他东西 { dwj: '默认值1', dest: '默认值2' }

// 监听命令
progarm.on('option:dest', () => {
  console.log('-d')
})
progarm.on('--help', () => {
  console.log('help')
})

progarm
  .command('create <project> [other...]') // <> 必传 []可传
  .description('创建项目')
  .action((project, other) => {
    console.log(project, other)
  })

// 解析终端命令
progarm.parse(process.argv)
 
console.log(progarm.opts()); // { dest: 'src/components' }
// console.log(progarm.opts().dest); // 这里拿到的就是你命令行输入的参数 dwj -d 后面的东西
