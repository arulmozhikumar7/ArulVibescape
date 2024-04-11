const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  profilePic: {
    type: String,
    default: "",
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  playlists: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Playlist",
    },
  ],
  likedSongs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Songs",
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
