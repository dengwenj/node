const mysql = require('mysql2')

const password = require('./password')

// 创建连接池
const connections = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password,
  database: 'dwj',
  // 最多有 10 个
  connectionLimit: 10
})

const statement = `
  SELECT * FROM products WHERE price > ? && score > ?;
`

connections.execute(statement, [6000, 7], (err, result) => {
  console.log(result)
})
