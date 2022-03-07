const app = require("./index");
const http = require("http");
const PORT = process.env.PORT || 80;
const server = http.createServer(app);

server.listen(PORT, console.log("server running port %s", PORT));
