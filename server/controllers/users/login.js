const { User } = require('../../models/index')
const {
  generateAccessToken,
  sendAccessToken, } = require('../tokenFunction/index');
const makePasswordHashed = require('../../modules/makePasswordHashed')
module.exports = {
  post: async (req, res) => {
    const { email, password: plainPassword } = req.body;
    //암호화 코드 작성
    const findPassword = await makePasswordHashed(email, plainPassword)
    const Value = await User.findOne({
      where: {
        email: email,
        password: findPassword,
      },
    })
    if (!Value) {
      // cant find
      return res.status(401).send("please check your email or password again")
    }
    const { id, name, createdAt } = Value.dataValues
    const payload = {
      id,
      name,
      email,
      createdAt
    }
    const accessToken = generateAccessToken(payload);
    // const refreshToken = generateRefreshToken();
    // sendRefreshToken(res, refreshToken);
    sendAccessToken(res, accessToken);
  }
}