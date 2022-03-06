import styled from "styled-components";
import ChattingApp from "./pageComponents/ChattingApp";

const Container = styled.div`
  justify-content: center;
  background-color: ${(props) => props.theme.ChattingBackgroundColor};
`;
const Space = styled.div`
  height: 100px;
  background-color: ${(props) => props.theme.ChattingBackgroundColor};
`;
const Dividedpart = styled.div`
  display: grid;
  grid-template-areas:
    " . chatting chatting chatting chatting user . "
    " . chatting chatting chatting chatting user . ";
`;
const ChattingDiv = styled.div`
  grid-area: chatting;
  height: 614px;
`;
const UserDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(10, minmax(auto, 1fr));
  grid-template-rows: repeat(10, minmax(auto, 1fr));
  grid-area: user;
  background-color: ${(props) => props.theme.recordBgColor};
  border-top: 2px solid ${(props) => props.theme.ChattingLineColor};
  border-bottom: 2px solid ${(props) => props.theme.ChattingLineColor};
  border-right: 2px solid ${(props) => props.theme.ChattingLineColor};
`;
const NextHead = styled.header`
  font-weight: bold;
  font-size: 1.2rem;
  grid-row: 1/2;
  grid-column: 1/11;
  text-align: center;
  @media (max-width: 600px) {
    font-weight: bold;
    font-size: 0.6rem;
    grid-row: 1/2;
    grid-column: 1/11;
    text-align: center;
  }
`;
const UserList = styled.ul`
  grid-row: 2/10;
  grid-column: 2/10;
`;
const EachUser = styled.li`
  display: grid;
  grid-template-columns: repeat(10, minmax(auto, 1fr));
  grid-template-rows: repeat(2, minmax(auto, 1fr));
  grid-row: 2/10;
  grid-column: 2/10;
`;
const EachUserImg = styled.img`
  grid-row: 1/3;
  grid-column: 1/3;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  @media (max-width: 600px) {
    grid-row: 1/3;
    grid-column: 1/3;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    overflow: hidden;
  }
`;
const EachUserName = styled.span`
  grid-row: 1/3;
  grid-column: 3/10;
  font-size: 18px;
  font-weight: 500;
  @media (max-width: 600px) {
    grid-row: 1/3;
    grid-column: 3/10;
    font-size: 10px;
    font-weight: 500;
  }
`;

function ChattingRoom() {
  return (
    <Container>
      <Space></Space>
      <Dividedpart>
        <ChattingDiv>
          <ChattingApp></ChattingApp>
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
  );
}

export default ChattingRoom;
