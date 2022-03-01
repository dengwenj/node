const info = {
  name: 'dwj',
  age: 22
}

const name = 'w'
const age = 17

setTimeout(() => {
  console.log(info);
}, 3000);

// exports 默认是一个空对象
exports.info = info
exports.name = name
exports.age = age