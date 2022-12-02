const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '99143029',
  database: 'chunha',
});

module.exports = db;
