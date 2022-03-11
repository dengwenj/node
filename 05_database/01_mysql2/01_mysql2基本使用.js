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
  SELECT * FROM products;
`

connection.query(statement, (err, result, fields) => {
  console.log(result);
})
