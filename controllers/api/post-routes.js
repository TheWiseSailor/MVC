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
