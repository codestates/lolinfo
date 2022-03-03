import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Board from "./pages/Board";

import Theme from './styles/Theme';
import GlobalStyle from './styles/GlobalStyle';


//Header
const StHeader = styled.div`
  background-color: ${props => props.theme.mainColor};
  height: 10vh;
  color: white;
`;

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
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
