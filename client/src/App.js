import React, { useState } from "react";
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
  const [history, setHistory] = useState(false);
  const [loginModal, setLoginModal] = useState("");
  const [loginState, setLoginState] = useState("");
  const [userInfo, setUserInfo] = useState({
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
          <NaviBar sticky={isSticky} setLoginModal={setLoginModal} setHistory={setHistory} />
          {history ? <Search /> : null}
          {loginModal ? (
            <Modal setLoginModal={setLoginModal} visible={true}>
              {loginModal === "login" ? <LoginPage setLoginModal={setLoginModal} userInfo={userInfo} setUserInfo={setUserInfo} setLoginState={setLoginState} />
                : <SignupPage setLoginModal={setLoginModal} setUserInfo={setUserInfo} />}
            </Modal>
          ) : null}
          {loginState ? <AlertModal setLoginModal={setLoginModal} visible={true} children="로그인이 완료되었습니다."></AlertModal> : <div></div>}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/board" element={<Board />} />
            <Route path="/record" element={<RecordPage />} />
            <Route path="/mypage/edit" element={<Edit />} />
            <Route path="/mypage/changePassword" element={<ChangePassword />} />
            <Route path="/mypage/deleteAccount" element={<DeleteAccount />} />
            <Route path="/chat" element={<ChattingRoom history={history} />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}
export default App;
