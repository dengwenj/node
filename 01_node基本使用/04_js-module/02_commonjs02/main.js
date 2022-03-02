// 加载过程时同步的！！！！！！！
require('./bar')

console.log('main')

console.log(module);

/**
 * 模块被多次引入时，会缓存，最终值加载运行一次
 *    因为每个模块对象 module 都有一个属性 loaded，为 false 表示没有加载过或者还没有加载完，为 true 表示已经加载过
 */

/**
 * main.js aaa.js bbb.js ccc.js ddd.js eee.js
 * 如果有循环引入，加载顺序是什么
 *    这是一种数据结构：图结构
 *    图结构在遍历的过程中，有深度优先算法和广度优先算法，node 这里就采用的深度优先算法
 */
