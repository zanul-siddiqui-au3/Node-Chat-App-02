const express = require("express");
const socket = require("socket.io");
const http = require("http");
const path = require("path");

const publicPath = path.join(__dirname, "../public");

const app = express();
const server = http.createServer(app);
const io = socket(server);

const PORT = process.env.PORT || 3000;

app.use(express.static(publicPath));

io.on("connection", (socket) => {
  socket.on("disconnect", () => {
    console.log(`User is Disconnected`);
  });
});

server.listen(PORT, () => {
  console.log(`Listen on Port ${PORT}`);
});
