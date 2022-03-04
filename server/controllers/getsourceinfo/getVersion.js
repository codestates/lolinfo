require('dotenv').config();
const axios = require('axios')
module.exports = async()=>{
        let data=await axios.get('https://ddragon.leagueoflegends.com/api/versions.json')
        // console.log(data.data[0])
        // res.status(200).send({lastestVersion:data.data[0]})
        return data.data[0]
}
