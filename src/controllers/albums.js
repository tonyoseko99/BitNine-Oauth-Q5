// Albums controller
const Album = require("../controllers/album");

// create an album
exports.create = (req, res) => {
  // create a new object
  const album = new Album({
    albumId: req.body.albumId,
    userId: req.body.userId,
    albumTitle: req.body.albumTitle,
  });
  //   save the album
  album
    .save()
    .then((data) => {
      res.status(201).send({
        message: "Album created successfully",
        data,
      });
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Error while creating album",
      });
    });
};
