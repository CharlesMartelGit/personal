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

let interval;

io.on("connection", (socket) => {
  console.log("Client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
  socket.on("newMessage", (data) => {
    socket.emit("message", data);
  });
});

const getApiAndEmit = socket => {
  socket.emit("FromAPI", "b");
};

const port = process.env.PORT || 4001;
server.listen(port, () => console.log(`Listening on port ${port}`));
