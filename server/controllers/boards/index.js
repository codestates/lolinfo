const { Board, User } = require("../../models");

module.exports = {
  newPost: async (req, res) => {
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

    const post = await Board.create({ title, body, userId });
    res.send({
      message: `Post Created: ${post.id}`,
      boardId: post.id,
    });
  },
  listPost: (req, res) => {
    // defaults: 0 to 25 post
    const { limit = 25, offset = 0 } = req.body;

    
  },
  deletePost: (req, res) => {},
};
