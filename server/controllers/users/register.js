const { User } = require("../../models/index");
const { generateAccessToken } = require("../tokenFunction/index");
const createHashedPassword = require("../../modules/createHashedPassword");

module.exports = {
  post: async (req, res) => {
    const { name, email, password: reqPassword } = req.body;
    if (email === undefined || reqPassword === undefined || name === undefined) {
      return res.status(401).send("insufficient parameters supplied");
    }
    let find = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (find) {
      return res.status(401).send("An email already exists");
    }
    const { password: encryptPassword, salt } = await createHashedPassword(reqPassword);
    const make = await User.create({
      email: email,
      password: encryptPassword,
      name: name,
      salt,
    });
    res.status(201).json({
      message: `You have registered your own ID: ${make.id}`,
      id: make.id,
    });
  },
};
