setTimeout(() => {
  console.log("setTimeout");
}, 0);

setImmediate(() => {
  console.log("setImmediate");
});

/**
 * setTimeout setImmediate 都有可能先执行
 * setTimeout 放入定时器模块再放入 timer 队列需要消耗时间，初始化事件循环也需要时间
 * 有可能初始化事件循环好了还没有 setTimeout 加入 timer 队列里面，就会先执行 setImmediate
 * check queue 会检测有没有调 setImmediate 有调就会在这个 check queue 阶段执行
 */