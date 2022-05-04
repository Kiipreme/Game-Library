const mongoose = require("../db/connection");

const GameSchema = new mongoose.Schema(
  {
    name: String,
    img: String,
    description: String,
  },
  {
    timestamps: true,
  }
);
const Game = mongoose.model("Game", GameSchema);

module.exports = Game;
