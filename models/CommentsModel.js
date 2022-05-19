const router = require("express").Router();
const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  OwnerID: String,
  PostID: String,
  createdAt:Date,
  text: String,
});

const CommentsModel = mongoose.model("comments", commentSchema);

module.exports = CommentsModel;
