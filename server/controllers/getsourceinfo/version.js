require("dotenv").config();
const axios = require("axios");
module.exports = async () => {
    let data = await axios.get("https://ddragon.leagueoflegends.com/api/versions.json");
    return data.data[0];
};
