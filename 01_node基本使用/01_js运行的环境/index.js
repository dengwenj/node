function foo(n1, n2) {
  return n1 + n2
}

console.log(foo(1, 2))
console.log(foo(3, 4))

setTimeout(() => {
  console.log('定时器');
}, 2000);

// 在 node 中运行 js 和在 浏览器中运行 js
