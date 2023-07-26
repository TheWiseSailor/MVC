const router = require("express").Router();

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login", {
    layout: "main",
  });
});

router.get("/signup", async (req, res) => {
  res.render("signup", {
    layout: "main",
    logged_in: req.session.logged_in,
  });
});

router.get("/profile", withAuth, async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/login");
    return;
  }
  try {
    const user = await User.findByPk(req.session.user_id, { include: "posts" });
    res.render("profile", {
      user: user.toJSON(),
      logged_in: req.session.logged_in,
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
    res.render("profile", postData, {
      layout: "main",
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
