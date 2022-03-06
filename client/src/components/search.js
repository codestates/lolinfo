import React from "react";
import styled from "styled-components";
import chatImg from "../resource/CommunicationChatCircle.png";

function Search() {
  function onChangeHandler(e) {}
  return (
    <div>
      <Container>
        <SearchIcon></SearchIcon>
        <SearchInput onKeyUp={(e) => (e.key === "Enter" ? onChangeHandler(e.target.value) : null)}></SearchInput>
      </Container>
    </div>
  );
}
const Container = styled.div`
  min-width: 320px;
  background: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.fontColor};
  display: grid;
  grid-template-columns: 10px 50px repeat(5, 1fr) 50px;
  grid-template-rows: 1fr 0.5fr;
`;
const SearchIcon = styled.div`
  grid-column: 2/4;
  grid-row: 1/2;
  background-image: url(${chatImg});
  background-size: 50px;
  background-repeat: no-repeat;
`;
const SearchInput = styled.input`
  grid-column: 3/8;
  grid-row: 1/2;
  padding: 12px 20px;
  border-radius: 7px;
  font-size: large;
`;

export default Search;
