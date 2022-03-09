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

    &.win {
      border-top: solid 1rem #018795;
    }
    &.lose {
      border-top: solid 1rem #e5133c;
    }
  }
  > .game-result {
    grid-area: game-result;
    padding-top: 2px;

    color: #018795;
    font-weight: 700;

    &.win {
      color: #018795;
    }
    &.lose {
      color: #e5133c;
    }
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

function RecentGameResult({ win, gameTime, gameType, date, queueId }) {
  let gameResult = "";
  let result = "";
  if (win) {
    gameResult = "승리";
    result = "win";
  } else {
    gameResult = "패배";
    result = "lose";
  }

  gameTime = gameTime.split(".");

  if (queueId === 420) {
    gameType = "솔랭";
  } else {
    gameType = "일반";
  }

  return (
    <GameResultWrapper>
      <div className={`shape ${result}`}></div>
      <div className={`game-result ${result}`}>{gameResult}</div>
      <div className="time">
        {gameTime[0]}:{gameTime[1]}
      </div>
      <div className="gametype">{gameType}</div>
      <div className="date">{date}</div>
    </GameResultWrapper>
  );
}

export default RecentGameResult;
