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

export function extractData(payload, schBarInput = "") {
  let needs = [];
  let chartData = {};
  let totalKill = [];
  let err = false;

  if (payload !== null) {
    for (let i = 1; i < payload.length; ++i) {
      if (payload[i] === null) break;
      const { gameType, gameDuration, gameId } = payload[i].info;
      let gameLen = gameDuration;
      let blueTotalKill = 0,
        redTotalKill = 0;

      let date = new Date(payload[i].info.gameCreation);
      let month = date.toString().split(" ")[1];
      let day = date.toString().split(" ")[2];
      let convertSTN = (m) => {
        let result = "";
        ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].forEach((x, i) => (x === m ? (result = i + 1) : 0));
        return result;
      };

      month = convertSTN(month);
      day = Number(day);
      // console.log("월=", convertSTN(month));
      // console.log("일=", Number(day));

      for (let j = 0; j < payload[i].info.participants.length; ++j) {
        const { queueId } = payload[i].info;
        let { kills, teamId, summonerName } = payload[i].info.participants[j];
        summonerName = summonerName.replace(/\s/gi, "");
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
  } else {
    err = true;
  }
  return { chartData, needs, err };
}

export function extractProfileData(payload, needs, schBarInput) {
  if (needs === undefined) return false;
  if (payload === null) return false;

  let profileData = {
    leaguePoints: 0,
    wins: 0,
    losses: 0,
    tier: "BRONZE",
    rank: "UNRANK",
    queueType: 410,
    profileIcon: 10,
    summonerName: `${schBarInput}`,
  };

  if (payload !== null) {
    if (payload[0].length !== 0) {
      const { leaguePoints: lp, wins: w, losses: l, tier: t, rank: r, queueType: q } = payload[0][0];
      profileData.leaguePoints = lp;
      profileData.wins = w;
      profileData.losses = l;
      profileData.tier = t;
      profileData.rank = r;
      profileData.queueType = q;
    }

    if (needs.length !== 0) {
      const { profileIcon: icon, summonerName: name } = needs[0];
      profileData.profileIcon = icon;
      profileData.summonerName = name;
    }

    return profileData;
  }
}

export const chapmName = [
  "가렌",
  "갈리오",
  "갱플랭크",
  "그라가스",
  "그레이브즈",
  "그웬",
  "나르",
  "나미",
  "나서스",
  "노틸러스",
  "녹턴",
  "누누와윌럼프",
  "니달리",
  "니코",
  "다리우스",
  "다이애나",
  "드레이븐",
  "라이즈",
  "라칸",
  "람머스",
  "럭스",
  "럼블",
  "레나타글라스트",
  "레넥톤",
  "레오나",
  "렉사이",
  "렐",
  "렝가",
  "루시안",
  "룰루",
  "르블랑",
  "리신",
  "리산드라",
  "릴리아",
  "마스터",
  "마오카이",
  "말자하",
  "말파이트",
  "모데카이저",
  "모르가나",
  "문도박사",
  "미스포츈",
  "바드",
  "바루스",
  "바이",
  "베이가",
  "베인",
  "벡스",
  "벨코즈",
  "볼리베어",
  "브라움",
  "브랜드",
  "블라디미르",
  "블리츠크랭크",
  "비에고",
  "빅토르",
  "뽀삐",
  ,
  "사미라",
  "사이온",
  "사일러스",
  "샤코",
  "세나",
  "세라핀",
  "세트",
  "세주아니",
  "소나",
  "소라카",
  "쉔",
  "쉬바나",
  "스웨인",
  "스카너",
  "시비르",
  "신 짜오",
  "신드라",
  "신지드",
  "쓰레쉬",
  "아리",
  "아무무",
  "아우렐리온 솔",
  "아이번",
  "아지르",
  "아칼리",
  "아크샨",
  "아트록스",
  "아펠리오스",
  "알리스타",
  "애니",
  "애니비아",
  "애쉬",
  "야스오",
  "에코",
  "엘리스",
  "오공",
  "오른",
  "오리아나",
  "올라프",
  "요네",
  "요릭",
  "우디르",
  "우르곳",
  "워윅",
  "유미",
  "이렐리아",
  "이블린",
  "이즈리얼",
  "일라오이",
  "자르반 4세",
  "자야",
  "자이라",
  "자크",
  "잔나",
  "잭스",
  "제드",
  "제라스",
  "제리",
  "제이스",
  "조이",
  "직스",
  "진",
  "질리언",
  "징크스",
  "초가스",
  "카르마",
  "카밀",
  "카사딘",
  "카서스",
  "카시오페아",
  "카이사",
  "카직스",
  "카타리나",
  "칼리스타",
  "케넨",
  "케이틀린",
  "케일",
  "케인",
  "코그모",
  "코르키",
  "퀸",
  "클레드",
  "키아나",
  "킨드레드",
  "타릭",
  "탈론",
  "탈리야",
  "탐 켄치",
  "트런들",
  "트리스타나",
  "트린다미어",
  "트위스티드 페이트",
  "트위치",
  "티모",
  "파이크",
  "판테온",
  "피들스틱",
  "피오라",
  "피즈",
  "하이머딩거",
  "헤카림",
];
