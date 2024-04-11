const User = require("../models/user.model");

exports.createLikedsongs = async (req, res) => {
  try {
    const { songId } = req.body;
    const user = req.userId;
    const result = await User.findOneAndUpdate(
      { _id: user },
      { $push: { likedSongs: songId } },
      { new: true }
    );

    res.status(201).json({ message: "Liked song added successfully", result });
  } catch (error) {
    console.error(error);
  }
};

exports.getAllLikedSongs = async (req, res) => {
  try {
    const user = req.userId;
    const result = await User.findById(user).populate("likedSongs");
    res.status(200).json({ message: "Liked songs found successfully", result });
  } catch (error) {
    console.error(error);
  }
};

exports.removeLikedSong = async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.userId;
    const result = await User.findByIdAndUpdate(
      user,
      { $pull: { likedSongs: id } },
      { new: true }
    );
    res
      .status(200)
      .json({ message: "Liked song removed successfully", result });
  } catch (error) {
    console.error(error);
  }
};
