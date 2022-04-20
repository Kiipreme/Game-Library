const mongoose = require("mongoose");

const mongoURI =
  process.env.NODE_ENV === "production"
    ? process.env.DB_URL
    : "mongodb://localhost/games";

mongoose
  .connect(mongoURI)
  .then((inst) => {
    console.log(`Connected to ${inst.connections[0].name}`);
  })
  .catch((err) => {
    console.log(`failed connection: `, err);
  });

  module.exports = mongoose
