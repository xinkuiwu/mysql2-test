const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'wu',
  database: 'practice'
})

connection.query(
  'SELECT * FROM customers WHERE name LIKE ?',
  ['李%'],
  function (err, result, fields) {
    console.log(result)
    console.log(fields.map(item =>item.name))
  }
)

// connection.execute(
//   'INSERT INTO customers (name) VALUES (?)',
//   ['五'],
//   (err, results, fields) => {
//     console.log(err)
//   }
// )

// connection.execute(
//   'UPDATE customers SET name="wu" where name="五"',
//   err => {
//     console.log(err)
//   }
// )

connection.execute('DELETE  FROM customers where name=?',
  ['wu'],
  (err) => {
    console.log(err);
  });