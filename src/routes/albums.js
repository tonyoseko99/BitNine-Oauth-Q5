const express = require(express);
const router = express.Router();
const albumController = require("../controllers/albums");
const { validateAlbum } = require("../validations/albums");

const validate = (req, res, next) => {
  const { error } = validateAlbum(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  next();
};

router.put("/", albumController.create);
router.get("/", albumController.findAll);
router.get("/:albumId", albumController.findOne);
router.put("/:albumId", albumController.update);
router.delete("/:albumId", albumController.delete);

module.exports = router;
