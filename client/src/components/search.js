import React, { useState } from "react";
import styled from "styled-components";
import chatImg from "../resource/CommunicationChatCircle.png";
import { useNavigate } from "react-router-dom";
function Search({ setSchBarInput }) {
  let navigate = useNavigate();
  const [nickName, setNickName] = useState("");
  function onChangeHandler(e, tag) {
    if (e.key === "Enter" || tag) {
      setSchBarInput(nickName);
      navigate("/record");
      setNickName("");
    } else {
      setNickName(e.target.value);
    }
  }
  return (
    <div>
      <Container>
        <SearchIcon></SearchIcon>

        <SearchInput value={nickName} onKeyUp={(e) => (e.key === "Enter" ? onChangeHandler(e, true) : null)} onChange={(e) => onChangeHandler(e)}></SearchInput>
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
