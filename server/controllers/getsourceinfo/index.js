// require("dotenv").config();
// const axios = require("axios");
// module.exports = {
//     getMatchlist: async (puuid, int1 = 0, int2 = 20) => {
//         let data = await axios.get(`https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=${int1}&count=${int2}`, {
//             headers: { "X-Riot-Token": process.env.API || "RGAPI-5b4398c7-9bcb-479d-931c-22d4a24cc71c" },
//         });
//         return data.data;
//     },
//     getPuuid: async (nickname) => {
//         let encodedName = encodeURI(nickname);
//         let data = await axios.get(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${encodedName}`, {
//             headers: { "X-Riot-Token": process.env.API || "RGAPI-5b4398c7-9bcb-479d-931c-22d4a24cc71c" },
//         });
//         return data;
//     },
//     getVersion: async () => {
//         let data = await axios.get("https://ddragon.leagueoflegends.com/api/versions.json");
//         return data.data[0];
//     },
// };
//advenced
