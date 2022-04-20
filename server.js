const express = require("express");
const app = express();
const gameController = require("./controller/gamesController");

app.set("view engine", "ejs");

app.use(express.json());

app.use("/games", gameController);

app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
  console.log("Running on port");
});
