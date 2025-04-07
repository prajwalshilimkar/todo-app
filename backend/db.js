const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "mysql",
  user: "root",
  password: "root",
  database: "todo_db"
});
connection.connect();
module.exports = connection;
