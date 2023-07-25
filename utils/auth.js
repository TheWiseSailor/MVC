//ok so this is basically so that if a operson is not logged in
//then it will just redirect them to the login page
const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = withAuth;
