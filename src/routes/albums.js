const express = require(express);
const router = express.Router();
const albumController = require("../controllers/albums");

router.put("/", albumController.create);
router.get("/", albumController.findAll);
router.get("/:userId", userController.findOne);
router.put("/:userId", userController.update);
router.delete("/:userId", userController.delete);

module.exports = router;
