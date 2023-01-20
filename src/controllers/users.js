// users controller
const User = require("../models/user");

// create a new user
exports.create = (req, res) => {
  // create a new user object
  const user = new User({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
  });
  // save the new user
  user
    .save()
    .then((data) => {
      res.status(200).send({
        message: "User created successfully",
        data,
      });
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message || "some error occurred while creating the user.",
      });
    });
};

// get all users
exports.findAll = (req, res) => {
  User.find()
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Error obtaining users",
      });
    });
};
