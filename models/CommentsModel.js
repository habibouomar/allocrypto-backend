const router = require("express").Router();
const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  // OwnerID: user._id,
  // PostID: post._id,
  text: String,
});

const CommentsModel = mongoose.model("comments", commentSchema);

module.exports = router;
