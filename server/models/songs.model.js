const mongoose = require("mongoose");

const songsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
    required: false,
  },
  artist: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  audioFile: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  coverImage: {
    type: String,
    required: false,
  },
  genre: {
    type: String,
    required: true,
  },
});

const Songs = mongoose.model("Songs", songsSchema);

module.exports = Songs;
