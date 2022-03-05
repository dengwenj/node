const { promisify } = require('util')

const download = promisify(require('download-git-repo'))
const open = require('open')

const { reactRepo } = require('../config/repo')
const { commandSpawn } = require('../utils/terminal')
const { compile } = require('../utils/compile')
 
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

const addComponentAction = async (name) => {
  // 编译 ejs 模板 result
  const res = await compile('component.react.ejs', { name })
  console.log(res);
  // 将 result 写入到 .jsx 或者 .vue 文件中
  // 放到对应的文件夹中
}

module.exports = {
  createProjectAction,
  addComponentAction
}
