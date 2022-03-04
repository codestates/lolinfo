const axios = require('axios').default
const gv=require('../getsourceinfo/getVersion')
const gp=require('../getsourceinfo/getPuuid')
// "KR_5788449253"
module.exports=async(req,res)=>{
    console.log(req.query)
    // let puuid=gp()
    let version=await gv()
    // console.log(process.env.APIKEY)
    // axios.get()
    // https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/{puuid}?start=int1&count=int2
    
    res.status(201).send({version})
}