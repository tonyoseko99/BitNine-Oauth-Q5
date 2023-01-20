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

// get user by id
exports.findOne = (req, res) => {
  User.findById(req.params.userId)
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: `user not found with id ${req.params.userId}`,
        });
      }
      res.status(200).send(user);
    })
    .catch((error) => {
      if (error.kind === "ObjectId") {
        return res.status(404).send({
          message: `user not found with id: ${req.params.userId}`,
        });
      }
      return res.status(500).send({
        message: `Error retrieving user with id: ${req.params.userId}`,
      });
    });
};
