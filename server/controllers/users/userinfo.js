const { User } = require("../../models/index");
const createHashedPassword = require("../../modules/createHashedPassword");
const makePasswordHashed = require("../../modules/makePasswordHashed");

module.exports = {
  get: async (req, res) => {
    // 값 보내기
    const name = req.query.name;

    if (!name) return res.status(400).send("name required");

    const find = await User.findOne({
      where: {
        name,
      },
      attributes: { exclude: ["password", "salt"] },
    });

    if (!find) return res.status(404).send("Not Found");

    return res.status(200).send({
      data: find,
      message: "user infomation found",
    });
  },
  put: async (req, res) => {
    // 수정
    try {
      const email = req.body.email;
      console.log(req.body.name)
      if (req.body.name) {
        await User.update({ name: req.body.name }, { where: { email: email } });
        return res.status(200).send("name has been successfully replaced");
      }
      //패스워드 암호화

      if (req.body.password) {
        const { email, password: plainPassword, changedPassword } = req.body;
        //암호화 코드 작성
        const findPassword = await makePasswordHashed(email, plainPassword);
        const Value = await User.findOne({
          where: {
            email: email,
            password: findPassword,
          },
        });
        if (!Value) {
          // cant find
          return res.status(400).send("please check your email or password again")
        }
        const encryptPassword = await createHashedPassword(changedPassword);
        await User.update({ password: encryptPassword.password, salt: encryptPassword.salt }, { where: { email: email } });
        return res.status(200).send("Password has been successfully replaced");
      }
    } catch (err) {
      console.log(err);
    }
  },
};
