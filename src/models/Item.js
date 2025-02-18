const mongoose = require("mongoose");
const dayjs = require("dayjs");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  brand: {
    type: String,
    required: [true, "Item must have a title"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Item must have a description"],
  },
  quantity: {
    type: Number,
    default:0
  },
  dateCreated: {
    type: String,
    default: dayjs(new Date()).format("MMMM DD, YYYY"),
  },
});

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
