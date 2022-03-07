require('dotenv').config();
const axios = require('axios');
module.exports = async(nickname)=>{
    const encode=(str)=>encodeURIComponent(str).replace(/'/g,"%27").replace(/"/g,"%22");  
    console.log(encode(nickname))
    let data=await axios.get(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`, {
        headers: {"X-Riot-Token": process.env.APIKEY}
    });
    // console.log(data.data[0])
    // res.status(200).send({lastestVersion:data.data[0]})
    return data.data[0]
}
