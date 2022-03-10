import React from "react";
import styled from "styled-components";

const mainColor = "#C4C4C4";

const CardBody = styled.div`
  display: grid;
  grid-template-areas:
    "time time time"
    "title title title"
    " . . ."
    "main main main"
    "main main main"
    "nickname userlevel userlevel"
    "userinfo . .";

  background-color: ${mainColor};
  border: solid 2px gray;
  border-radius: 3px;
  padding-top: 1.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 0.5rem;
`;
const TimeWrapper = styled.div`
  grid-area: time;
  justify-self: left;
  color: orange;
`;
const TitleWrapper = styled.div`
  grid-area: title;
  color: snow;

  margin-bottom: 0.3rem;
  padding-left: 0.2rem;
  justify-self: left;
`;

const Main = styled.div`
  grid-area: main;
  padding-left: 0.3rem;
  color: gray;
  font-size: 0.95rem;
  justify-self: left;
  text-align: left;
`;

const NickName = styled.div`
  grid-area: nickname;
  justify-self: left;
  align-items: end;
  font-size: .9rem;
  > a {
    color: black;
  }
`;

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
`;

const UserInfo = styled.div`
  grid-area: userinfo;
  justify-self: left;
  padding-left: 0.08rem;
  align-self: baseline;
  font-size: 0.775rem;
  color: gray;
`;

function Card({ time, title, body, userName, userEmail }) {
  let textTime = time;
  return (
    <CardBody>
      <TimeWrapper>
        <span>{textTime}</span>
      </TimeWrapper>
      <TitleWrapper>
        <span>{title}</span>
      </TitleWrapper>
      <Main>
        <p>{body}</p>
      </Main>
      <NickName>
        <a href="/">{userName}</a>
      </NickName>
      <UserLevel>
        <p></p>
        <p></p>
      </UserLevel>
      <UserInfo>
        <p>{userEmail}</p>
      </UserInfo>
    </CardBody>
  );
}

export default React.memo(Card);
