const express = require("express");
const router = express.Router();

const Game = require("../models/games-model");

router.get("/", (req, res) => {
  Game.find({}).then((data) => {
    res.render("index", { games: data });
  });
});

router.get("/new", (req, res) => {
  res.render("new");
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Game.findById(id).then((data) => {
    res.render("info", { item: data });
  });
});

router.get("/:id/edit", (req, res) => {
  const id = req.params.id;
  Game.findById(id).then((data) => {
    res.render("edit", { item: data });
  });
});

router.post("/add", (req, res) => {
  const content = req.body;
  Game.create(content).then(() => {
    res.redirect("/games");
  });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Game.findOneAndRemove({ _id: id }).then(() => {
    res.redirect("/games");
  });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  Game.findOneAndUpdate({ _id: id }, req.body).then((data) => {
    res.redirect("/games");
  });
});

module.exports = router;
