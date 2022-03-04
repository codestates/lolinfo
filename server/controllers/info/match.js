const axios = require("axios").default;
const gv = require("../getsourceinfo/version");
const gp = require("../getsourceinfo/puuid");
const gl = require("../getsourceinfo/matchList");
// "KR_5788449253"
module.exports = async (req, res) => {
    let nickname = req.query.nickname;
    let [int1, int2] = [req.query.int1, req.query.int2];
    let puuid = await gp(nickname);
    let version = await gv();
    let matchList = await gl(puuid.data.puuid, int1, int2); //두번째 인자 int1 세번째 인자 int2

    if (!matchList) return res.status(400).send({});

    return res.status(200).send({ matchList });
};
