// 要在 script 标签里面写上 type = 'module' 属性

import dHh, { fName as name, age, sex } from './foo.js'
import * as fooAll from './foo.js'

console.log(dHh)
console.log(name)
console.log(age)

console.log(fooAll.default)
console.log(fooAll.age)
console.log(fooAll.fName)

setTimeout(() => {
  console.log(name) // 变成 ww 了, 这个绑定是实时的
}, 2000);