const router = require("express").Router();
const { User, Post } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
  } else {
    // Render the login page
    res.render("login");
  }
});

router.get("/signup", (req, res) => {
  // Render the signup page
  res.render("signup");
});

router.get("/profile", withAuth, async (req, res) => {
  try {
    const user = await User.findByPk(req.session.user_id, {
      include: { model: Post, as: "posts" },
    });
    if (!user) {
      res.redirect("/");
      return;
    }
    res.render("profile", {
      user: user.toJSON(),
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/profile/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    if (!postData) {
      res.status(404).json({ message: "No post with this id!" });
      return;
    }
    res.render("profile", postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
