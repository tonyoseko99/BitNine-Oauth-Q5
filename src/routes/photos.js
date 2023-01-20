const express = require("express");
const router = express.Router();
const photoController = require("../controllers/photos");

router.post("/", photoController.create);
router.get("/", photoController.findAll);
router.get("/:photoId", photoController.findOne);
router.put("/:photoId", photoController.update);
router.delete("/:photoId", photoController.delete);

module.exports = router;