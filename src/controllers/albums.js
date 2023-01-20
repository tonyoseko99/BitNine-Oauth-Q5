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

// find all albums
exports.findAll = (req, res) => {
  Album.find()
    .then((albums) => {
      res.status(200).send(albums);
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Error retrieving albumms",
      });
    });
};

// find one album
exports.findOne = (req, res) => {
  Album.findById(req.params.albumId)
    .then((album) => {
      if (!album) {
        return res.status(404).send({
          message: "Album not found",
        });
      }
      res.status(200).send(album);
    })
    .catch((error) => {
      if (error.kind === "ObjectId") {
        return res.status(404).send({
          message:
            error.message ||
            "Album with id: " + req.params.albumId + "not found",
        });
      }
      res.status(500).send({
        message: `Album ${req.params.albumId} not found`,
      });
    });
};
