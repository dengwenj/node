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

const arr = [1, 2, 3, 4]
// 会修改原数组
console.log(arr.splice(0, arr.length - 1)); // [ 1, 2, 3 ]
console.log(arr); // [ 4 ]

const arr1 = ['a', 'b', 'c']
// 不会修改原数组
console.log(arr1.slice(0, arr1.length - 1)); // [ 'a', 'b' ]
console.log(arr1); // [ 'a', 'b', 'c' ]
