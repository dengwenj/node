const { program } = require('commander')

const { createProjectAction, createAddComponentAction } = require('./actions')

const createCommands = () => {
  // dwj create demo
  program
    .command('create <project> [other...]') // <> 必填 []可填  ...变长参数，是个数组
    .description('创建项目')
    .action(createProjectAction)
  
  // dwj addcomponent hello scr/component
  program
    .command('addcomponent <name> <dest>')
    .description('创建组件, 例如: dwj addcomponent hello scr/component')
    .action(createAddComponentAction)
}

module.exports = createCommands
