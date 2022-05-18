const router = require("express").Router();
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    createdAt: Date,
    ownerID: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    likes: [Number],
    comments: [Number],
    text: String,
  },
  {
    timestamps: true,
  }
);

const PostModel = mongoose.model("post", postSchema);

module.exports = PostModel;
