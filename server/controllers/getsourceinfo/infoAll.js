require("dotenv").config();
const axios = require("axios");
axios.defaults.headers.common["X-Riot-Token"] = process.env.API || "RGAPI-5b4398c7-9bcb-479d-931c-22d4a24cc71c";
module.exports = {
  matchList: async (puuid, int1 = 0, int2 = 20) => {
    let data = await axios.get(`https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=${int1}&count=${int2}`).catch((error) => console.log("Error in matchList call: ", error.message));
    return data.data;
  },
  nametoUserInfo: async (nickname) => {
    let data = await axios.get(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${encodeURI(nickname)}`).catch((error) => console.log("Error in nametoUserInfo call: ", error.message));
    return data.data;
    // accountId: 'rwn2FoZMusf0RvFue82yBUEjU0v0TMqPSlJYPw6UuYzp',
    // puuid: '12D2y7Ca2qarAVvzdVJKisptC9qf8LeunI_uXnZcKIgNtFK4E9cDO9YmtqkSqBAKzEdFCZvDqqNcig',
    // name: '삼다칼잡이',
    // profileIconId: 4379,
    // revisionDate: 1646103579000,
    // summonerLevel: 143
  },
  version: async () => {
    let data = await axios.get("https://ddragon.leagueoflegends.com/api/versions.json").catch((error) => console.log("Error in version call: ", error.message));
    return data.data[0];
  },
  oneMatchInfo: async (matchId) => {
    let data = await axios.get(`https://asia.api.riotgames.com/lol/match/v5/matches/${matchId}`).catch((error) => console.log("Error in oneMatchInfo call: ", error.message));
    return data.data;
  },
  onePlayerInfo: async (Id) => {
    let data = await axios.get(`https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${Id}`).catch((error) => console.log("Error in onePlayerInfo call: ", error.message));
    return data.data;
  },
};
