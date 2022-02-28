import React from 'react';
import styled from 'styled-components';

const mainColor = '#C4C4C4';

const CardBody = styled.div`
  display: grid;
    grid-template-areas: 
      "time time time"
      "title title title"
      " . . ."
      "main main main"
      "main main main"
      "nickname userlevel userlevel"
      "userinfo . ."  
    ;

  background-color: ${mainColor};
  border: solid 2px gray;
  border-radius: 3px;
  padding-top: 1.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 0.5rem;

`
const TimeWrapper = styled.div`
  grid-area: time;
  justify-self: left;
  color: orange;
`
const TitleWrapper = styled.div`
  grid-area: title;
  color: snow;

  margin-bottom: 0.3rem;
  padding-left: 0.2rem;
  justify-self: left;
`

const Main = styled.div`
  grid-area: main;
  padding-left: 0.3rem;
  color: gray;
  font-size: 0.95rem;
  justify-self: left;
  text-align: left;
`

const NickName = styled.div`
  grid-area: nickname;
  justify-self: left;
  align-items: end;
  
  > a {
    color: black;
  }
`

const UserLevel = styled.div`
  grid-area: userlevel;
  font-size: 0.8rem;

  position: relative;
    top: 25%;

  align-items: baseline;

  display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;

  p:nth-child(1) {
    justify-self: right;
  }

  p:nth-child(2) {
    justify-self: left;
    font-size: 0.55rem;
  }
`

const UserInfo = styled.div`
  grid-area: userinfo;
  justify-self: left;
  padding-left: 0.3rem;
  align-self: baseline;
  font-size: 0.775rem;
  color: gray;
`


function Card() {
  return (
    <CardBody>
      <TimeWrapper>
        <span>방금</span>
      </TimeWrapper>
      <TitleWrapper>
        <span>타이틀</span>
      </TitleWrapper>
      <Main>
        <p>본문 내용 엄청긴 본문내용 어쩌구 저쩌구 ㅁㄴㅇㄻㄴㅇㄻㄴㅇㄹㅁㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄹ</p>
      </Main>
      <NickName>
        <a href='/'>닉네임</a>
      </NickName>
      <UserLevel>
        <p>123</p>
        <p>lv</p>
      </UserLevel>
      <UserInfo>
        <p>myidisteemo123</p>
      </UserInfo>
    </CardBody>
  );
}

export default Card;
