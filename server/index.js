require('dotenv').config();
const fs = require('fs');
const cors = require('cors');
// const cookieParser = require("cookie-parser");

const express = require('express');
const app = express();
const morgan = require('morgan')

const controllers = require('./controllers');

app.use(express.json());
// app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
// app.use(
//   cors({
//     origin: ["http://localhost"],
//     credentials: true,
//     methods: ["GET", "POST", "OPTIONS"],
//   })
// );
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello, yeyeye');
});

const PORT = 4000;
server = app.listen(PORT, () => {
  console.log(`server running: ${PORT}`);
});

module.exports = server;
