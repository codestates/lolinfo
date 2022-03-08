import React, { useEffect } from "react";
import styled from "styled-components";
import UserProfile from "./pageComponents/UserProfile";
import RecentChart from "./pageComponents/RecentChart";
import RecentGameLog from "./pageComponents/RecentGameLog";
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from "../store/GameProfile";
import { getRecord } from "../store/GameRecord";

const Content = styled.div`
  display: grid;
  background-color: #fff;
  margin: 0.5rem 0.5rem 0rem 0.5rem;
  justify-content: center;

  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  font-weight: 600;
`;

const BoxWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 3fr) minmax(auto, 8fr);
  grid-template-rows: minmax(auto, 1fr);
  grid-template-areas: "RecentChart RecentGameLog";

  background-color: ${(props) => props.theme.recordBgColor};
  padding: 1rem 0rem 3rem 0rem;

  @media all and (max-width: ${(props) => props.theme.recordBoxOneCol}) {
    grid-template-columns: minmax(auto, 1fr);
    grid-template-areas: "RecentGameLog";
    padding: 1rem 1rem 3rem 1rem;
  }

  > .RecentChart {
    grid-area: RecentChart;
  }

  > .RecentGameLog {
    grid-area: RecentGameLog;
  }
`;

const LogWrapper = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: minmax(1fr, auto);
  grid-template-rows: repeat(auto-fill, minmax(80px, 1fr));
  flex-direction: column;
  gap: 1rem;

  background-color: ${(props) => props.theme.recordBgColor};
`;
function RecordPage() {
  // const { data: profile } = useSelector((state) => state.gameProfile);
  const { data: record } = useSelector((state) => state.gameRecord);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log("profile:::", profile);
  // }, [profile]);
  // useEffect(() => {
  //   console.log("record:::", record);
  // }, [record]);

  // useEffect(() => {
  //   console.log("temp=", temp);
  // }, [temp]);
  useEffect(() => {
    // const profileUrl = "http://localhost:80/games/player?nickname=";
    // dispatch(getProfile("get", profileUrl, "고양이"));

    const matchUrl = "http://localhost:80/games/match?nickname=";
    dispatch(getRecord("get", matchUrl, "고양이"));
  }, [dispatch]);

  if (record.loading) return <div>로딩중...</div>;
  if (!record.data) return <div>data null!...</div>;
  let temp = {};
  let user = "고양이";
  for (let i = 1; i < record.data.length; i++) {
    if (!temp.gameDuration) temp.gameDuration = [];
    temp.gameDuration.push(record.data[i].info.gameDuration);
    if (!temp.gameMode) temp.gameMode = [];
    temp.gameMode.push(record.data[i].info.gameMode);
    //여기서 서머너이름에 따른 경기를 찾는다
    let aux = record.data[i].info.participants;
    for (let j = 0; j < aux.length; j++) {
      if (aux[j].summonerName === user) {
        console.log(aux[j]);
        if (!temp.assists) temp.assists = [];
        temp.assists.push(aux[j].assists);
        if (!temp.championName) temp.championName = [];
        temp.championName.push(aux[j].championName);
        if (!temp.championId) temp.championId = [];
        temp.championId.push(aux[j].championId);
        if (!temp.championName) temp.championName = [];
        temp.championName.push(aux[j].championName);
        if (!temp.deaths) temp.deaths = [];
        temp.deaths.push(aux[j].deaths);
        if (!temp.goldEarned) temp.goldEarned = [];
        temp.goldEarned.push(aux[j].goldEarned);
        if (!temp.item) temp.item = [];
        temp.item.push([aux[j].item0, aux[j].item1, aux[j].item2, aux[j].item3, aux[j].item4, aux[j].item5, aux[j].item6]);
        if (!temp.kills) temp.kills = [];
        temp.kills.push(aux[j].kills);
        if (!temp.profileIcon) temp.profileIcon = [];
        temp.profileIcon.push(aux[j].profileIcon);
        if (!temp.teamId) temp.teamId = [];
        temp.teamId.push(aux[j].teamId);
        if (!temp.win) temp.win = [];
        temp.win.push(aux[j].win);
        if (!temp.summonerspell) temp.summonerspell = [];
        temp.win.push([aux[j].summoner1Id, aux[j].summoner2Id]);
      }
    }

    //   summonerName;
    //   if (!temp.gameDuration) temp.gameDuration = [];
    //   temp.gameDuration.push(record.data[i].info.gameDuration);
  }
  console.log(temp);
  return (
    <div>
      <Content>
        {/* <UserProfile /> */}
        <BoxWrapper name="BoxWrapper">
          <RecentChart className="RecentChart" />
          <div>
            <LogWrapper className="RecentGameLog">
              <RecentGameLog />
              <RecentGameLog />
              <RecentGameLog />
              <RecentGameLog />
              <RecentGameLog />
              <RecentGameLog />
              <RecentGameLog />
              <RecentGameLog />
              <RecentGameLog />
            </LogWrapper>
          </div>
        </BoxWrapper>
      </Content>
    </div>
  );
}

export default RecordPage;
