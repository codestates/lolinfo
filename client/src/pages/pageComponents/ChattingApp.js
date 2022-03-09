import React, { useState, useRef, useEffect, useCallback } from "react";
import styled from "styled-components";

const Header = styled.h2`
  padding: 3px;
  padding-left: 5px;
  grid-row: 1/2;
  grid-column: 1/11;
  font-size: 1.2rem;
  background-color: ${(props) => props.theme.recordBgColor};
  border: 2px solid ${(props) => props.theme.ChattingLineColor};
  font-weight: bold;
`;
const ChattingDiv = styled.div`
  width: 90vh;
  display: grid;
  grid-template-columns: repeat(10, minmax(auto, 1fr));
  grid-template-rows: 40px repeat(8, minmax(auto, 1fr)) 60px;
`;
const ChattingInputDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(19, minmax(auto, 1fr));
  grid-template-rows: repeat(10, minmax(auto, 1fr));
  grid-row: 10/11;
  grid-column: 1/11;
  background-color: ${(props) => props.theme.recordBgColor};
  border: 2px solid ${(props) => props.theme.ChattingLineColor};
`;
const ChattingInputForm = styled.form`
  display: grid;
  grid-template-columns: repeat(19, minmax(auto, 1fr));
  grid-template-rows: repeat(10, minmax(auto, 1fr));
  grid-row: 2/11;
  grid-column: 1/20;
  padding: 5px 5px 5px 10px;
`;
const ChatLogContainer = styled.ul`
  grid-row: 2/10;
  grid-column: 1/11;
  background: #fff;
  border-right: 2px solid ${(props) => props.theme.ChattingLineColor};
  border-left: 2px solid ${(props) => props.theme.ChattingLineColor};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: scroll;
`;

const ReceiveMessage = styled.li`
  align-self: flex-start;
  display: flex;
  width: fit-content;
  padding: 0.3rem;
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: 0.5rem;

  .message {
    border-radius: 5px;
    padding: 0.5rem;
    font-size: 14px;
    margin: 0px 3px 5px 0px;
    background: ${(props) => props.theme.recordBgColor};
  }
`;

const SentMessage = styled(ReceiveMessage)`
  align-self: flex-end;
  flex-direction: row-reverse;
  .message {
    text-align: right;
    background: ${(props) => props.theme.ChattingRoomSentMessageColor};
  }
`;

const Profile = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  > img {
    border-radius: 50%;
    object-fit: cover;
    width: 50px;
    height: 50px;
  }

  > span {
    word-break: keep-all;
    font-size: 0.68rem;
    margin-bottom: 0.3rem;
  }
`;
const ChatTime = styled.span`
  font-size: 0.63rem;
  margin: 4px;
`;
const ChattingInput = styled.input`
  grid-row: 1/11;
  grid-column: 1/18;
  border: none;
  outline: none;
  background-color: inherit;
`;
const ChattingSubmitButton = styled.button`
  grid-row: 1/11;
  grid-column: 18/21;
`;

// TODO: 채팅을 보낼때, 서버에서 악세스토큰  검증 로직을 넣을것.
function ChattingApp(props) {
  // 현재 로그인한 유저의 정보, 리덕스에서 가져올것

  const { userInfo = {}, chatLog = [], handleSubmit } = props;
  const [messageInput, setMessageInput] = useState("");

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setMessageInput("");
      handleSubmit(messageInput);
      inputRef.current.focus();
    },
    [messageInput, handleSubmit],
  );

  const handleTextChange = useCallback((e) => {
    setMessageInput(e.target.value);
  }, []);

  const inputRef = useRef();
  let ulRef = useRef();

  // 채팅 업데이트시 스크롤 맨 아래로
  useEffect(() => {
    ulRef.current.scrollTop = ulRef.current.scrollHeight - ulRef.current.clientHeight;
  }, [chatLog]);

  return (
    <ChattingDiv>
      <Header>LOLINFO 채팅방</Header>
      <ChatLogContainer ref={ulRef}>
        {chatLog.map((chat, idx) => {
          if (chat.name === userInfo.name) {
            return (
              <SentMessage key={idx}>
                <Profile>
                  <span>{chat.name}</span>
                  <img alt="userProfile" src={chat.userImg} />
                </Profile>
                <span className="message">{chat.message}</span>
                <ChatTime>{chat.time}</ChatTime>
              </SentMessage>
            );
          } else {
            return (
              <ReceiveMessage key={idx}>
                <Profile>
                  <span>{chat.name}</span>
                  <img alt="userProfile" src={chat.userImg} />
                </Profile>
                <span className="message">{chat.message}</span>
                <ChatTime>{chat.time}</ChatTime>
              </ReceiveMessage>
            );
          }
        })}
      </ChatLogContainer>
      <ChattingInputDiv>
        <ChattingInputForm onSubmit={onSubmit}>
          <ChattingInput ref={inputRef} placeholder="메세지를 입력해주세요" onChange={handleTextChange} value={messageInput} />
          <ChattingSubmitButton type="submit">전송</ChattingSubmitButton>
        </ChattingInputForm>
      </ChattingInputDiv>
    </ChattingDiv>
  );
}

export default React.memo(ChattingApp, (prevProps, nextProps) => prevProps.userInfo === nextProps.userInfo && prevProps.chatLog === nextProps.chatLog);
