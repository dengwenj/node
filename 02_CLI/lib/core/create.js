const { program } = require('commander')

const { createProjectAction } = require('./actions')

const createCommands = () => {
  // dwj create demo
  program
    .command('create <project> [other...]')
    .description('创建项目')
    .action(createProjectAction)
}

module.exports = createCommands
