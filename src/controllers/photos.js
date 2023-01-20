const Photo = require("../models/photo");

// create a new photo
exports.create = (req, res) => {
  // create a new photo object
  const photo = new Photo({
    albumId: req.body.albumId,
    photoTitle: req.body.photoTitle,
    imageUrl: req.body.imageUrl,
  });
  // save the photo
  photo
    .save()
    .then((data) => {
      res.status(201).send({
        message: "Photo created successfully!",
        data,
      });
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message || "Some error occurred while creating the photo.",
      });
    });
};

// get all photos
exports.findAll = (req, res) => {
  Photo.find()
    .then((photos) => {
      res.status(200).send(photos);
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message || "Some error occurred while retrieving photos.",
      });
    });
};
