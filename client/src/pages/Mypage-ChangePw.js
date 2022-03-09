import styled from "styled-components";
import MypageNavbar from "./pageComponents/MypageComponents/MypageNavbarComponent";
import { useState, useEffect } from "react";
import { isMatchPassword, validPassword } from "../modules/validation";
import axios from "axios";

axios.defaults.withCredentials = true;

function ChangePasswordPage({ setHistory }) {
  useEffect(() => {
    setHistory(true);
  }, []);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newAgainPassword, setnewAgainPassword] = useState("");

  const passwordConfirmation = async () => {
    if (!validPassword(password)) {
      setPassword("");
      alert("비밀번호 조건: 8~16자 영문 대 소문자, 숫자, 특수문자를 사용해야합니다.");
      return;
    }
    if (!isMatchPassword(newPassword, newAgainPassword)) {
      return alert("비밀번호가 일치하지 않습니다.");
    }
    const change = await axios.put(process.env.REACT_APP_API_URL + "/users/userinfo", { email: "kimcoding@korea.com", password: password, changedPassword: newPassword });
    if (change.status === 200) {
      setPassword("");
      setNewPassword("");
      setnewAgainPassword("");
      return alert("비밀번호가 정상적으로 교체되었습니다.");
    }
    if (!isMatchPassword(newPassword, newAgainPassword)) {
      return alert("비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <Container>
      <SubMenu>
        <MypageNavbar></MypageNavbar>
      </SubMenu>
      <ChangePwPage>
        <ChangePasswordContainer>
          <Header>비밀번호 변경</Header>
          <SmallHeader>개인정보 보호를 위해 비밀번호를 주기적으로 변경해주세요.</SmallHeader>
          <ChangePasswordDiv>
            <CurrentPassword>
              <CurrentPasswordInput value={password} onChange={(e) => setPassword(e.target.value)} placeholder="현재 비밀번호 입력"></CurrentPasswordInput>
            </CurrentPassword>
            <NewPassword>
              <NewPasswordInput value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="신규 비밀번호 입력"></NewPasswordInput>
            </NewPassword>
            <NewPasswordCheck>
              <NewPasswordCheckInput value={newAgainPassword} onChange={(e) => setnewAgainPassword(e.target.value)} placeholder="신규 비밀번호 재입력"></NewPasswordCheckInput>
            </NewPasswordCheck>
            <SubmitButtonDiv>
              <SubmitButton onClick={passwordConfirmation}>확인</SubmitButton>
            </SubmitButtonDiv>
          </ChangePasswordDiv>
        </ChangePasswordContainer>
      </ChangePwPage>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(10, minmax(auto, 1fr));
  grid-template-rows: 50px repeat(10, minmax(auto, 1fr)) 150px;
  background-color: ${(props) => props.theme.recordBgColor};
`;
const SubMenu = styled.div`
  grid-row: 1/1;
  grid-column: 1/11;
  height: 3.7vw;
  align-items: center;
  background-color: #fff;
`;
const ChangePwPage = styled.div`
  display: grid;
  grid-template-columns: repeat(9, minmax(auto, 1fr));
  grid-template-rows: 40px repeat(9, minmax(auto, 1fr));
  grid-row: 2/12;
  grid-column: 1/12;
  background-color: ${(props) => props.theme.recordBgColor};
`;
const ChangePasswordContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, minmax(auto, 1fr));
  grid-template-rows: repeat(7, minmax(auto, 1fr));
  grid-row: 2/9;
  grid-column: 3/8;
  background-color: #fff;
  @media (max-width: 700px) {
    display: grid;
    grid-template-columns: repeat(10, minmax(auto, 1fr));
    grid-template-rows: repeat(7, minmax(auto, 1fr));
    grid-row: 2/9;
    grid-column: 1/10;
    background-color: #fff;
  }
`;
const Header = styled.h2`
  grid-row: 1/2;
  grid-column: 2/4;
  font-weight: 400;
  padding: 16px 0px;
  @media (max-width: 700px) {
    grid-row: 1/2;
    grid-column: 2/4;
    font-weight: 400;
    font-size: 1em;
    padding: 16px 0px;
  }
  @media (max-width: 500px) {
    grid-row: 1/2;
    grid-column: 2/4;
    font-weight: 400;
    font-size: 0.8em;
    padding: 16px 0px;
  }
`;
const SmallHeader = styled.h4`
  grid-row: 2/3;
  grid-column: 2/10;
  font-weight: 400;
  color: ${(props) => props.theme.MypageSmallHeader};
  @media (max-width: 700px) {
    grid-row: 2/3;
    grid-column: 2/10;
    font-weight: 400;
    font-size: 0.7em;
    color: ${(props) => props.theme.MypageSmallHeader};
  }
`;
const ChangePasswordDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(9, minmax(auto, 1fr));
  grid-template-rows: repeat(10, minmax(auto, 1fr));
  grid-row: 3/9;
  grid-column: 2/10;
`;
const CurrentPassword = styled.div`
  display: grid;
  grid-template-columns: repeat(20, minmax(auto, 1fr));
  grid-template-rows: repeat(10, minmax(auto, 1fr));
  grid-row: 1/3;
  grid-column: 2/9;
`;
const CurrentPasswordInput = styled.input`
  grid-row: 3/9;
  grid-column: 4/18;
`;
const NewPassword = styled.div`
  display: grid;
  grid-template-columns: repeat(20, minmax(auto, 1fr));
  grid-template-rows: repeat(10, minmax(auto, 1fr));
  grid-row: 3/5;
  grid-column: 2/9;
`;
const NewPasswordInput = styled.input`
  grid-row: 3/9;
  grid-column: 4/18;
`;
const NewPasswordCheck = styled.div`
  display: grid;
  grid-template-columns: repeat(20, minmax(auto, 1fr));
  grid-template-rows: repeat(10, minmax(auto, 1fr));
  grid-row: 5/7;
  grid-column: 2/9;
`;
const NewPasswordCheckInput = styled.input`
  grid-row: 3/9;
  grid-column: 4/18;
`;
const SubmitButtonDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(20, minmax(auto, 1fr));
  grid-template-rows: repeat(10, minmax(auto, 1fr));
  grid-row: 7/9;
  grid-column: 2/9;
`;
const SubmitButton = styled.button`
  grid-row: 3/9;
  grid-column: 4/18;
  background-color: #dddfe4;
  color: #fff;
  font-weight: 700;
  border: 0;
  cursor: pointer;
`;

export default ChangePasswordPage;
