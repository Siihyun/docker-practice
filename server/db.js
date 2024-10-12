const mysql = require("mysql");

const db = mysql.createPool({
  host: "mysql-db",
  connectionLimit: 10,
  user: "root",
  password: "password",
  database: "myapp",
  port: 3306,
});

module.exports = db;
