const infoAll = require("../getsourceinfo/infoAll");
module.exports = {
  get: async (_, res) => {
    let version = await infoAll.version();
    res.status(200).send({ version });
  },
};
