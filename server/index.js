require("dotenv").config();
const fs = require("fs");
const cors = require("cors");
// const cookieParser = require("cookie-parser");

const express = require("express");
const app = express();
const morgan = require("morgan");

const usersRouter = require("./routes/users");
const gamesRouter = require("./routes/games");

// Middlewares
// app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(
  cors({
    origin: ["http://localhost"],
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"],
  }),
);

app.get("/", (req, res) => {
  res.send("Hello, yeyeye");
});

// router
app.use("/users", usersRouter);
app.use("/games", gamesRouter);
app.use("/chats", () => console.log(1));

//Socket.io section

const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: true,
  },
});
const PORT = 80;
// const ioPORT = 8080;
// const io = require("socket.io")(ioPORT, {
//   cors: {
//     origin: "http://localhost:3000",
//   },
// });

server.listen(PORT, () => {
  console.log("server running port %s", PORT);
});
io.on("connection", (client) => {
  console.log("new client connected");
  client.emit("connection", null); //악수
  client.on("need ID", () => {
    console.log("Hi! ", client.id);
    client.emit("my ID", client.id);
  });
  client.on("messageCTS", (message) => {
    // console.log(message);
    client.broadcast.emit("messageSTC", { message, id: client.id, time: Date.now() });
  });
  client.on("disconnect", () => {
    console.log("disconnect");
  });
});

module.exports = server;
