import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Card from "./components/Card";
import { Search } from '@styled-icons/bootstrap/Search';

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
`;
//Body
const StWrapper = styled.div`
  display: flex;
    justify-content: center;
    overflow: auto;
    flex-wrap: wrap;
  background-color: ${mainColor};
  height: 90vh;
  padding: 2rem 0.4445rem;
`;

//Card container
const BodyRow = styled.div`
  display: grid;
    grid-template-areas:
    "title title title"
    "search search search"
    ". bodytitle ."
    ". body ."
    ". more ."
    ;
  width: 100%;
  height: auto;

  text-align: center;

  padding: 0rem 1rem 0rem 1rem;
`;

const BodyHeader = styled.div`
  grid-area: title;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100px;
  > h1 {
    align-self: center;
    justify-self: center;
  }
`;

const SearchBox = styled.div`
grid-area: search;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  min-height: 100px;
`;

const StInput = styled.input`
  width: 50vw;
  height: 80%;
  padding: 2rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  border-width: 0;
  outline: white none 0px;
`

const StSearchIcon = styled(Search)`
  color: steelblue;
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
    right: 26vw;
  cursor: pointer;

`

const StH2 = styled.h2`
  grid-area: bodytitle;
  text-align: left;
  padding-left: 1rem;
  color: white;
  max-height: 3rem;
`;

const CardWrapper = styled.div`
  grid-area: body;
  display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    grid-template-rows: repeat(auto-fill,  minmax(220px, 1fr));
    gap: 5px;
  width: 100%;
  height: auto;
  padding: 0.4rem;
`;


const StButton = styled.button`
  grid-area: more;
  width: 7rem;
  display: inline-block;
  color: white;
  background-color: darkgray;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${subColor};
  border-radius: 13px;
  display: block;
  margin-left: auto;
  margin-right: auto;

  cursor: pointer;
`;



function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <StHeader>Header</StHeader>
      <StWrapper>
        <BodyRow>
          <BodyHeader>
            <h1>LOLINFO</h1>
          </BodyHeader>
          <SearchBox>
            <StInput placeholder="Search" autoComplete="off"></StInput>
            <StSearchIcon />
          </SearchBox>
          <StH2>게시판</StH2>
          <CardWrapper>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </CardWrapper>
          <StButton as="a" href="#">더보기</StButton>
        </BodyRow>
      </StWrapper>
    </div>
  );
}

export default App;
