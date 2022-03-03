const arr = [1, 2, 3, 4]
// 会修改原数组
console.log(arr.splice(0, arr.length - 1)); // [ 1, 2, 3 ]
console.log(arr); // [ 4 ]

const arr1 = ['a', 'b', 'c']
// 不会修改原数组
console.log(arr1.slice(0, arr1.length - 1)); // [ 'a', 'b' ]
console.log(arr1); // [ 'a', 'b', 'c' ]