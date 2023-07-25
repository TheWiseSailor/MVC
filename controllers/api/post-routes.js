const router = require("express").Router();
const { Post, User } = require("../../models");
const withAuth = require("../../utils/auth");

//this deleets the post
router.delete;
"/:id",
  withAuth,
  async (req, res) => {
    try {
      const postData = await Post.destroy({
        title,
        description,
        userId: user.id,
      });
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  };
//post feature
router.post("/", withAuth, async (req, res) => {
  const { title, description } = req.body;
  try {
    const user = await User.findByPk(req.session.user_id);
    if (!user) {
      return res.sendStatus(401);
    }
    const newPost = await Post.create({
      title,
      description,
      userId: user.id,
    });
    res.status(200).json(newPost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
//
