const EventEmitter = require('events')

// 创建发射器
const emitter = new EventEmitter()

// 监听一个事件
emitter.once('dwj', (...args) => {
  console.log('d', args);
})

const listener2 = (...args) => {
  console.log('w', args);
}
emitter.on('dwj', listener2)

// 最前面监听
emitter.prependListener('dwj', (...args) => {
  console.log('最前面监听', args);
})

emitter.on('ww', (...args) => {
  console.log('ww', args);
})

setTimeout(() => {
  // 移除所有的
  // emitter.removeAllListeners('dwj')
  // 发出一个事件
  emitter.emit('dwj', 'ww', 'jj')
  // 关闭一个事件
  emitter.off('dwj', listener2)
  emitter.emit('dwj', 'ww', 'jj')
  emitter.emit('ww', 'ggg')
}, 2000);
