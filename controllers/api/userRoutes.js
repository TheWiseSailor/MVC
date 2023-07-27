const router = require("express").Router();
const { User } = require("../../models");

// Create a new user
router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);
    req.session.save(() => {
      req.session.logged_in = true;
      req.session.user_id = userData.id;
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login User
// router.post("/session", async (req, res) => {
//   try {
//     // ... (your existing login logic)

//     // Set the session variables based on the logged-in user
//     req.session.user_id = userData.id;
//     req.session.logged_in = true;

//     res.json({ user: userData, message: "You are now logged in!" });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

router.post("/session", async (req, res) => {
  try {
    // TODO: Add a comment describing the functionality of this expression
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    // TODO: Add a comment describing the functionality of this expression
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    // TODO: Add a comment describing the functionality of this method
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});
router.post("/logout", (req, res) => {
  try {
    if (req.session.logged_in) {
      // Clear the session variables
      req.session.user_id = null;
      req.session.logged_in = false;

      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
