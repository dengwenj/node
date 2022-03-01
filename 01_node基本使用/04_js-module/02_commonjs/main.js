/**
 *  node 中实现 commonJs 的本质就是对象的引用赋值
 */

const bar = require('./bar')

// setTimeout(() => {
//   bar.info.age = 18
// }, 2000);

// console.log(bar.info);
// console.log(bar.name);
// console.log(bar.age);

console.log(bar.name);
console.log(bar.age);
console.log(bar.sex);