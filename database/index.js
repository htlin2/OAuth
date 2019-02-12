const mysql = require('mysql');
const { dbEndpoint, dbPort, dbUser, dbPassword, dbDatabase } = require('../config.js');

const connection = mysql.createConnection({
  host: dbEndpoint,
  port: dbPort,
  user: dbUser,
  password: dbPassword,
  database: dbDatabase,
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

function insertTodoList(userId, enteredItem, callback) {
  const queryStr = `INSERT INTO todos (users_id, todo) VALUES (${userId}, "${enteredItem}")`;
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
  insertTodoList,
};
