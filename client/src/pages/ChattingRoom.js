import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import socketClient from "socket.io-client";

function ChattingRoom({ history }) {
  const [msgList, setMsgList] = useState([]);
  const [msgListUser, setMsgListUser] = useState([]);
  const [msgListIdx, setMsgListIdx] = useState([]);
  const [msgCTS, setMsgCTS] = useState("");
  const [msgSTC, setMsgSTC] = useState("");
  const [myID, setMyID] = useState("");
  const focusInput = useRef(null);
  const msgRef = useRef(null);
  const SERVER = "http://localhost:80";
  const [socket, setSocket] = useState(socketClient(SERVER));
  const [connected, setConnected] = useState(false);
  const user = "User_" + String(new Date().getTime()).slice(9);
  useEffect(() => {
    // let socket = socketClient(SERVER);
    const socket = socketClient.connect(SERVER, {
      path: "/chat",
    });
    socket.on("connection", () => {
      console.log("Im on IO server.", socket.id);
      setConnected(true);
    });
    socket.on("msgSTC", (message) => {
      msgList.push(message);
      msgListUser.push("user");
      msgListIdx.push(0);
      setChat([...msgList]);
      setMsgListUser([...msgListUser]);
      setMsgListIdx([...msgListIdx]);
    });

    // socket disconnet onUnmount if exists
    if (socket) return () => socket.disconnect();
  }, []);
  // socket.on("disconnect", () => {
  //   setSocket(socketClient(SERVER));
  // });
  socket.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`);
  });
  socket.on("messageSTC", (msg) => {
    console.log(msg);
    setMsgList([...msgList, msg.message]);
    setMsgListIdx([...msgListIdx, 0]);
  });
  const scrollToBottom = () => {
    msgRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [msgList]);
  useEffect(() => {
    focusInput.current.focus();
  }, []);
  function handleCTS() {
    if (msgCTS === "") return;
    setMsgList([...msgList, msgCTS]);
    setMsgListIdx([...msgListIdx, 1]);
    setMsgCTS("");
  }
  return (
    <MainContainer>
      <Title>LOLINFO 채팅방</Title>
      <ToolContainer>
        <MsgInput ref={focusInput} value={msgCTS} onChange={(e) => setMsgCTS(e.target.value)} onKeyPress={(e) => (e.key === "Enter" ? handleCTS() : null)} />
        <MsgButton type="button" value="button" onClick={() => handleCTS()} />
      </ToolContainer>
      <UserContainer>people</UserContainer>
      <ChatContainer>
        {msgList.map((x, i) =>
          msgListIdx[i] ? (
            <MsgList key={"msg_" + i}>
              <Message className="my">{x}</Message>
            </MsgList>
          ) : (
            <MsgList key={"msg_" + i}>
              <Message className="ur">{x}</Message>
            </MsgList>
          ),
        )}
        <div ref={msgRef} />
      </ChatContainer>
    </MainContainer>
  );
}

export default ChattingRoom;
const MainContainer = styled.div`
  display: grid;
  /* grid-template-areas: */
  /* "title title title title title"
    "chat chat chat chat user"
    "chat chat chat chat user"
    "chat chat chat chat user"
    "chat chat chat chat user"
    "tool tool tool tool tool" */
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 50px repeat(4, 1fr) 50px;
  height: 80vh;
  width: 100vw;
`;
const Title = styled.div`
  grid-column: 1/-1;
  grid-row: 1;
  text-align: center;
  font-size: 40px;
  /* grid-area: title; */
`;
const ChatContainer = styled.ul`
  /* grid-area: chat; */
  grid-column: 1/-2;
  grid-row: 2/6;
  overflow-y: scroll;
`;
const UserContainer = styled.div`
  /* grid-area: user; */
  grid-column: 5/6;
  grid-row: 2/6;
  overflow-y: scroll;
`;
const ToolContainer = styled.div`
  /* grid-area: tool; */
  grid-column: 1/-1;
  grid-row: -1;
  z-index: 999;
`;
const MsgButton = styled.input``;
const MsgInput = styled.input``;
const MsgList = styled.li`
  & .my {
    text-align: right;
  }
  & .ur {
    text-align: left;
  }
`;
const Message = styled.div`
  font-size: 50px;
`;
