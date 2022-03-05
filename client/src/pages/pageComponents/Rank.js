import React from "react";
import styled from "styled-components";
// import RankComponent from "./rankComponent/RankComponent";

const RankWrapper = styled.div`
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

  > .user-profile {
    grid-area: user-profile;
    display: grid;
    grid-template-columns: repeat(2, minmax(1fr, auto));
    grid-template-rows: minmax(1fr, auto);
    grid-template-areas: "profile-img user-id";

    justify-content: center;
    margin: 0;

    > .user-id {
      grid-area: user-id;
      margin: 0 0.5rem;
      display: grid;
      justify-content: flex-start;
      align-items: center;

      > span {
        font-size: 1.2rem;
      }

      > button {
        border-radius: 5%;
        border: none;
        background-color: DodgerBlue;

        width: 120%;
        height: 55%;
        color: white;

        transform: translateX(-8%);
      }
    }
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

function Rank() {
  return (
    <RankWrapper size={6}>
      <div className="user-profile">
        <img className="profile-img" src="https://ddragon.leagueoflegends.com/cdn/11.20.1/img/profileicon/4762.png" alt="Profile Icon" />
        <div className="user-id">
          <span>고양이</span>
          <button>업데이트</button>
        </div>
      </div>
      <div className="solo-rank">
        <img className="rank-img" src="https://www.lolog.me/images/icon/DIAMOND.png" alt="DIAMOND" />
        <div className="rank-text">
          <span className="rank-title">솔로랭크</span>
          <span className="tier">Diamond II</span>
          <span className="ratio">55.26% 4lp</span>
          <div className="result">
            <span className="win">105W</span>
            <span className="lose">75L</span>
          </div>
        </div>
      </div>
    </RankWrapper>
  );
}

export default Rank;
