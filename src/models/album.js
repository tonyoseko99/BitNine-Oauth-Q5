const mongoose = require("mongoose");

const AlbumSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  albumTitle: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Album", AlbumSchema);
