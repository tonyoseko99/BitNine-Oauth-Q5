const express = require(express);
const router = express.Router();
const albumController = require("../controllers/albums");

router.put("/", albumController.create);
router.get("/", albumController.findAll);
router.get('/:albumId', albumController.findOne);
router.put('/:albumId', albumController.update);
router.delete('/:albumId', albumController.delete);

module.exports = router;
