const infoAll = require("../gamesource/infoAll");
module.exports = {
  get: async (req, res) => {
    let playerinfo = await infoAll.nametoUserInfo(req.query.nickname);
    if (!playerinfo || !playerinfo.puuid) return res.status(404).send({ message: "Data not found - match file not found", status_code: 404 });
    let matchList = await infoAll.matchList(playerinfo.puuid, req.query.int1, req.query.int2);
    if (!matchList) return res.status(403).send({ message: "Forbidden", status_code: 403 });
    let playerGameinfo = infoAll.onePlayerInfo(playerinfo.id);
    let temp = [];
    temp.push(playerGameinfo);
    for (let match of matchList) temp.push(infoAll.oneMatchInfo(match));
    return res.status(200).send(await Promise.all(temp));
  },
};
