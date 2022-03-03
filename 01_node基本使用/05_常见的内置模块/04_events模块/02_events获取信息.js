const EventEmitter = require('events')

// 创建发射器
const emitter = new EventEmitter()

// 监听一个事件
emitter.on('dwj', (...args) => {
  console.log('d', args);
})

const listener2 = (...args) => {
  console.log('w', args);
}
emitter.on('dwj', listener2)

setTimeout(() => {
  // 发出一个事件
  emitter.emit('dwj', 'ww', 'jj')
  // 关闭一个事件
  emitter.off('dwj', listener2)
  emitter.emit('dwj', 'ww', 'jj')
}, 2000);

// 获取注册的事件
console.log(emitter.eventNames()); // ['dwj'] 
console.log(emitter.listenerCount('dwj')); // 2
console.log(emitter.listeners('dwj')); // [ [Function (anonymous)], [Function: listener2] ]
