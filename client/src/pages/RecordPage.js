import React, { useEffect } from "react";
import styled from "styled-components";
import UserProfile from "./pageComponents/UserProfile";
import RecentChart from "./pageComponents/RecentChart";
import RecentGameLog from "./pageComponents/RecentGameLog";
import { useSelector, useDispatch } from "react-redux";
import { getRecord } from "../store/GameRecord";
import Loading from "./Loading";
import { profileDummyData, dummyChartData } from "../resource/RecordPagehelp";
import axios from "axios";
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

function RecordPage({ setHistory }) {
  const { data: record } = useSelector((state) => state.gameRecord);
  axios.defaults.withCredentials = false;
  // console.log("record", record);
  const dispatch = useDispatch();

  const userName = "나무무";
  useEffect(() => {
    setHistory(true);
  }, []);

  useEffect(() => {
    if (userName === "") return;

    const matchUrl = process.env.REACT_APP_API_URL + "games/match?nickname=";
    dispatch(getRecord("get", matchUrl, userName));
  }, [dispatch]);

  const needs = [];
  let profileData = {};
  let chartData = {};
  let isActiveDummy = false;

  if (userName !== "") {
    if (record.loading) return <Loading />;
    if (!record.data) return <div>data null!...</div>;
    if (record.error) return <div>`error !!`</div>;
    if (!record.loading) {
      if (record.data[0].length !== 0) {
        extractData();
        extractProfileData();
      } else {
        isActiveDummy = true;
      }
    }
  } else {
    isActiveDummy = true;
  }

  function extractData() {
    let totalKill = [];
    for (let i = 1; i < record.data.length; ++i) {
      const { gameType, gameDuration, gameId } = record.data[i].info;
      let gameLen = gameDuration;
      let blueTotalKill = 0,
        redTotalKill = 0;

      let date = new Date(record.data[i].info.gameCreation);
      let month = date.toString().split(" ")[1];
      let day = date.toString().split(" ")[2];
      let convertSTN = (m) => {
        let result = "";
        let temp = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].forEach((x, i) => (x === m ? (result = i + 1) : 0));
        return result;
      };

      month = convertSTN(month);
      day = Number(day);
      // console.log("월=", convertSTN(month));
      // console.log("일=", Number(day));

      for (let j = 0; j < record.data[i].info.participants.length; ++j) {
        const { queueId } = record.data[i].info;
        const { kills, teamId, summonerName } = record.data[i].info.participants[j];
        if (teamId === 100) {
          blueTotalKill += kills;
        } else {
          redTotalKill += kills;
        }
        if (summonerName === userName) {
          const {
            profileIcon,
            summonerName,
            summonerLevel,
            win,
            kills,
            deaths,
            assists,
            teamId,
            championId,
            champLevel,
            championName,
            quadraKills,
            pentaKills,
            tripleKills,
            doubleKills,
            item0,
            item1,
            item2,
            item3,
            item4,
            item5,
            item6,
            goldEarned,
            totalMinionsKilled,
          } = record.data[i].info.participants[j];
          const oneGameTime = (gameLen / 60).toFixed(2);
          gameLen = parseInt(gameLen / 60);
          const item = [item0, item1, item2, item3, item4, item5, item6];
          needs.push({
            gameId,
            gameLen,
            profileIcon,
            summonerName,
            summonerLevel,
            win,
            kills,
            deaths,
            assists,
            teamId,
            oneGameTime,
            gameType,
            championId,
            champLevel,
            quadraKills,
            pentaKills,
            tripleKills,
            doubleKills,
            championName,
            item,
            goldEarned,
            totalMinionsKilled,
            month,
            day,
            queueId,
          });
        }
      }

      totalKill.push({ blueTotalKill, redTotalKill });
      // ("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
    }

    for (let i = 0; i < needs.length; ++i) {
      if (needs[i].teamId === 100) {
        needs[i].totalKill = totalKill[i].blueTotalKill;
      } else {
        needs[i].totalKill = totalKill[i].redTotalKill;
      }
      // console.log("레코드페이지 토탈킬", totalKill[i]);
    }

    let k = 0,
      d = 0,
      a = 0;
    let blueRate = 0;
    let RedRate = 0;
    let rate25 = 0,
      rate30 = 0,
      rate35 = 0,
      rate35more = 0;
    let totalWin = 0,
      totalLose = 0;
    for (let i = 0; i < needs.length; ++i) {
      k += needs[i].kills;
      d += needs[i].deaths;
      a += needs[i].assists;

      if (needs[i].teamId === 100 && needs[i].win) {
        ++blueRate;
      }

      if (needs[i].teamId === 200 && needs[i].win) {
        ++RedRate;
      }

      if (needs[i].win) {
        ++totalWin;
        if (needs[i].gameLen <= 25) ++rate25;
        else if (needs[i].gameLen > 25 && needs[i].gameLen <= 30) ++rate30;
        else if (needs[i].gameLen > 30 && needs[i].gameLen < 35) ++rate35;
        else if (needs[i].gameLen > 35) ++rate35more;
      }
    }

    blueRate = (blueRate / needs.length) * 100;
    RedRate = (RedRate / needs.length) * 100;
    rate25 = (rate25 / needs.length) * 100;
    rate30 = (rate30 / needs.length) * 100;
    rate35 = (rate35 / needs.length) * 100;
    rate35more = (rate35more / needs.length) * 100;
    const totalGame = needs.length;
    totalLose = totalGame - totalWin;
    const victoryRate = (totalWin / totalGame) * 100;

    const kp = calcKP();
    chartData = { k, d, a, blueRate, RedRate, rate25, rate30, rate35, rate35more, totalGame, totalWin, totalLose, victoryRate, kp };
  }

  function calcKP() {
    let recentKP = 0;
    let temp = 0;
    for (let i = 0; i < needs.length; i++) {
      const { totalKill, kills, assists } = needs[i];
      temp += (kills + assists) / totalKill;
      needs[i].kp = parseInt(temp * 100);
      recentKP = temp;
    }

    return (recentKP = parseInt((recentKP / needs.length) * 100));
  }

  function extractProfileData() {
    const { leaguePoints, wins, losses, tier, rank, queueType } = record.data[0][0];
    const { profileIcon, summonerName } = needs[0];

    profileData = {
      leaguePoints,
      wins,
      losses,
      tier,
      rank,
      queueType,
      profileIcon,
      summonerName,
    };
  }

  return (
    <div>
      <Content>
        <UserProfile profileData={isActiveDummy ? profileDummyData : profileData} />
        <BoxWrapper name="BoxWrapper">
          <RecentChart className="RecentChart" chartData={isActiveDummy ? dummyChartData : chartData} />
          <div>
            {isActiveDummy ? null : (
              <LogWrapper className="RecentGameLog">
                {needs.map((v) => {
                  return <RecentGameLog key={v.gameId} data={v} />;
                })}
              </LogWrapper>
            )}
          </div>
        </BoxWrapper>
      </Content>
    </div>
  );
}

export default RecordPage;
