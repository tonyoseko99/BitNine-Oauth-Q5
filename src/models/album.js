const mongoose = require("mongoose");

const AlbumSchema = new mongoose.Schema({
  albumId: {
    type: String,
    required: true,
    unique: true,
  },
  userId: {
    type: String,
    required: true,
  },
  albumTitle: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Album', AlbumSchema)
