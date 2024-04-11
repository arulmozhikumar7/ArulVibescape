const router = require("express").Router();

const authRoutes = require("./authRoutes");
const likedsongsRoutes = require("./likedsongsRoutes");
const playlistsRoutes = require("./playlistsRoutes");
const songsRoutes = require("./songsRoutes");

router.use("/auth", authRoutes);
router.use("/likedsongs", likedsongsRoutes);
router.use("/playlists", playlistsRoutes);
router.use("/songs", songsRoutes);

module.exports = router;
