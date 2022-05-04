const express = require("express");
const app = express();
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const methodOverride = require("method-override");
const gameController = require("./controller/gamesController");

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressLayouts);

app.use("/games", gameController);

app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
  console.log("Running on port");
});
