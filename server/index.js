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

const PORT = 80;
server = app.listen(PORT, () => {
  console.log("server running port %s", PORT);
});

module.exports = server;
