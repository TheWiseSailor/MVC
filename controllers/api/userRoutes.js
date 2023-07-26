//require bla bla bla
//Create new user/make login/logout
const router = require("express").Router();
const { User } = require("../../models");
router.post("/", async (req, res) => {
  try {
    //this logs the console request to the body and sees what data is being received
    console.log(req.body);
    //create new user
    const userData = await User.create(req.body);
    req.session.save(() => {
      //saves the session
      req.session.logged_in = true;
      req.session.user_id = userData.id;
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
//login post
router.post("/session", async (req, res) => {
  try {
    //takes the mail and pass from the req body
    const { email, password } = req.body;
    //cehcks and sees if a user's email provided exists some where in the database
    const user = await User.findOne({ where: { email } });
    //this just saves the session data and responds with data
    if (user && (await user.checkPassword(password))) {
      req.session.save(() => {
        req.session.logged_in = true;
        req.session.user_id = user.id;
        res.status(200).json(user);
      });
      return;
    }
    res.status(401).send("Invalid login credentials!");
  } catch (err) {
    res.status(500).json(err);
  }
});

//logout
//checks and sees if user is logged in and if so that means session is active
router.delete("/session", async (req, res) => {
  try {
    if (req.session.logged_in) {
      //destroys sesssion to log out and return success
      req.session.destroy(() => res.status(204).end());
    } else {
      res.status(204).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
