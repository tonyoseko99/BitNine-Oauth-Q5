const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

// user signup
router.post("/signup", async (req, res) => {
  try {
    // get user input
    const { name, username, email, password } = req.body;
    // check if user already exist
    const oldUser = await User.findOne({
      $or: [{ email }, { username }],
    });
    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }
    // hash user password
    const hashedPassword = await bcrypt.hash(password, 10);
    // create user
    const user = await User.create({
      name,
      username,
      email,
      password: hashedPassword,
    });
    // save user to database
    await user.save();
    // send response indicating user creation
    res.status(201).json({ message: "User created successfully" });
    // jwt token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h", // expires in 1 hour
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
