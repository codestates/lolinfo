const app = require("./index");
const http = require("http");
const server = http.Server(app);
const PORT = 80;
server.listen(PORT, console.log("server running port %s", PORT));

//Socket.io section
// const { Socket } = require("socket.io");
var io = require("socket.io")(server);
io.on("connection", (Socket) => {
  console.log("클라이언트 접속");
});
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
