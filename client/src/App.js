import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Board from "./pages/Board"


const mainColor = "#C4C4C4";
const subColor = "#000000";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
  }
`;

//Header
const StHeader = styled.div`
  background-color: ${subColor};
  height: 10vh;
  color: white;
`;

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <StHeader>Header</StHeader>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/board" element={<Board />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
