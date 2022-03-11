const mysql = require('mysql2')

const password = require('./password')

// 创建数据库连接 
const  connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password,
  database: 'dwj'
})

// 执行 sql 语句 
const statement = `
  SELECT * FROM products WHERE price > ? && score > ?;
`

// connection.query(statement, (err, result, fields) => {
//   console.log(result);
// })

// 预处理语句 会缓存，吧解析、优化、转换，执行一遍 提高性能，防止 sql 注入
connection.execute(statement, [6000, 7], (err, result) => {
  console.log(result)
})
