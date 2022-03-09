export const profileDummyData = {
  leaguePoints: 0,
  wins: 0,
  losses: 0,
  tier: "BRONZE",
  rank: "unRanked",
  queueType: "none",
  profileIcon: 0,
  summonerName: "none",
};

export const dummyChartData = { k: 0, d: 0, a: 0, blueRate: 100, RedRate: 100, rate25: 99, rate30: 99, rate35: 99, rate35more: 99, totalGame: 0, totalWin: 0, totalLose: 0, victoryRate: 0, kp: 0 };

export function extractData(payload, schBarInput = "고양이") {
  let needs = [];
  let chartData = {};
  let totalKill = [];
  for (let i = 1; i < payload.length; ++i) {
    if (payload[i] !== null && payload[i] !== undefined) {
      const { gameType, gameDuration, gameId } = payload[i].info;
      let gameLen = gameDuration;
      let blueTotalKill = 0,
        redTotalKill = 0;

      let date = new Date(payload[i].info.gameCreation);
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

      for (let j = 0; j < payload[i].info.participants.length; ++j) {
        const { queueId } = payload[i].info;
        const { kills, teamId, summonerName } = payload[i].info.participants[j];
        if (teamId === 100) {
          blueTotalKill += kills;
        } else {
          redTotalKill += kills;
        }
        if (summonerName === schBarInput) {
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
          } = payload[i].info.participants[j];
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
  const kp = calcKP();
  chartData = {
    k,
    d,
    a,
    blueRate,
    RedRate,
    rate25,
    rate30,
    rate35,
    rate35more,
    totalGame,
    totalWin,
    totalLose,
    victoryRate,
    kp,
  };

  return { chartData, needs };
}

export function extractProfileData(payload, needs) {
  const { leaguePoints, wins, losses, tier, rank, queueType } = payload[0][0];
  console.log(needs[0]);
  const { profileIcon, summonerName } = needs[0];

  let profileData = {
    leaguePoints,
    wins,
    losses,
    tier,
    rank,
    queueType,
    profileIcon,
    summonerName,
  };

  return profileData;
}
