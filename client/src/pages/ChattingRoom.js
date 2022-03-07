import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import socketClient from "socket.io-client";
import Message from "./pageComponents/chat/Message";

function ChattingRoom() {
  const [msgList, setMsgList] = useState([]);
  const [msgListIdx, setMsgListIdx] = useState([]);
  const [msgCTS, setMsgCTS] = useState("");
  const [msgSTC, setMsgSTC] = useState("");
  const [myID, setMyID] = useState("");
  const focusInput = useRef(null);
  const SERVER = "http://localhost:8080";
  const socket = socketClient(SERVER);
  useEffect(() => {
    socket.on("connection", () => {
      console.log("Im on IO server.");
    });
    socket.emit("need ID", null);
    socket.on("my ID", (id) => {
      console.log("my ID ", id);
      setMyID(id);
    });
    socket.emit("messageCTS", `hi! I'm ${myID}`); //서버에 메세지 발송
  }, []);

  socket.on("messageSTC", (msg) => console.log(msg));

  useEffect(() => {}, []);
  useEffect(() => {
    focusInput.current.focus();
  }, []);
  function handleInputMsg(e) {}
  function handleMsgList() {}
  function handleSendTestMsg() {}

  return (
    <MainContainer>
      <Title>LOLINFO 채팅방</Title>
      <ToolContainer>
        <MsgInput ref={focusInput} onChange={(e) => setMsgCTS(e.target.value)} />
        <MsgButton type="button" value="button" onClick={handleMsgList} />
        <button style={{ zIndex: 999 }} onClick={handleSendTestMsg}>
          test
        </button>
      </ToolContainer>
      <UserContainer>people</UserContainer>
      <ChatContainer>
        {msgList.map((x, i) =>
          msgListIdx[i] ? (
            <MsgList key={i}>
              <Message className="my">{x.myMsg}</Message>
            </MsgList>
          ) : (
            <MsgList key={i}>
              <Message className="ur">{x.ioMsg}</Message>
            </MsgList>
          ),
        )}
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
// const Message = styled.div`
//   font-size: 50px;
// `;
