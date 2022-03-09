import styled from "styled-components";
import React, { useEffect, useState } from "react";
import ioClient from "socket.io-client";
import ChattingApp from "./pageComponents/ChattingApp";
import Loading from "./Loading";
import { useSelector, useDispatch } from "react-redux";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 87vh;
  padding: 2rem 0.4445rem;
  background-color: ${(props) => props.theme.ChattingBackgroundColor};
`;
const UserDiv = styled.div`
  display: block;
  background-color: ${(props) => props.theme.recordBgColor};
  border: 2px solid ${(props) => props.theme.ChattingLineColor};
  border-left: none;
`;
const UserCounter = styled.h2`
  font-weight: bold;
  padding: 5px;
  font-size: 13pt;
  text-align: center;
`;
const UserList = styled.ul`
  list-style: none;
  padding: 10px;
`;
const User = styled.li`
  margin: 5px 0px;
  display: flex;
`;
const UserImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  @media (max-width: 600px) {
    width: 20px;
    height: 20px;
  }
`;
const UserName = styled.span`
  font-size: 0.9rem;
  margin-left: 5px;
  padding-top: 5px;
`;

let socket;

function ChattingRoom() {
  let userInfo = useSelector(state => state.userInfo);

  let [userList, setUserList] = useState([]);

  let [chatLog, setChatLog] = useState([]);

  useEffect(() => {
    socket = ioClient(process.env.REACT_APP_API_URL);
    const name = userInfo.userName;
    const room = "global";
    const userImg = userInfo.userImg;

    socket.emit("join", { name, room, userImg }, (error) => {
      // console.log("error");
      // 에러 처리
      if (error) {
        alert(error);
      }
    });
  }, [userInfo.userImg, userInfo.userName]);

  useEffect(() => {
    // 서버에서 message 이벤트가 올 경우에 대해서 `on`
    socket.on("message", (message) => {
      setChatLog([...chatLog, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUserList(users);
    });
  }, [chatLog]);

  useEffect(() => {
    console.log("userList: ", userList);
    console.log("chatLog: ", chatLog);
  }, [userList, chatLog]);

  const handleSubmit = (message) => {
    console.log(message);
    if (message) {
      socket.emit("sendMessage", message);
    }
  };

  function handleCTS() { }

  return (
    <Container>
      <ChattingApp userInfo={userInfo} chatLog={chatLog} handleSubmit={handleSubmit} />
      <UserDiv>
        <UserCounter>접속해있는 소환사 총 {userList.length}명</UserCounter>
        <UserList>
          {userList.map((user, index) => {
            return (
              <User key={index}>
                <UserImg src={user.userImg} />
                <UserName>{user.userName}</UserName>
              </User>
            );
          })}
        </UserList>
      </UserDiv>
    </Container>
  );
}

export default ChattingRoom;
