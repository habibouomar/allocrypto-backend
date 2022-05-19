const router = require("express").Router();
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  createdAt: Date,
  OwnerID: String,
  likes: [String],
  text: String,
  postID:String
  },
  {
    timestamps:true
  });

  const PostModel = mongoose.model('Post', postSchema)

module.exports = PostModel;
