import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import styled, {ThemeProvider} from 'styled-components';
import theme from './styles/theme';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import RecordPage from './pages/RecordPage';
import Home from './pages/Home';
import Board from './pages/Board';

//Header
const StHeader = styled.div`
  background-color: ${props => props.theme.mainColor};
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
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
