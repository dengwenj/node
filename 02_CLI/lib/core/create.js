const { program } = require('commander')

const { createProjectAction } = require('./actions')

const createCommands = () => {
  // dwj create demo
  program
    .command('create <project> [other...]') // <> 必填 []可填  ...变长参数，是个数组
    .description('创建项目')
    .action(createProjectAction)
}

module.exports = createCommands
