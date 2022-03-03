import React,{useState} from 'react';
import GlobalStyle from './styles/GlobalStyle';
import styled, {ThemeProvider} from 'styled-components';
import theme from './styles/theme';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import RecordPage from './pages/RecordPage';
import Home from './pages/Home';
import Board from './pages/Board';
import Search from "./components/search";
// import MainTitle from "./components/title";
import NaviBar from "./components/naviBar";
import LoginPage from "./components/loginPage";
import useSticky from "./hook/useSticky";
import SignupPage from './components/signupPage';
import Modal from './components/modal'

//Header
function App() {
  const { isSticky, element } = useSticky();
  const [loginModal,setLoginModal]=useState('');
  const [userInfo,setUserInfo]=useState({
      name:'',password:'',passwordC:'',submit:'',login:''
  })
  function naviMenu(order){
    if(order===5)setLoginModal('login') 
}
  return (
    <div className="App" ref={element}>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyle />
          <NaviBar sticky={isSticky} naviMenu={naviMenu}></NaviBar>
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
