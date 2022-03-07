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

function App() {
  const { isSticky, element } = useSticky();
  const [history, setHistory] = useState(false);
  const [loginModal, setLoginModal] = useState("");
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
              {loginModal === "login" ? <LoginPage setLoginModal={setLoginModal} setUserInfo={setUserInfo} /> : <SignupPage setLoginModal={setLoginModal} setUserInfo={setUserInfo} />}
            </Modal>
          ) : null}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/board" element={<Board />} />
            <Route path="/record" element={<RecordPage />} />
            <Route path="/mypage/edit" element={<Edit />} />
            <Route path="/mypage/changePassword" element={<ChangePassword />} />
            <Route path="/mypage/deleteAccount" element={<DeleteAccount />} />
            <Route path="/chat" element={<ChattingRoom />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}
export default App;
