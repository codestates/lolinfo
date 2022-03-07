import React from "react";
import styled from "styled-components";

const RankWrapper = styled.div`
  grid-area: ${(props) => props.className};

  display: grid;
  grid-template-columns: repeat(2, minmax(1fr, auto));
  grid-template-rows: minmax(1fr, auto);
  grid-template-areas: "rank-img rank-text";

  justify-content: center;
  align-items: center;
  margin: 0;

  > .rank-img {
    grid-area: rank-img;
  }

  > .rank-text {
    grid-area: rank-text;

    display: grid;
    grid-template-columns: repeat(1, minmax(1fr, auto));
    grid-template-rows: minmax(4fr, auto);
    text-align: center;

    color: DimGrey;
    line-height: 1.45;

    > .rank-title {
      font-size: 0.7rem;
      font-weight: 200;
    }

    > .tier {
      font-size: 1rem;
      color: RebeccaPurple;
    }

    > .ratio {
      font-size: 0.5rem;
      font-weight: 100;
    }

    > .result {
      display: grid;
      grid-template-columns: repeat(2, minmax(1fr, auto));
      grid-template-rows: repeat(1, minmax(1fr, auto));
      grid-template-areas: "win lose";

      font-size: 0.8rem;

      > .win {
        grid-area: win;
        color: tomato;
      }

      > .lose {
        grid-area: lose;
        color: RoyalBlue;
      }
    }
  }
`;

function Rank({ lp, wins, losses, tier, rank, rankType }) {
  return (
    <RankWrapper>
      <img className="rank-img" src="https://www.lolog.me/images/icon/DIAMOND.png" alt="DIAMOND" />
      <div className="rank-text">
        <span className="rank-title">{rankType}</span>
        <span className="tier">{`${tier} ${rank}`}</span>
        <span className="ratio">55.26% {lp}lp</span>
        <div className="result">
          <span className="win">{wins}W</span>
          <span className="lose">{losses}L</span>
        </div>
      </div>
    </RankWrapper>
  );
}

export default Rank;
