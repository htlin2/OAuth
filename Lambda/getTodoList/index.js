const mysql = require('mysql');
const { dbEndpoint, dbPort, dbUser, dbPassword, dbDatabase } = require('./config.js');

const pool = mysql.createPool({
  host: dbEndpoint,
  port: dbPort,
  user: dbUser,
  password: dbPassword,
  database: dbDatabase,
});

exports.handler =  (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const { userId } = event;
  const queryStr = `SELECT * FROM todos where users_id = ${userId}`;
  pool.getConnection((error, connection) => {
    connection.query(queryStr, (error, results, fields) => {
      connection.release();
      if (error) {
        callback(error, null);
      } else {
        callback(null, results);
      }
    });
  });
};
