/**
 * 用 commentjs 作为导出，esmodule 作为导出，在 node 和 webpack 上是支持的
 * 用 esmodule 作为导出，commonjs 作为导入，是不支持的
 */

const { name } = require('./foo.mjs') // 不支持

console.log(name)