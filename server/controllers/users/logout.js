module.exports = {
  post: (req, res) => {
    if (req.body.email === undefined) {
      return res.status(400).send('Not Enough Data');
    }

    res.status(205).send('Logged out successfully');
  },
};
