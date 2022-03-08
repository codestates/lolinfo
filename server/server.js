const app = require("./index");
const PORT = 4000;
const httpServer = require("http").Server(app);

httpServer.listen(PORT, () => {
  console.log("server running port %s", PORT);
});
