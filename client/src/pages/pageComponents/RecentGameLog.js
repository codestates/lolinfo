import React from "react";
import styled from "styled-components";
import RecentGameResult from "./gameLogComponents/RecentGameResult";
import ChampProfile from "./gameLogComponents/ChampProfile";
import Skill from "./gameLogComponents/Skill";
import KDA from "./gameLogComponents/KAD";
import Etc from "./gameLogComponents/Etc";
import DropInfo from "./gameLogComponents/DropInfo";

const RecentGameWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(1fr, auto)) repeat(2, minmax(fr, auto)) minmax(0.4fr, auto);
  /* grid-template-rows: repeat(auto-fill, minmax(1fr, 100px)); */
  grid-template-areas: "GameResult ChampProfile Skill KDA Etc DropInfo";

  background: #aedce1;
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
    <RecentGameWrapper name="RecentGameWrapper">
      <RecentGameResult className="GameResult" />
      <ChampProfile className="ChampProfile" />
      <Skill className="Skill" />
      <KDA className="KDA" />
      <Etc className="Etc" />
      <DropInfo className="DropInfo" />
    </RecentGameWrapper>
  );
}

export default RecentGameLog;
