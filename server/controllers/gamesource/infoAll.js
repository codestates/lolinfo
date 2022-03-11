require("dotenv").config();
const axios = require("axios");
axios.defaults.headers.common["X-Riot-Token"] = process.env.API || "RGAPI-5b4398c7-9bcb-479d-931c-22d4a24cc71c";
axios.defaults.timeout = 15000;
module.exports = {
  matchList: async (puuid, int1 = 0, int2 = 10) => {
    let data = await axios.get(`https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=${int1}&count=${int2}`).catch((error) => console.log("Error in matchList call: ", error.message));
    if (data) return data.data;
  },
  nametoUserInfo: async (nickname) => {
    let temp;
    if (nickname.length === 2) temp = `${nickname[0]} ${nickname[1]}`;
    else temp = nickname;
    let data = await axios.get(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${encodeURI(temp)}`).catch((error) => console.log("Error in nametoUserInfo call: ", error.message));
    if (data) return data.data;
  },
  version: async () => {
    let data = await axios.get("https://ddragon.leagueoflegends.com/api/versions.json").catch((error) => console.log("Error in version call: ", error.message));
    if (data) return data.data[0];
  },
  oneMatchInfo: async (matchId) => {
    let data = await axios.get(`https://asia.api.riotgames.com/lol/match/v5/matches/${matchId}`).catch((error) => console.log("Error in oneMatchInfo call: ", error.message));
    if (data) return data.data;
  },
  onePlayerInfo: async (Id) => {
    let data = await axios.get(`https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${Id}`).catch((error) => console.log("Error in onePlayerInfo call: ", error.message));
    if (data) return data.data;
  },
};
