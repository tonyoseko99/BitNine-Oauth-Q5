const express = require("express");
const router = express.Router();
const userController = require("../controllers/users");
const { validateUser } = require("../validations/users");

// validate middleware
const validate = (req, res, next) => {
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  next();
};

router.post("/", userController.create);
router.get("/", userController.findAll);
router.get("/:userId", userController.findOne);
router.put("/:userId", userController.update);
router.delete("/:userId", userController.delete);

module.exports = router;
