import React from "react";
import styled from "styled-components";

const Header = styled.header`
  grid-row: 1/2;
  grid-column: 1/11;
  font-size: 1.2rem;
  background-color: ${(props) => props.theme.recordBgColor};
  border: 2px solid ${(props) => props.theme.ChattingLineColor};
  font-weight: bold;
`;
const ChattingDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(10, minmax(auto, 1fr));
  grid-template-rows: 40px repeat(8, minmax(auto, 1fr)) 60px;
  grid-area: chatting;
  height: 614px;
`;
const ChattingScripts = styled.ul`
  grid-row: 2/10;
  grid-column: 1/11;
  background: #fff;
  border-right: 2px solid ${(props) => props.theme.ChattingLineColor};
  border-left: 2px solid ${(props) => props.theme.ChattingLineColor};
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
const EachUserTalkingBox = styled.div`
  height: 5vw;
  grid-column: 1/11;
  grid-column: 2/10;
`;
const SentMessage = styled.li`
  width: 90%;
  padding: 0.3rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: 0.5rem;
  flex-direction: row-reverse;
  float: right;
`;
const RecieveMessage = styled.li`
  width: 90%;
  padding: 0.3rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: 0.5rem;
`;
const ChattingRoomProFile = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;
const ChattingRoomProFileName = styled.span`
  font-size: 10px;
  margin-bottom: 0.3rem;
`;
const ChattingRoomProFileImage = styled.img`
  border-radius: 50%;
  object-fit: cover;
  width: 50px;
  height: 50px;
`;
const ChattingRoomRecieveMessage = styled.span`
  border-radius: 5px;
  padding: 0.5rem;
  font-size: 14px;
  margin: 0.5px;
  flex: 7;
  background: ${(props) => props.theme.recordBgColor};
`;
const ChattingRoomSentMessage = styled.span`
  border-radius: 5px;
  padding: 0.5rem;
  font-size: 14px;
  margin: 0.5px;
  flex: 7;
  background: ${(props) => props.theme.ChattingRoomSentMessageColor};
`;
const ChattingRoomTime = styled.span`
  font-size: 10px;
  margin: 0 5px;
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
function ChattingApp() {
    return (
        <ChattingDiv>
            <Header>LOLINFO 채팅방</Header>
            <ChattingScripts>
                <EachUserTalkingBox>
                    <SentMessage>
                        <ChattingRoomProFile>
                            <ChattingRoomProFileName>응가뿡뿡</ChattingRoomProFileName>
                            <ChattingRoomProFileImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3kiVpzQisF4m8TU_1jv9xFho9z2g-XRyMKg&usqp=CAU"></ChattingRoomProFileImage>
                        </ChattingRoomProFile>
                        <ChattingRoomSentMessage>안녕하세요</ChattingRoomSentMessage>
                        <ChattingRoomTime>20:18</ChattingRoomTime>
                    </SentMessage>
                    <RecieveMessage>
                        <ChattingRoomProFile>
                            <ChattingRoomProFileName>푸르매2012</ChattingRoomProFileName>
                            <ChattingRoomProFileImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3kiVpzQisF4m8TU_1jv9xFho9z2g-XRyMKg&usqp=CAU"></ChattingRoomProFileImage>
                        </ChattingRoomProFile>
                        <ChattingRoomRecieveMessage>네 안녕하세요</ChattingRoomRecieveMessage>
                        <ChattingRoomTime>20:22</ChattingRoomTime>
                    </RecieveMessage>
                </EachUserTalkingBox>
            </ChattingScripts>
            <ChattingInputDiv>
                <ChattingInputForm>
                    <ChattingInput placeholder="메세지를 입력해주세요"></ChattingInput>
                    <ChattingSubmitButton>전송</ChattingSubmitButton>
                </ChattingInputForm>
            </ChattingInputDiv>
        </ChattingDiv>
    );
}

export default ChattingApp;
