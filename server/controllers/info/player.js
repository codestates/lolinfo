const axios = require("axios");
const infoAll = require("../getsourceinfo/infoAll");
module.exports = async (req, res) => {
  let nickname = req.query.nickname;
  let playerInfo = await infoAll.nametoUserInfo(nickname);
  let playerGameinfo = await infoAll.onePlayerInfo(playerInfo.id);
  res.status(200).send(...playerGameinfo);
};
