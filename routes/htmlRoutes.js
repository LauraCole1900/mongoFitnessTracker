const router = require("express").Router();
const path = require("path");

// Loads index.html
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"))
});

// Loads exercise.html
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"))
});

// Loads stats.html
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"))
});

module.exports = router;