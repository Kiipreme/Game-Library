const express = require("express");
const router = express.Router();

const Game = require("../models/games-model");

router.get("/", (req, res) => {
  Game.find({}).then((data) => {
    res.send(data);
  });
});

module.exports = router;
