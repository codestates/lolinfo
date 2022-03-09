const app = require("./index");
const PORT = process.env.SERVERPORT || 4000;
const cors = require("cors");
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "*",
    credentials: true,
  },
});

// users.js
const { addUser, removeUser, getUser, getUsersInRoom } = require("./modules/users");

//소켓 연결 및 이벤트
io.on("connection", (socket) => {
  console.log("소켓 연결 완료");

  // 클라이언트에서 join이벤트를 보냈을 경우에 대해서 처리 `on`
  socket.on("join", ({ name, room, userImg }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room, userImg });
    if (error) return callback(error); // username taken
    // 해당 유저 방에 접속처리
    socket.join(user.room);
    // 관리자(서버)에서 소켓으로 보내는 이벤트
    console.log(`${user.userName}, has joined! ${user.room}`);
    socket.emit("message", {
      userName: "admin",
      message: `${user.userName}, welcome to the room ${user.room}`,
      userImg: user.userImg,
      time: new Date().toTimeString().split(" ")[0],
    });
    // 같은 방에 있는 유저에게 보내는 서버측 전달
    socket.broadcast.to(user.room).emit("message", {
      userName: "admin",
      message: `${user.userName}, has joined!`,
      userImg: user.userImg,
      time: new Date().toTimeString().split(" ")[0],
    });

    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    callback();
    // const error = true;
    // if (error) {
    //   callback({ error: "error" });
    // }
  });
  // 유저가 생성한 이벤트에 대한 처리 `on`
  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);
    // 해당 방으로 메세지를
    console.log(`[sendMessage] ${user.userName}: ${message}, [${new Date().toTimeString().split(" ")[0]}]`);
    io.to(user.room).emit("message", {
      userName: user.userName,
      message: message,
      userImg: user.userImg,
      time: new Date().toTimeString().split(" ")[0],
    });

    // callback();
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);

    if (user) {
      console.log(`${user.userName} has left.`);
      io.to(user.room).emit("message", {
        userName: "Admin",
        message: `${user.userName} has left.`,
        userImg: user.userImg,
        time: new Date().toTimeString().split(" ")[0],
      });

      io.to(user.room).emit("roomData", {
        room: user.room,
        users: getUsersInRoom(user.room),
      });
    }
  });
});

httpServer.listen(PORT, () => {
  console.log("server running port %s", PORT);
});
