const { promisify } = require('util')

const download = promisify(require('download-git-repo'))
const open = require('open')

const { reactRepo } = require('../config/repo')
const { commandSpawn } = require('../utils/terminal')

const createProjectAction = async (project, other) => {
  // clone 项目
  await download(reactRepo, project, { clone: true })
  // npm i
  const command = process.platform === 'win32' ? 'npm.cmd' : 'npm'
  await commandSpawn(command, ['install'], { cwd: `./${project}` })
  // npm start
  commandSpawn(command, ['run', 'start'], { cwd: `./${project}` })
  // 打开浏览器
  open('http://localhost:3000/')
}

const createAddComponentAction = (name, dest) => {
  console.log(name, dest)
}
 
module.exports = {
  createProjectAction,
  createAddComponentAction
}
