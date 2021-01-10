const bodyParser = require("body-parser");
const express = require("express");
const mysql = require("mysql");
const http = require("http");
const socketIo = require("socket.io");
const index = require("./routes/index");

const app = express();

app.use(bodyParser.json());
app.use(index);

const server = http.createServer(app);
const io = socketIo(server);

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
    connection.query("SELECT * from user", (err, rows, fields) =>{
      if (err) {
        throw err;
      } else {
        console.log(JSON.parse(JSON.stringify(rows)));
      }
    });
  }
});

io.on("connection", (socket) => {
  console.log("Client connected");
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
  socket.on("newMessage", (data) => {
    io.emit("message", data);
  });
});

const port = process.env.PORT || 4001;
server.listen(port, () => console.log(`Listening on port ${port}`));
