import React from 'react';
import styled from 'styled-components';

const GameResultWrapper = styled.div`
  display: grid;
  grid-template-rows: 1.3rem 1fr 1fr 1fr;
  grid-template-columns: 15px 1fr;
  width: 100%;

  > * {
    color: #24292ed0;
    font-weight: 200;
    margin: 0;
    padding: 0;
  }

  > .shape {
    width: 0px;
    height: 0px;
    border-top: solid 1rem #018795;
    border-right: solid 1rem transparent;
    grid-row: 1/2;
    grid-column: 1/2;
  }
  > .game-result {
    color: #018795;
    font-weight: 700;
    grid-row: 1/2;
    grid-column: 2/2;
  }
  > .time {
    font-size: 0.3rem;
    grid-row: 2/3;
    grid-column: 2/2;
    margin-top: 3px;
  }
  > .category {
    font-size: 0.8rem;
    font-weight: 550;
    grid-row: 3/4;
    grid-column: 2/2;
  }
  > .date {
    font-size: 0.3rem;
    padding: 0 0 3px 0;
    grid-row: 4/5;
    grid-column: 2/2;
    margin-top: 1px;
  }
`;

function RecentGameResult() {
  return (
    <GameResultWrapper>
      <div className="shape"></div>
      <div className="game-result">승리</div>
      <div className="time">11:54</div>
      <div className="category">AI대전</div>
      <div className="date">2/27</div>
    </GameResultWrapper>
  );
}

export default RecentGameResult;
