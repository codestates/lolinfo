const { User } = require("../../models/index");
const { generateAccessToken } = require("../tokenFunction/index");
const createHashedPassword = require("../../modules/createHashedPassword");

module.exports = {
  post: async (req, res) => {
    const { name, email, password: reqPassword } = req.body;
    if (email === undefined || reqPassword === undefined || name === undefined) {
      return res.status(406).send("insufficient parameters supplied");
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
      // userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3kiVpzQisF4m8TU_1jv9xFho9z2g-XRyMKg&usqp=CAU",
      salt,
    });
    res.status(201).json({
      message: `You have registered your own ID: ${make.id}`,
      id: make.id,
    });
  },
};
