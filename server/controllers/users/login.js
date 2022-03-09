const { User } = require("../../models/index");
const { generateAccessToken, sendAccessToken } = require("../tokenFunction/index");
const makePasswordHashed = require("../../modules/makePasswordHashed");
module.exports = {
  post: async (req, res) => {
    if (req.body.email === undefined || req.body.password === undefined) {
      return res.status(401).send("please check your email or password again");
    }
    const { email, password } = req.body;
    //암호화 코드 작성
    const findPassword = await makePasswordHashed(email, password);
    if (findPassword === undefined) {
      return res.status(401).send("please check your email or password again");
    }
    const Value = await User.findOne({
      where: {
        email: email,
        password: findPassword,
      },
    });
    if (!Value) {
      // cant find
      return res.status(401).send("please check your email or password again");
    }
    const { id, name, createdAt, userImg } = Value.dataValues;
    if (Value.dataValues === undefined) {
      return res.status(401).send("please check your email or password again");
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
