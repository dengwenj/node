const mysql = require('mysql2')

const password = require('./password')

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

connections.promise().execute(statement, [6000, 7]).then(([res, filed]) => {
  console.log(res)
}).catch((err) => {
  console.log(err)
})
