const { Board, User } = require("../../models");
const { isAuthorized } = require("../tokenFunction");

module.exports = {
  newBoard: async (req, res) => {
    //validation
    const { title, body } = req.body;
    if (!title || !body) {
      res.status(400).send({
        message: "Bad Request",
      });
      return;
    }

    const auth = isAuthorized(req);

    if (auth === null) {
      return res.status(401).send({
        message: "Unauthorized token",
      });
    }
    console.log(auth);
    const userId = auth.id;

    // // userId validation - 로그인에서 이미 처리했음
    // const user = await User.findByPk(userId);
    // if (user === null) {
    //   res.status(400).send("Bad Request: user obscure");
    //   return;
    // }

    const post = await Board.create({ title, body, userId });
    res.send({
      message: `Board Created: ${post.id}`,
      boardId: post.id,
    });
  },
  listBoard: async (req, res) => {
    // defaults: 0 to 25 post

    const { offset, limit } = { offset: parseInt(req.query.offset), limit: parseInt(req.query.limit) };
    let payload = {};

    if (offset > 0) payload.offset = offset;
    if (limit > 0) payload.limit = limit;
    console.log(payload);

    try {
      const list = await Board.findAll(payload);
      res.status(200).send(list);
    } catch (error) {
      if (error) throw error;
    }
  },
  deleteBoard: async (req, res) => {
    const { id } = req.body;
    if (!id) {
      return res.status(400).send({
        message: "Bad Request",
      });
    }

    //token validation
    //TODO:
    //

    await Board.destroy({
      where: {
        id,
      },
    });

    res.status(200).send({
      message: `Post successfully deleted, ${id}`,
      boardId: id,
    });
  },
};
