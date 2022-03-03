console.log('HELLO NPM');

const path = require('path')

const pathname1 = '/hh/jj'
const pathname2 = '../xx/ww'
console.log(path.resolve(pathname1, pathname2)); // /hh/xx/ww
