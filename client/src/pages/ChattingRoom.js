import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import socketClient from "socket.io-client";

// import ChattingApp from "./pageComponents/ChattingApp";

// const Container = styled.div`
//   justify-content: center;
//   background-color: ${(props) => props.theme.ChattingBackgroundColor};
// `;
// const Space = styled.div`
//   height: 100px;
//   background-color: ${(props) => props.theme.ChattingBackgroundColor};
// `;
// const Dividedpart = styled.div`
//   display: grid;
//   grid-template-areas:
//     " . chatting chatting chatting chatting user . "
//     " . chatting chatting chatting chatting user . ";
// `;
// const ChattingDiv = styled.div`
//   grid-area: chatting;
//   height: 614px;
// `;
// const UserDiv = styled.div`
//   display: grid;
//   grid-template-columns: repeat(10, minmax(auto, 1fr));
//   grid-template-rows: repeat(10, minmax(auto, 1fr));
//   grid-area: user;
//   background-color: ${(props) => props.theme.recordBgColor};
//   border-top: 2px solid ${(props) => props.theme.ChattingLineColor};
//   border-bottom: 2px solid ${(props) => props.theme.ChattingLineColor};
//   border-right: 2px solid ${(props) => props.theme.ChattingLineColor};
// `;
// const NextHead = styled.header`
//   font-weight: bold;
//   font-size: 1.2rem;
//   grid-row: 1/2;
//   grid-column: 1/11;
//   text-align: center;
//   @media (max-width: 600px) {
//     font-weight: bold;
//     font-size: 0.6rem;
//     grid-row: 1/2;
//     grid-column: 1/11;
//     text-align: center;
//   }
// `;
// const UserList = styled.ul`
//   grid-row: 2/10;
//   grid-column: 2/10;
// `;
// const EachUser = styled.li`
//   display: grid;
//   grid-template-columns: repeat(10, minmax(auto, 1fr));
//   grid-template-rows: repeat(2, minmax(auto, 1fr));
//   grid-row: 2/10;
//   grid-column: 2/10;
// `;
// const EachUserImg = styled.img`
//   grid-row: 1/3;
//   grid-column: 1/3;
//   width: 30px;
//   height: 30px;
//   border-radius: 50%;
//   overflow: hidden;
//   @media (max-width: 600px) {
//     grid-row: 1/3;
//     grid-column: 1/3;
//     width: 20px;
//     height: 20px;
//     border-radius: 50%;
//     overflow: hidden;
//   }
// `;
// const EachUserName = styled.span`
//   grid-row: 1/3;
//   grid-column: 3/10;
//   font-size: 18px;
//   font-weight: 500;
//   @media (max-width: 600px) {
//     grid-row: 1/3;
//     grid-column: 3/10;
//     font-size: 10px;
//     font-weight: 500;
//   }
// `;

function ChattingRoom({ urMsg, handleMyMsg }) {
  const [msgList, setMsgList] = useState([]);
  const [msg, setMsg] = useState({ myMsg: "" });
  const focusInput = useRef(null);
  const SERVER = "http://localhost:8080";
  const socket = socketClient(SERVER);
  socket.on("connection", () => {
    console.log("Im on IO server");
  });
  socket.on("send-message", (msg) => handleMyMsg(msg));
  socket.on("message", (msg) => console.log(msg));

  useEffect(() => {
    setMsg({ ioMsg: urMsg });
  }, [urMsg]);
  useEffect(() => {
    focusInput.current.focus();
  }, [msg]);
  function handleInputMsg(e) {
    setMsg({ myMsg: e.target.value });
  }
  function handleMsgList() {
    if (!msg.myMsg) return;
    setMsgList([...msgList.concat(msg)]);
    handleMyMsg(msg);
    setMsg({ myMsg: "" });
  }
  function handleSendTestMsg() {
    setMsgList([...msgList, { ioMsg: "u ain nth bitch" }]);
  }
  function handleUrMsg() {
    console.log(1);
  }
  function handleMyMsg(msg) {
    console.log(1);
  }
  return (
    <MainContainer>
      <Title>LOLINFO 채팅방</Title>
      <ToolContainer>
        <MsgInput ref={focusInput} value={msg.myMsg || ""} onChange={(e) => handleInputMsg(e)}></MsgInput>
        <MsgButton type="button" value="button" style={{ zIndex: 999 }} onClick={handleMsgList} />
        <button style={{ zIndex: 999 }} onClick={handleSendTestMsg}>
          test
        </button>
      </ToolContainer>
      <UserContainer>people</UserContainer>
      <ChatContainer>
        {msgList.map((x, i) =>
          x.myMsg ? (
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
const Message = styled.div`
  font-size: 50px;
`;
