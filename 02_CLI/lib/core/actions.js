const { promisify } = require('util')
const download = promisify(require('download-git-repo'))

const { reactRepo } = require('../config/repo')
const { commandSpawn } = require('../utils/terminal')

const createProjectAction = async (project, other) => {
  // clone 项目
  await download(reactRepo, project, { clone: true })
  // npm i
  await commandSpawn('npm', ['install'], { cwd: `./${project}` })
  // npm start
  // 打开浏览器
}
 
module.exports = {
  createProjectAction
}
