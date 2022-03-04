import React, {useState}from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Board from "./pages/Board";

import Theme from './styles/Theme';
import GlobalStyle from './styles/GlobalStyle';

import RecordPage from './pages/RecordPage';
import Search from "./components/search";
// import MainTitle from "./components/title";
import NaviBar from "./components/naviBar";
import LoginPage from "./components/loginPage";
import useSticky from "./hook/useSticky";
import SignupPage from './components/signupPage';
import Modal from './components/modal';

//Header
function App() {
  const { isSticky, element } = useSticky();
  const [loginModal,setLoginModal]=useState('');
  const [userInfo,setUserInfo]=useState({
      name:'',password:'',passwordC:'',submit:'',login:''
  })
  function naviMenu(order){
    if(order===5)setLoginModal('login')
    else if(order===0){//메인
      // history.push("/")
    }
    else if(order===1){//게시판

    }
    else if(order===2){//전적

    }
    else if(order===3){//랭킹

    }
    else if(order===4){//오픈채팅

    }
}
  return (
    <div className="App" ref={element}>
      <ThemeProvider theme={Theme}>
        <Router>
          <GlobalStyle />
          <NaviBar sticky={isSticky} naviMenu={naviMenu}/>
          <Search/>
          {
            loginModal?
              <Modal setLoginModal={setLoginModal} visible={true}>
                  {
                  loginModal==='login'?
                  <LoginPage setLoginModal={setLoginModal} setUserInfo={setUserInfo}/>:
                  <SignupPage setLoginModal={setLoginModal} setUserInfo={setUserInfo}/>
                  }
              </Modal>
            :null
          }
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
