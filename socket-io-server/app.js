const express = require("express");
const mysql = require("mysql")
const http = require("http");
const socketIo = require("socket.io");

const port = process.env.PORT || 4001;
const index = require("./routes/index");
const app = express();
app.use(index);

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "bugtrackerMySQL123$",
  database: "bugtracker_db",
  port: "3306"
});

connection.connect((err) => {
  if (err) {
    console.log("Error connecting to MySQL");
  } else {
    console.log("Connected to MySQL");
  }
});

const server = http.createServer(app);
const io = socketIo(server);

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
});

const getApiAndEmit = socket => {
  socket.emit("FromAPI", "b");
};

server.listen(port, () => console.log(`Listening on port ${port}`));
