import styled from "styled-components";
import React, { useState, useEffect } from "react";


const Container = styled.div`

 justify-content: center;
 background-color:${props => props.theme.ChattingBackgroundColor};

`
const Space = styled.div`
  height: 100px;
  background-color: ${props => props.theme.ChattingBackgroundColor};
`

const Dividedpart = styled.div`
 display:grid;
 grid-template-areas:
    " . chatting chatting chatting chatting user . "
    " . chatting chatting chatting chatting user . " ; 
 
`

const Header = styled.header`
 grid-row: 1/2;
 grid-column: 1/11;
 font-size: 1.2rem;
 background-color: ${props => props.theme.recordBgColor};
 border: 2px solid ${props => props.theme.ChattingLineColor};
 font-weight: bold;
`

const ChattingDiv = styled.div`
 display: grid;
 grid-template-columns: repeat(10, minmax(auto, 1fr));
 grid-template-rows: 40px repeat(8, minmax(auto, 1fr)) 60px;
  grid-area: chatting;
  height: 614px;
`
const UserDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(10, minmax(auto, 1fr));
  grid-template-rows: repeat(10, minmax(auto, 1fr));
  grid-area: user;
  background-color: ${props => props.theme.recordBgColor};
  border-top: 2px solid ${props => props.theme.ChattingLineColor};
  border-bottom : 2px solid ${props => props.theme.ChattingLineColor};
  border-right : 2px solid ${props => props.theme.ChattingLineColor};
`
const ChattingScripts = styled.ul` // 채팅내용들
 /* display: grid;
 grid-template-columns: repeat(1, minmax(auto, 1fr));
 grid-template-rows: repeat(6, minmax(auto, 1fr)); */
 grid-row: 2/10;
 grid-column: 1/11;
 background: #fff;
 border-right : 2px solid ${props => props.theme.ChattingLineColor};
 border-left : 2px solid ${props => props.theme.ChattingLineColor};
`
const ChattingInputDiv = styled.div`
 display: grid;
 grid-template-columns: repeat(19, minmax(auto, 1fr));
 grid-template-rows: repeat(10, minmax(auto, 1fr));
 grid-row: 10/11;
 grid-column: 1/11;
 background-color: ${props => props.theme.recordBgColor};
 border: 2px solid ${props => props.theme.ChattingLineColor};
`
const ChattingInputForm = styled.form`
 display: grid;
 grid-template-columns: repeat(19, minmax(auto, 1fr));
 grid-template-rows: repeat(10, minmax(auto, 1fr));
 grid-row: 2/11;
 grid-column: 1/20;
 padding: 5px 5px 5px 10px;
`
const ChattingInput = styled.input`
 grid-row: 1/11;
 grid-column: 1/18;
 border: none;
 outline: none;
 background-color: inherit;
`
const ChattingSubmitButton = styled.button`
 grid-row: 1/11;
 grid-column: 18/21;
`
const NextHead = styled.header`
 font-weight: bold;
 font-size: 1.2rem;
 grid-row: 1/2;
 grid-column: 1/11;
 text-align: center;
`
const UserList = styled.ul`
 grid-row: 2/10;
 grid-column: 2/10;
`
const EachUser = styled.li`
 display: grid;
 grid-template-columns: repeat(10, minmax(auto, 1fr));
 grid-template-rows: repeat(2, minmax(auto, 1fr));
 grid-row: 2/10;
 grid-column: 2/10;
`
const EachUserImg = styled.img`
 grid-row: 1/3;
 grid-column: 1/3;
 width: 30px;
 height: 30px;
 border-radius: 50%;
 overflow: hidden;
`
const EachUserName = styled.span`
 grid-row: 1/3;
 grid-column: 3/10;
 font-size: 18px;
 font-weight: 500;
`
const EachUserTalkingBox = styled.div`
 height: 5vw;
 grid-column: 1/11;
 grid-column: 2/10;
`
const SentMessage = styled.li`
    width: 90%;
    padding: 0.3rem;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    margin-top: 0.5rem;
    flex-direction: row-reverse;
    float: right;
`
const RecieveMessage = styled.li`
    width: 90%;
    padding: 0.3rem;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    margin-top: 0.5rem;
`
const ChattingRoomProFile = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    `
const ChattingRoomProFileName = styled.span`
    font-size: 10px;
    margin-bottom: 0.3rem;
`
const ChattingRoomProFileImage = styled.img`
    border-radius: 50%;
    object-fit: cover;
    width: 50px;
    height: 50px;
    `
const ChattingRoomRecieveMessage = styled.span`
    border-radius: 5px;
    padding: 0.5rem;
    font-size: 14px;
    margin: 0.5px;
    flex: 7;
    background: ${props => props.theme.recordBgColor};
`
const ChattingRoomSentMessage = styled.span`
    border-radius: 5px;
    padding: 0.5rem;
    font-size: 14px;
    margin: 0.5px;
    flex: 7;
    background: #ffeb33;
    /* background: #9BE6E3; */
    /* background: ${props => props.theme.recordBgColor}; */
`
const ChattingRoomTime = styled.span`
    font-size: 10px;
    margin: 0 5px;
`
function ChattingRoom() {
    return (
        <Container>
            <Space></Space>
            <Dividedpart>
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
                <UserDiv>
                    <NextHead>접속해있는 소환사 총 2명</NextHead>
                    <UserList>
                        <EachUser>
                            <EachUserImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3kiVpzQisF4m8TU_1jv9xFho9z2g-XRyMKg&usqp=CAU"></EachUserImg>
                            <EachUserName>응가뿡뿡</EachUserName>
                        </EachUser>
                        <EachUser>
                            <EachUserImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3kiVpzQisF4m8TU_1jv9xFho9z2g-XRyMKg&usqp=CAU"></EachUserImg>
                            <EachUserName>푸르매2012</EachUserName>
                        </EachUser>
                    </UserList>
                </UserDiv>
            </Dividedpart>
            <Space></Space>
        </Container>
    )
}

export default ChattingRoom;