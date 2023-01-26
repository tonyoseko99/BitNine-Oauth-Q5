const jwt = require("jsonwebtoken");
// set jwt secret to the value of the JWT_SECRET environment variable in .env
const jwtSecret = process.env.JWT_SECRET;
const User = require("../models/user");

// user signup
exports.signup = async (req, res) => {
  try {
    // create a new user
    const user = new User(req.body);
    await user.save();

    // create a json web token
    const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: "1h" });

    //   send the token and the new user's information to the client
    res.status(201).json({ token, user });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// user login
exports.login = async (req, res) => {
  try {
    // find user with the provided email
    const user = await User.findOne({ email: req.body.email });
    // if user does not exist throw error
    if (!user) throw new Error("User not found!");
    // compare provided password password with hashed password
    const isMatch = await user.comparePassword(req.body.password);
    // if passwords do not match throw an error
    if (!isMatch) throw new Error("Incorrect password");
    // create a JSON web token
    const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: "1h" });
    // send the token and user information to client
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
