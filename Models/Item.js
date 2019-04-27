const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema
const ItemSchema = new Schema({
  playerName: {
    type: String,
    required: false
  },
  score: {
    type: Number,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Item = mongoose.model("item", ItemSchema);
