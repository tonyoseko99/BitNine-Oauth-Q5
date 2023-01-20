const express = require("express");
const router = express.Router();
const photoController = require("../controllers/photos");
const { validatePhoto } = require("../validations/photos");

const validate = (req, res, next) => {
  const { error } = validatePhoto(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  next();
};

router.post("/", photoController.create);
router.get("/", photoController.findAll);
router.get("/:photoId", photoController.findOne);
router.put("/:photoId", photoController.update);
router.delete("/:photoId", photoController.delete);

module.exports = router;
