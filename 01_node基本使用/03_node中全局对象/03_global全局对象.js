console.log(global.process)
console.log(global.Array)
console.log(global) // 等等

var age = 22
console.log(global.age) // undefined 不会放在 global 上，这点和浏览器的 window 对象有区别