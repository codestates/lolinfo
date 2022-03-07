require("dotenv").config();
const fs = require("fs");
const cors = require("cors");
// const cookieParser = require("cookie-parser");

const express = require("express");
const app = express();
const morgan = require("morgan");

const usersRouter = require("./routes/users");
const gamesRouter = require("./routes/games");

app.use(express.json());
// app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost"],
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"],
  }),
);
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello, yeyeye");
});

// router
app.use("/users", usersRouter);
app.use("/games", gamesRouter);
app.use("/chats", () => console.log(1));

//Socket.io section
const http = require("http").createServer(app);
const PORT = 80;
const ioPORT = 8080;
const io = require("socket.io")(ioPORT, {
  cors: {
    origin: "http://localhost:3000",
  },
});
io.on("connection", (socket) => {
  console.log("new client connected");
  socket.emit("connection", null); //악수
  socket.on("need ID", () => {
    console.log("Hi! ", socket.id);
    socket.emit("my ID", socket.id);
  });
  socket.on("messageCTS", (message) => {
    console.log(socket.id);
    socket.broadcast.emit("messageSTC", { message, id: socket.id, time: Date.now() });
  });
  socket.on("disconnect", () => {
    console.log("disconnect");
  });
});
const server = http.listen(PORT, () => {
  console.log("server running port %s", PORT);
});

module.exports = server;
