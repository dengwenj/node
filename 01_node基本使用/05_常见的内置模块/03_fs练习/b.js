111

const fs = require('fs')
const path = require('path')

const c = path.resolve(__dirname, 'c.js')

fs.copyFile('./a.js', c, (err) => {
  console.log(err);
})