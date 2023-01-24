// hides passwords from the user
const hidePassword = (req, res, next) => {
  if (req.user) {
    delete req.user.password;
  }
  next();
};

module.exports = hidePassword;
