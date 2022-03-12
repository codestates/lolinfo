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

  background: ${(props) => (props.className === "win" ? "#22c4d560" : "#e5133c40")};
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

function RecentGameLog({ data }) {
  const {
    gameLen,
    profileIcon,
    summonerName,
    summonerLevel,
    teamId,
    championId,
    win,
    kills,
    deaths,
    assists,
    oneGameTime,
    gameType,
    champLevel,
    quadraKills,
    pentaKills,
    tripleKills,
    doubleKills,
    championName,
    item,
    goldEarned,
    totalKill,
    totalMinionsKilled,
    month,
    day,
    kp,
    queueId,
    mainRune,
    subRune,
    spell1,
    spell2,
  } = data;

  let result = "";
  if (win) {
    result = "win";
  } else {
    result = "lose";
  }

  const date = `${month}/${day}`;

  return (
    <RecentGameWrapper name="RecentGameWrapper" className={result}>
      <RecentGameResult className="GameResult" win={win} gameTime={oneGameTime} gameType={gameType} date={date} queueId={queueId} />
      <ChampProfile className="ChampProfile" win={win} chapmName={championName} champLevel={champLevel} />
      <Skill className="Skill" mainRune={mainRune} subRune={subRune} spell1={spell1} spell2={spell2} />
      <KDA className="KDA" kills={kills} deaths={deaths} assists={assists} quadraKills={quadraKills} pentaKills={pentaKills} tripleKills={tripleKills} doubleKills={doubleKills} kp={kp} />
      <Etc className="Etc" item={item} goldEarned={goldEarned} totalMinionsKilled={totalMinionsKilled} oneGameTime={oneGameTime} />
      <DropInfo className={`DropInfo ${result}`} result={result} />
    </RecentGameWrapper>
  );
}

export default RecentGameLog;
