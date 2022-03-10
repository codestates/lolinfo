import { Search } from "@styled-icons/bootstrap/Search";
import styled from "styled-components";
import CardContainer from "../containers/CardContainer";
import * as d3 from "d3";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
//Body
const StWrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow: auto;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.subColor};
  height: 100%;
  padding: 2rem 0.4445rem;
`;

const BodyRow = styled.div`
  display: grid;
  grid-template-areas:
    "title title title"
    "search search search"
    ". bodytitle ."
    ". body ."
    ". more .";
  width: 100%;
  height: 100%;
  text-align: center;

  padding: 0rem 1rem;
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
`;

const StSearchIcon = styled(Search)`
  color: steelblue;
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  right: 26vw;
  cursor: pointer;
`;

const StH2 = styled.h2`
  grid-area: bodytitle;
  text-align: left;
  padding-left: 1rem;
  color: white;
  max-height: 3rem;
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
  border: 2px solid ${(props) => props.theme.subColor};
  border-radius: 13px;
  display: block;
  margin-left: auto;
  margin-right: auto;

  cursor: pointer;
`;

function Home({ setHistory, setSchBarInput }) {
  let navigate = useNavigate();
  const [nick, setNick] = useState("");
  function handleSend(e, tag) {
    if (e.key === "Enter" || tag) {
      setSchBarInput(nick);
      setHistory("/record");
      navigate("/record");
    } else setNick(e.target.value);
  }
  useEffect(() => {
    d3.select(".main-title")
      .transition()
      .duration(1200)
      .style("color", "#7FFFD4")
      .text("LOL")
      .transition()
      .duration(1300)
      .style("color", "#00BFFF")
      .text("INFO")
      .transition()
      .duration(1500)
      .style("color", "#2e2f32")
      .text("LOLINFO");
    setHistory("/");
  }, []);

  return (
    <StWrapper>
      <BodyRow>
        <BodyHeader>
          <h1 className="main-title">LOLINFO</h1>
        </BodyHeader>
        <SearchBox>
          <StInput placeholder="Search" autoComplete="off" onChange={(e) => handleSend(e)} onKeyUp={handleSend}></StInput>
          <Link to="/record">
            <StSearchIcon onClick={() => handleSend(false, true)} />
          </Link>
        </SearchBox>
        <StH2>게시판</StH2>
        <CardContainer />
        <StButton as="a" href="#">
          더보기
        </StButton>
      </BodyRow>
    </StWrapper>
  );
}

export default Home;
