const Game = require("../models/games-model");
const seedData = require("./seed.json");

Game.deleteMany({})
  .then(() => {
    return Game.insertMany(seedData);
  })
  .then(console.log)
  .finally(() => {
    process.exit();
  });
