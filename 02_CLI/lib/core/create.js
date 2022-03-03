const { Command } = require('commander')

const { createProjectAction } = require('./actions')

const progarm = new Command()

const createCommands = () => {
  progarm
    .command('create <project> <other...>')
    .description('创建项目')
    .action(createProjectAction)
}

module.exports = createCommands
