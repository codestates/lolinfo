import React from "react";
import styled from "styled-components";

const RankWrapper = styled.RankWrapper`
  display: grid;
  grid-template-columns: minmax(1fr, auto) minmax(0px, auto) minmax(3fr, auto);
  grid-template-rows: minmax(1fr, auto);
  grid-template-areas: "user-profile . solo-rank free-rank";

  background-color: ${(props) => props.theme.recordBgColor};

  padding: 1rem;
  margin-bottom: 1rem;

  img {
    object-fit: cover;
    width: ${(props) => String(props.size) + "rem"};
    height: ${(props) => String(props.size) + "rem"};

    border-radius: 20%;
  }

  > .solo-rank {
    grid-area: solo-rank;

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
  }
`;

function RankComponent() {
  return <RankWrapper></RankWrapper>;
}

export default RankComponent;
