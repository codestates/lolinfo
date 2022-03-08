import styled from "styled-components";
import ChattingApp from "./pageComponents/ChattingApp";

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

function ChattingRoom() {
  let userInfo = {
    userName: "응가뿡뿡",
    userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3kiVpzQisF4m8TU_1jv9xFho9z2g-XRyMKg&usqp=CAU",
  };

  let users = [
    {
      userName: "응가뿡뿡",
      userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3kiVpzQisF4m8TU_1jv9xFho9z2g-XRyMKg&usqp=CAU",
    },
    {
      userName: "푸르매2012",
      userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3kiVpzQisF4m8TU_1jv9xFho9z2g-XRyMKg&usqp=CAU",
    },
    {
      userName: "고양이",
      userImg: "https://ddragon.leagueoflegends.com/cdn/12.5.1/img/profileicon/4561.png",
    },
  ];

  let chatLog = [
    {
      userName: "응가뿡뿡",
      userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3kiVpzQisF4m8TU_1jv9xFho9z2g-XRyMKg&usqp=CAU",
      message: "안녕하세요",
      time: "13:30:03",
    },
    {
      userName: "푸르매2012",
      userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3kiVpzQisF4m8TU_1jv9xFho9z2g-XRyMKg&usqp=CAU",
      message: "네 안녕하세요",
      time: "13:30:06",
    },
    {
      userName: "푸르매2012",
      userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3kiVpzQisF4m8TU_1jv9xFho9z2g-XRyMKg&usqp=CAU",
      message: "뭐하고계세요",
      time: "13:30:09",
    },
  ];

  const handleSubmit = (message) => {
    console.log(message);
    // socket 
    /* 
    { 
      userId: userInfo.userId, // 'asda1-asdasd-asdasd'
      message,
    }
    형식으로 emit 할것
    */
  };

  return (
    <Container>
      <ChattingApp userInfo={userInfo} chatLog={chatLog} handleSubmit={handleSubmit} />
      <UserDiv>
        <UserCounter>접속해있는 소환사 총 {users.length}명</UserCounter>
        <UserList>
          {users.map((user, index) => {
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
