const mongoose = require("mongoose");

const PhotoSchema = new mongoose.Schema({
  albumId: {
    type: String,
    required: true,
  },
  photoTitle: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Photo", PhotoSchema);
