import React from "react";
import styled from "styled-components";
import axios from "axios";
import { validEmail, validPassword, isMatchPassword } from "../modules/validation"

axios.defaults.withCredentials = true;

function SignupPage({ setLoginModal, setUserInfo, userInfo, setemailState, setPasswordState, setPasswordCheckState, setRegisterState }) {

  const EmailInputFunction = (e) => {
    setUserInfo(Object.assign(userInfo, { "email": e.target.value }))
  }
  const NicknameInputFunction = (e) => {
    setUserInfo(Object.assign(userInfo, { "name": e.target.value }))
  }
  const PasswordInputFunction = (e) => {
    setUserInfo(Object.assign(userInfo, { "password": e.target.value }))
  }
  const PasswordCInputFunction = (e) => {
    setUserInfo(Object.assign(userInfo, { "passwordC": e.target.value }))
  }

  const infoSandler = async () => {
    // info.submit = true;
    // // setLoginModal("");
    // console.log(info)
    // console.log(userInfo); //이해를 돕기위해 남겨놓겠습니다.
    const { name, email, password, passwordC } = userInfo
    if (!validEmail(email)) {
      return setemailState("change")// 이메일 형식이 아니라면 모달창
    }
    if (!validPassword(password)) {
      return setPasswordState("change")//비밀번호 조건이 틀리면 모달창
    }
    if (!isMatchPassword(password, passwordC)) {
      return setPasswordCheckState("change")//두 개의 비밀번호가 틀리면 모달창
    }
    const LoginReturnValue = await axios.post(process.env.REACT_APP_API_URL + "/users/register", { name: name, email: email, password: password })
    if (LoginReturnValue.status === 201) {
      setRegisterState("change")
      setLoginModal("login")
    }
  };
  return (
    <div>
      <Container>
        <TitleOPGG>LOLINFO</TitleOPGG>
        <IDInput
          type="text"
          placeholder="Username or Email"
          required
          onChange={(e) => EmailInputFunction(e)}
        />
        <NicknameInput
          placeholder="Enter your Nickname"
          onChange={(e) => NicknameInputFunction(e)}
        />
        <PasswordInput
          placeholder="Enter your Password"
          onChange={(e) => PasswordInputFunction(e)}
        />
        <PasswordInputC
          placeholder="Confirm your Password"
          onChange={(e) => PasswordCInputFunction(e)}
        />
        <SignUpButton onClick={infoSandler}>Submit</SignUpButton>
        <TextMessage>Already have an acount?</TextMessage>
        <SignIn onClick={() => setLoginModal("login")}>Login</SignIn>
        <SocialContainer>
          <SocialButton
            src="https://www.freepnglogos.com/uploads/512x512-logo-png/512x512-logo-github-icon-35.png"
            alt=""
          />
        </SocialContainer>
      </Container>
    </div>
  );
}

const Container = styled.div`
  min-width: 320px;
  height: 430px;
  row-gap: 2%;
  background: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.fontColor};
  display: grid;
  grid-template-columns: 1fr repeat(6, 30px) 1.1fr;
  grid-template-rows: 20px 30px repeat(7, 1fr);
`;
const TitleOPGG = styled.div`
  grid-column: 3;
  grid-row: 2;
  font-size: large;
  letter-spacing: ${(props) => props.theme.titleLetterSpace};
  color: ${(props) => props.theme.fontColorForLoginPageAndSignupPage};
  background: ${(props) => props.theme.mainColor};
`;
const IDInput = styled.input`
  padding: 5px;
  min-width: 200px;
  max-width: 300px;
  color: ${(props) => props.theme.fontColorForLoginPageAndSignupPage};
  background: ${(props) => props.theme.mainColor};
  border-width: 0 0 1px 0;
  border-color: ${(props) => props.theme.inputBorderColor};
  grid-column: 2/5;
  grid-row: 3/4;
  font-size: large;
  ::-webkit-input-placeholder {
    color: ${(props) => props.theme.placeHolderColor};
  }
`;
const NicknameInput = styled.input`
  padding: 5px;
  min-width: 200px;
  max-width: 300px;
  color: ${(props) => props.theme.fontColorForLoginPageAndSignupPage};
  background: ${(props) => props.theme.mainColor};
  border-width: 0 0 1px 0;
  border-color: ${(props) => props.theme.inputBorderColor};
  grid-column: 2/5;
  grid-row: 4/5;
  font-size: large;
  ::-webkit-input-placeholder {
    color: ${(props) => props.theme.placeHolderColor};
  }
`;
const PasswordInput = styled.input.attrs((_) => ({
  type: "password",
}))`
  padding: 5px;
  min-width: 200px;
  max-width: 300px;
  color: ${(props) => props.theme.fontColorForLoginPageAndSignupPage};
  background: ${(props) => props.theme.mainColor};
  border-width: 0 0 1px 0;
  border-color: ${(props) => props.theme.inputBorderColor};
  grid-column: 2/5;
  grid-row: 5/6;
  font-size: large;
  ::-webkit-input-placeholder {
    color: ${(props) => props.theme.placeHolderColor};
  }
`;
const PasswordInputC = styled.input.attrs((_) => ({
  type: "password",
}))`
  padding: 5px;
  min-width: 200px;
  max-width: 300px;
  color: ${(props) => props.theme.fontColorForLoginPageAndSignupPage};
  background: ${(props) => props.theme.mainColor};
  border-width: 0 0 1px 0;
  border-color: ${(props) => props.theme.inputBorderColor};
  grid-column: 2/5;
  grid-row: 6/7;
  font-size: large;
  ::-webkit-input-placeholder {
    color: ${(props) => props.theme.placeHolderColor};
  }
`;
const SocialContainer = styled.div`
  display: grid;
  width: 200px;
  grid-column: 2/6;
  grid-row: 7/8;
  grid-template-columns: repeat(3, 70px);
  img {
    cursor: pointer;
    width: 45px;
    height: 45px;
    object-fit: cover;
    border-radius: 50%;
  }
`;
const SocialButton = styled.img`
  grid-column: 2;
`;
const SignUpButton = styled.button`
  cursor: pointer;
  grid-column: 4/5;
  grid-row: 8/9;
  width: 60px;
  height: 60px;
  border-radius: 60px;
  border: 1px solid ${(props) => props.theme.inputBorderColor};
  background: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.fontColorForLoginPageAndSignupPage};
`;
const TextMessage = styled.div`
  color: ${(props) => props.theme.fontColorForLoginPageAndSignupPage};
  font-size: small;
  grid-column: 2/7;
  grid-row: 9/10;
`;
const SignIn = styled.div`
  cursor: pointer;
  grid-column: 7;
  grid-row: 9/10;
  font-size: small;
  color: ${(props) => props.theme.fontColor2};
`;
export default SignupPage;