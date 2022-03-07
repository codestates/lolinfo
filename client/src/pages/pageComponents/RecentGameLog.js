import React from 'react';
import styled from 'styled-components';
import RecentGameResult from './gameLogComponents/RecentGameResult';
import ChampProfile from './gameLogComponents/ChampProfile';
import Skill from './gameLogComponents/Skill';
import KDA from './gameLogComponents/KAD';
import Etc from './gameLogComponents/Etc';
import DropInfo from './gameLogComponents/DropInfo';

const LogWrapper = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(auto, 1fr));
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const RecentGameWrapper = styled.div`
  display: grid;

  grid-template-columns: minmax(2rem, auto) minmax(2rem, auto) minmax(2rem, auto) minmax(4rem, auto) minmax(4rem, auto) minmax(0.2rem, auto);
  grid-template-rows: repeat(1, minmax(2.5rem, auto));
  grid-template-areas: 'GameResult ChampProfile Skill KDA Etc DropInfo';

  background: #aedce1;
  width: 100%;
  height: 11vh;
  margin: 0;

  > .GameResult {
    grid-area: GameResult;
  }
  > .ChampProfile {
    grid-area: ChampProfile;
  }
  > .Skill {
    grid-area: Skill;
  }
  > .KDA {
    grid-area: KDA;
  }
  > .Etc {
    grid-area: Etc;
  }

  > .DropInfo {
    justify-content: flex-end;
  }
`;

function RecentGameLog() {
  return (
    <LogWrapper name="LogWrapper">
      <RecentGameWrapper name="RecentGameWrapper">
        <RecentGameResult className="GameResult" />
        <ChampProfile className="ChampProfile" />
        <Skill className="Skill" />
        <KDA className="KDA" />
        <Etc className="Etc" />
        <DropInfo />
      </RecentGameWrapper>
    </LogWrapper>
  );
}

export default RecentGameLog;
