const router = require("express").Router();
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  createdAt: Date,
  // OwnerID: user._id,
  likes: [Number],
  comments: [Number],
  text: String,
});

module.exports = router;
