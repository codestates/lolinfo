const infoAll = require("../getsourceinfo/infoAll");
module.exports = async (_, res) => {
  let version = await infoAll.version();
  res.status(200).send({ version });
};
