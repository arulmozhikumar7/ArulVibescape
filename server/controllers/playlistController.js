const Playlist = require("../models/playlist.model");
const User = require("../models/user.model");
exports.createPlaylist = async (req, res) => {
  try {
    const { name, description, songs } = req.body;
    const user = req.userId;
    const playlist = new Playlist({
      name,
      description,
      user,
      songs,
    });
    const userPlaylist = await User.findByIdAndUpdate(
      {
        _id: user,
      },
      {
        $push: { playlists: playlist },
      },
      {
        new: true,
      }
    );

    const result = await playlist.save();
    res.status(201).json({ message: "Playlist created successfully", result });
  } catch (error) {
    console.error(error);
  }
};

exports.getPlaylist = async (req, res) => {
  try {
    const user = req.userId;
    const playlists = await Playlist.find({ user: user });
    res
      .status(200)
      .json({ message: "Playlists found successfully", playlists });
  } catch (error) {
    console.error(error);
  }
};

exports.deletePlaylist = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Playlist.findByIdAndDelete(id);
    const user = req.userId;
    const userPlaylist = await User.findByIdAndUpdate(
      {
        _id: user,
      },
      {
        $pull: { playlists: id },
      }
    );
    res.status(200).json({ message: "Playlist deleted successfully", result });
  } catch (error) {
    console.error(error);
  }
};

exports.updatePlaylist = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, description, songs } = req.body;
    const result = await Playlist.findByIdAndUpdate(
      id,
      { name, description, songs },
      { new: true }
    );
    res.status(200).json({ message: "Playlist updated successfully", result });
  } catch (error) {
    console.error(error);
  }
};
