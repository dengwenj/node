const info = {
  name: 'dwj',
  age: 22
}

const name = 'w'
const age = 17

// setTimeout(() => {
//   console.log(info);
// }, 3000);

// exports 默认是一个空对象
exports.info = info
exports.name = name
exports.age = age

// 每一个模块都是 Module 的实例，这个 module 实例就是在 js 文件另外一个特殊的全局对象 module
console.log(module)
// module.exports 和 exports 的关系
// module.exports = exports

// 本质上导出的是 module.exports ！！！！ 只不过他们之间有这种关系而已
// 所以我这里可以这么做，那么 exports 就没有任何意义了!!!
module.exports = {
  name: 'hhhhh',
  age: 11,
  sex: '不知'
}
console.log(module, 'module')
