/**
 * 在执行任何一个宏任务之前（不是队列，是一个宏任务），都会先查看微任务队列中是否有任务需要执行
 * 
 * 在队列里面都有东西的情况下优先执行微任务，等微任务队列里面所有的东西都执行完，
 * 才执行宏任务队列，在执行完一个宏任务，不会执行下一个宏任务，会再去判断下在执行
 * 这个宏任务的过程中，有没有往微任务队列中加入东西，加入了就又要执行微任务，
 * 只有微任务为空才会执行宏任务
 */

setTimeout(function () {
  console.log("set1");
  new Promise(function (resolve) {
    resolve();
  }).then(function () {
    new Promise(function (resolve) {
      resolve();
    }).then(function () {
      console.log("then4");
    });
    console.log("then2");
  });
});

new Promise(function (resolve) {
  console.log("pr1");
  resolve();
}).then(function () {
  console.log("then1");
});

setTimeout(function () {
  console.log("set2");
});

console.log(2);

queueMicrotask(() => {
  console.log("queueMicrotask1")
});

new Promise(function (resolve) {
  resolve();
}).then(function () {
  console.log("then3");
});

// pr1
// 2
// then1
// queuemicrotask1
// then3
// set1
// then2
// then4
// set2
