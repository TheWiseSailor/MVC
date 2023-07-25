//requiring all the things needed
const router = require("express").Router();
const { User, Comments, Post } = require("../models");
const withAuth = require("../utils/auth");
//this will be a get method to make sur the login page renders
router.get("/login", (req, res) => {
  //if a session already exists then it will just rediret the user
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
});
//this gets the /sign up which then renders the signup page
router.get("/signup", async (req, res) => {
  res.render("signup", {
    logged_in: req.session.logged_in,
  });
});
//this will get the/profile and render the profile page, so on and so on
router.get("/profile", withAuth, async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/");
    return;
  }
  try {
    //this jsut finds the user by their primary key and include their post/passes the user data to the templates... etc
    const user = await User.findByPk(req.session.user_id, { include: "posts" });
    res.render("profile", {
      user: user.toJSON(),
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
//this gets the profile id and renders a users profile page based on their id
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
