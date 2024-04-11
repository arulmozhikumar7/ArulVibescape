const Songs = require("../models/songs.model");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "media/songs/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("audio/")) {
    cb(null, true);
  } else {
    cb(new Error("Only audio files are allowed"));
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 },
}).single("audioFile");

exports.createSong = (req, res) => {
  upload(req, res, async (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ message: "File upload error" });
    } else if (err) {
      return res.status(500).json({ message: "Server error" });
    }
    try {
      const { name, description, artist, duration, coverImage, genre } =
        req.body;
      const audioFile = req.file ? req.file.filename : "";
      const song = new Songs({
        name,
        description,
        artist,
        audioFile,
        duration,
        coverImage,
        genre,
      });
      await song.save();
      res.status(201).json({ message: "Song created successfully", song });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  });
};
