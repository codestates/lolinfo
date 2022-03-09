import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Board from "./pages/Board";
import Edit from "./pages/Mypage-Edit";
import DeleteAccount from "./pages/Mypage-DelAco";
import ChangePassword from "./pages/Mypage-ChangePw";
import ChattingRoom from "./pages/ChattingRoom";
import Theme from "./styles/Theme";
import GlobalStyle from "./styles/GlobalStyle";
import RecordPage from "./pages/RecordPage";
import Search from "./components/search";
import NaviBar from "./components/naviBar";
import LoginPage from "./components/loginPage";
import useSticky from "./hook/useSticky";
import SignupPage from "./components/signupPage";
import Modal from "./components/modal";
import AlertModal from "./components/alertModal";
function App() {
  const { isSticky, element } = useSticky();
  const [history, setHistory] = useState(0);
  const [loginModal, setLoginModal] = useState("");
  const [schBarInput, setSchBarInput] = useState("");
  const [loginState, setLoginState] = useState("");
  const [loginFailState, setloginFailState] = useState("");
  const [emailState, setemailState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [passwordCheckState, setPasswordCheckState] = useState("");
  const [registerState, setRegisterState] = useState("");
  const [replaceState, setReplaceState] = useState("");
  const [userInfo, setUserInfo] = useState({
    email: "",
    name: "",
    password: "",
    passwordC: "",
    submit: "",
    login: "",
  });

  return (
    <div className="App" ref={element}>
      <ThemeProvider theme={Theme}>
        <Router>
          <GlobalStyle />
          <NaviBar sticky={isSticky} setLoginModal={setLoginModal} loginState={loginState} />
          {history !== "/" ? <Search setSchBarInput={setSchBarInput} schBarInput={schBarInput} /> : null}
          {loginModal ? (
            <Modal setLoginModal={setLoginModal} visible={true}>
              {loginModal === "login" ? (
                <LoginPage setLoginModal={setLoginModal} userInfo={userInfo} setUserInfo={setUserInfo} setLoginState={setLoginState} setloginFailState={setloginFailState} />
              ) : (
                <SignupPage
                  setLoginModal={setLoginModal}
                  setUserInfo={setUserInfo}
                  userInfo={userInfo}
                  setemailState={setemailState}
                  setPasswordState={setPasswordState}
                  setPasswordCheckState={setPasswordCheckState}
                  setRegisterState={setRegisterState}
                />
              )}
            </Modal>
          ) : null}
          {loginState ? <AlertModal setLoginState={setLoginState} visible={true} children="로그인이 완료되었습니다."></AlertModal> : <div></div>}
          {loginFailState ? <AlertModal setLoginState={setloginFailState} visible={true} children="로그인에 실패했습니다."></AlertModal> : <div></div>}
          {emailState ? <AlertModal setLoginState={setemailState} visible={true} children="이메일 형식이 아닙니다."></AlertModal> : <div></div>}
          {passwordState ? <AlertModal setLoginState={setPasswordState} visible={true} children="비밀번호 조건: 8~16자 영문 대 소문자, 숫자, 특수문자를 사용해야합니다."></AlertModal> : <div></div>}
          {passwordCheckState ? <AlertModal setLoginState={setPasswordCheckState} visible={true} children="비밀번호가 일치하지 않습니다."></AlertModal> : <div></div>}
          {registerState ? <AlertModal setLoginState={setRegisterState} visible={true} children="회원가입에 성공했습니다!"></AlertModal> : <div></div>}
          {replaceState ? <AlertModal setLoginState={setReplaceState} visible={true} children="정상적으로 교체되었습니다!"></AlertModal> : <div></div>}

          <Routes>
            <Route path="/" element={<Home setSchBarInput={setSchBarInput} setHistory={setHistory} />} />
            <Route path="/board" element={<Board setHistory={setHistory} />} />
            <Route path="/record" element={<RecordPage setHistory={setHistory} />} />
            <Route path="/mypage/edit" element={<Edit setHistory={setHistory} setReplaceState={setReplaceState} />} />
            <Route path="/mypage/changePassword" element={<ChangePassword setHistory={setHistory} setPasswordState={setPasswordState} setPasswordCheckState={setPasswordCheckState} setReplaceState={setReplaceState} />} />
            <Route path="/mypage/deleteAccount" element={<DeleteAccount setHistory={setHistory} />} />
            <Route path="/chat" element={<ChattingRoom setHistory={setHistory} />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}
export default App;
