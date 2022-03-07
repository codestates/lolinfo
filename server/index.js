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

module.exports = app;
