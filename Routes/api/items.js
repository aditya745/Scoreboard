const express = require("express");
const router = express.Router();

//Item Model
const Item = require("../../Models/Item");

//GET api/items
//Get all items
//access Public
router.get("/", (req, res) => {
  Item.find().then(items => res.json(items));
});

//POST api/items
//CREATE an item
//access Public
router.post("/", (req, res) => {
  const newItem = new Item({
    playerName: req.body.playerName,
    score: req.body.score
  });
  newItem.save().then(item => res.json(item));
});

//DELETE api/items
//DELETE an item
//access Public
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
