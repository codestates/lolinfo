import styled from "styled-components";
export const RecentWapper = styled.div`
  display: grid;
  grid-template-columns: minmax(3rem, auto);
  grid-template-rows: repeat(8, minmax(1rem, auto));
  grid-template-areas:
    "title-record"
    "CircleGraph"
    "title-team"
    "TeamRate"
    "title-gamelength"
    "GameTimeRate"
    "title-KDA"
    "TotalKDA";

  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 1.2em;
  font-weight: 700;
  color: #24292ed0;

  width: 100%;
  margin: 0 auto;
  overflow: hidden;

  align-items: center;

  @media all and (max-width: ${(props) => props.theme.recordMobileH}) {
    display: none;
  }

  > .title-record {
    grid-area: title-record;
  }

  > .CircleGraph {
    grid-area: CircleGraph;
  }

  > .title-team {
    grid-area: title-team;
  }

  > .TeamRate {
    grid-area: TeamRate;
  }

  > .title-gamelength {
    grid-area: title-gamelength;
    
  }

  > .GameTimeRate {
    grid-area: GameTimeRate;
  }

  > .title-KDA {
    grid-area: title-KDA;
    letter-spacing: 5px;
  }

  > .TotalKDA {
    grid-area: TotalKDA;
  }
`;
export const CircleGraphWapper = styled.div`
  position: relative;
  width: 9rem;
  margin: auto;
`;

export const TeamRate = styled.div`
  .DodgerBlue {
    fill: DodgerBlue;
    color: white;
  }

  .FireBrick {
    fill: FireBrick;
    color: white;
  }

`;

export const GameTimeRate = styled.div`

`;

export const CircleGraph = styled.div`
  display: inline-flex;
  width: 140px;
  height: 140px;
  background: ${(props) => props.theme.recordBgColor};
  // border-radius: 100%;

  > .progress-circle {
    position: absolute;
    z-index: 6;
    top: 14px;
    left: 14px;
    height: 80%;
    width: 80%;
    background: conic-gradient(
      #00ffff 0deg
        ${(props) => {
          return String(props.rate) + `%`;
        }},
      #cadcff 0deg
    );
    border-radius: 100%;

    display: grid;
    place-items: center;
  }

  > .progress-circle:before {
    // inner circle
    content: "";
    position: absolute;
    height: 70%;
    width: 70%;
    background-color: ${(props) => props.theme.recordBgColor};
    border-radius: 100%;
  }

  > .percent {
    position: relative;
    top: 55px;
    left: 52px;
    z-index: 10;
  }
`;

export const TotalKDAWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  font-size: 1.1rem;
`;

export const TotalKDA = styled.span`
  display: grid;
  grid-template-columns: repeat(6, minmax(1rem, auto));
  grid-template-rows: repeat(2, minmax(1rem, auto));
  grid-template-areas:
    "kill spe1 death spe2 assist icon"
    "average average average kill-assist kill-assist kill-assist";

  justify-content: center;

  margin: auto;
  margin-top: 0rem;
  align-items: center;

  > .kill {
    grid-area: kill;
  }

  > .death {
    grid-area: death;
  }

  > .assist {
    grid-area: assist;
  }

  > .icon {
    grid-area: icon;
  }

  > .average {
    grid-area: average;
    font-size: minmax(0.5rem, auto);
    margin-right: 0.2rem;
  }

  > .kill-assist {
    grid-area: kill-assist;
    font-size: minmax(0.5rem, auto);
    margin-left: 0.2rem;
  }
`;

export const Icon = styled.img`
  object-fit: cover;
  width: ${(props) => String(props.size) + "px"};
  height: ${(props) => String(props.size) + "px"};
  filter: invert(85%) sepia(50%) saturate(1000%) hue-rotate(130deg) brightness(95%) contrast(50%);
`;
