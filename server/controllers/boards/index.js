const { Board, User } = require("../../models");

module.exports = {
  newBoard: async (req, res) => {
    //validation
    const { title, body, userId } = req.body;
    if (!title || !body || !userId) {
      res.status(400).send({
        message: "Bad Request",
      });
      return;
    }

    // userId validation
    // const user = await User.findByPk(userId);
    // if (user === null) {
    //   res.status(400).send('Bad Request: user obscure');
    //   return;
    // }

    //token validation
    // TODO:
    //

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
