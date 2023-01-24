const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { jwtSecret } = require("../config");
const user = require("../models/user");

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
