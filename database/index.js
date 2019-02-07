const mysql = require('mysql');
const { dbPassword } = require('../.env');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: dbPassword,
  database: 'oauth',
});

function getTodoList(userId, callback) {
  const queryStr = `SELECT * FROM todos where users_id = ${userId}`;
  connection.query(queryStr, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
}

module.exports = {
  getTodoList,
}
