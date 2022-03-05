const axios = require("axios");
const infoAll = require("../getsourceinfo/infoAll");
module.exports = async (req, res) => {
  let version = await infoAll.version();
  res.status(200).send({ version });
};
