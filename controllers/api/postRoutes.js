const router = require("express").Router();
const { Post, User } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  // ... (existing code for creating a new post)
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    // Find the post to be deleted
    const postData = await Post.findByPk(req.params.id);

    if (!postData) {
      res.status(404).json({ message: "No post with this id!" });
      return;
    }

    // Ensure that the logged-in user is the owner of the post
    if (postData.userId !== req.session.user_id) {
      res
        .status(403)
        .json({ message: "You are not authorized to delete this post!" });
      return;
    }

    // Delete the post
    await postData.destroy();

    res.status(200).json({ message: "Post deleted successfully!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
