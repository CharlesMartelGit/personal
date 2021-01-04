const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "bugtrackerMySQL123$",
  database: "bugtracker_db",
  port: "3306"
});

connection.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("Connected to MySQL");
  }
});

module.exports = connection;
