import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import styled, {ThemeProvider} from 'styled-components';
import theme from './styles/theme';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import RecordPage from './pages/RecordPage';
import Home from './pages/Home';
import Board from './pages/Board';
import Edit from './pages/Mypage-Edit';
import DeleteAccount from  './pages/Mypage-DelAco';
import ChangePassword from './pages/Mypage-ChangePw';

const subColor = '#000000';
//Header
const StHeader = styled.div`
  background-color: ${subColor};
  height: 10vh;
  color: white;
`;

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyle />
          <StHeader>Header</StHeader>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/board" element={<Board />} />
            <Route path="/record" element={<RecordPage />} />
            <Route path="/mypage/edit" element={<Edit />} />
            <Route path="/mypage/changePassword" element={<ChangePassword />} />
            <Route path="/mypage/deleteAccount" element={<DeleteAccount />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
