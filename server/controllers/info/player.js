const infoAll = require("../getsourceinfo/infoAll");
module.exports = {
  get: async (req, res) => {
    let nickname = req.query.nickname;
    let playerInfo = await infoAll.nametoUserInfo(nickname);
    if (!playerInfo) return res.status(404).send({ message: "Data not found - player not found", status_code: 404 });
    let playerGameinfo = await infoAll.onePlayerInfo(playerInfo.id);
    if (!playerGameinfo) return res.status(403).send({ message: "Forbidden", status_code: 403 });
    res.status(200).send(...playerGameinfo);
  },
};
