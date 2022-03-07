const app = require("./index");
const http = require("http");
const socketIo = require("socket.io");
const PORT = process.env.PORT || 80;
const server = http.createServer(app);
const io = socketIo(server);

//Socket.io section
// const { Socket } = require("socket.io");
let interval;

io.on("connection", (socket) => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});
const getApiAndEmit = (socket) => {
  const response = new Date();
  // Emitting a new message. Will be consumed by the client
  socket.emit("FromAPI", response);
};

server.listen(PORT, console.log("server running port %s", PORT));

// var socket = io.connect("http://localhost:80");
// const server = require("http").createServer();

// const io = require("socket.io")(server);
// io.on("connection", (client) => {
//   client.on("event", (data) => {
//     /* … */
//   });
//   client.on("disconnect", () => {
//     /* … */
//   });
// });
// const chatspace = io.of("/chat");

// io.of("/").on("connection", (socket) => {});
// io.of("/").use((socket, next) => { next() });
// io.of("/").emit("hello");
// chatspace.on("connection", (socket) => {
//   console.log(socket.id);
//   socket.on("delete user", () => {
//     // ...
//   });
// });
