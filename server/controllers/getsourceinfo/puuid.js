require("dotenv").config();
const axios = require("axios");
module.exports = async (nickname) => {
    let encodedName = encodeURI(nickname);
    let data = await axios.get(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${encodedName}`, {
        headers: { "X-Riot-Token": process.env.API || "RGAPI-5b4398c7-9bcb-479d-931c-22d4a24cc71c" },
    });
    return data;
};
