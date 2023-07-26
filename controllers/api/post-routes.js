const router = require("express").Router();
const { User } = require("../../models");

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

router.post("/session", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user && (await user.checkPassword(password))) {
      req.session.save(() => {
        req.session.logged_in = true;
        req.session.user_id = user.id;
        res.status(200).json(user);
      });
    } else {
      res.status(401).send("Invalid login credentials!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/session", async (req, res) => {
  try {
    if (req.session.logged_in) {
      req.session.destroy(() => res.status(204).end());
    } else {
      res.status(204).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
