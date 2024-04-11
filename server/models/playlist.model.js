const mongoose = require("mongoose");

const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  songs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Songs",
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Playlist = mongoose.model("Playlist", playlistSchema);

module.exports = Playlist;
