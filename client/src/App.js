import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Board from "./pages/Board";

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
                    <NaviBar sticky={isSticky} setLoginModal={setLoginModal} />
                    <Search />
                    {loginModal ? (
                        <Modal setLoginModal={setLoginModal} visible={true}>
                            {loginModal === "login" ? <LoginPage setLoginModal={setLoginModal} setUserInfo={setUserInfo} /> : <SignupPage setLoginModal={setLoginModal} setUserInfo={setUserInfo} />}
                        </Modal>
                    ) : null}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/board" element={<Board />} />
                        <Route path="/record" element={<RecordPage />} />
                    </Routes>
                </Router>
            </ThemeProvider>
        </div>
    );
}

export default App;
