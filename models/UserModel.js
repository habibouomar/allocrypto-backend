const router = require("express").Router();
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: String,
    aboutMe: String,
    picture: String,
    post: {
      type: mongoose.Types.ObjectId,
      ref: "comments",
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
