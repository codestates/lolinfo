import React from "react";
import styled from "styled-components";

const GameResultWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(1rem, auto));
  grid-template-rows: repeat(4, minmax(1rem, auto));
  grid-template-areas:
    "shape game-result"
    ". time"
    ". gametype"
    ". date";

  justify-content: flex-start;

  > * {
    color: #24292ed0;
    font-weight: 200;
    margin: 0;
    padding: 0;
  }

  > .shape {
    grid-area: shape;

    width: 0px;
    height: 0px;
    border-top: solid 1rem #018795;
    border-right: solid 1rem transparent;
  }
  > .game-result {
    grid-area: game-result;
    padding-top: 2px;

    color: #018795;
    font-weight: 700;
  }
  > .time {
    grid-area: time;

    font-size: 0.3rem;
    margin-top: 3px;
  }
  > .gametype {
    grid-area: gametype;
    font-size: 0.8rem;
    font-weight: 550;
  }
  > .date {
    grid-area: date;
    font-size: 0.3rem;
    padding: 0 0 3px 0;
    margin-top: 1px;
  }
`;

function RecentGameResult() {
  return (
    <GameResultWrapper>
      <div className="shape"></div>
      <div className="game-result">승리</div>
      <div className="time">11:54</div>
      <div className="gametype">AI대전</div>
      <div className="date">2/27</div>
    </GameResultWrapper>
  );
}

export default RecentGameResult;
