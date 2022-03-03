import React from 'react';
import styled from 'styled-components';
const ChampWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: repeat(4, auto);
  justify-items: center;
  align-items: center;

  > .champ-icon {
    object-fit: cover;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    grid-column: 2/4;
    grid-row: 2/4;

    border: 2px solid #018795;
    box-shadow: inset 0px 0px 2px 5px #018795;
  }

  > .champ-icon.win {
    border: 2px solid #018795;
    box-shadow: inset 0px 0px 2px 5px #018795;
  }

  > .champ-icon.lose {
    border: 2px solid #dc143c;
    box-shadow: inset 0px 0px 2px 5px #dc143c;
  }

  > .champ-level {
    position: relative;
    top: -4px;
    left: -1px;
    width: 15px;
    height: 13px;
    background-color: #24292e;
    border-radius: 100%;

    grid-column: 3/4;
    grid-row: 3/4;

    color: white;
    font-size: 7px;
    font-weight: 2;
  }
`;
function ChampProfile() {
  return (
    <ChampWrapper>
      <img className="champ-icon " src="https://ddragon.leagueoflegends.com/cdn/11.20.1/img/champion/Seraphine.png" alt="champicon" />
      <span className="champ-level">{10}</span>
    </ChampWrapper>
  );
}

export default ChampProfile;