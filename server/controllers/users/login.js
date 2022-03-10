const { User } = require("../../models/index");
const { generateAccessToken, sendAccessToken } = require("../tokenFunction/index");
const makePasswordHashed = require("../../modules/makePasswordHashed");
module.exports = {
  post: async (req, res) => {
    if (req.body.email === undefined || req.body.password === undefined) { //바디에 충분한 데이터가 없다.
      return res.status(406).send("406 Not Acceptable");
    }
    const { email, password } = req.body;
    //암호화 코드 작성
    const findPassword = await makePasswordHashed(email, password);
    if (findPassword === undefined) { //해당 이메일이 없다.
      return res.status(404).send("Not Found Email");
    }
    const Value = await User.findOne({
      where: {
        email: email,
        password: findPassword,
      },
    });
    if (!Value) {//비밀번호가 틀리다
      // cant find
      return res.status(404).send("Not Found Password");
    }
    const { id, name, createdAt, userImg } = Value.dataValues;
    if (Value.dataValues === undefined) {
      return res.status(401).send("NOT AUTHORIZED");
    }

    console.log("Value", Value);
    const payload = {
      id,
      name,
      email,
      userImg,
      createdAt,
    };

    const accessToken = generateAccessToken(payload);
    // const refreshToken = generateRefreshToken();
    // sendRefreshToken(res, refreshToken);

    payload.accessToken = accessToken;
    sendAccessToken(res, payload);
  },
};
