const router = require("express").Router();
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: String,
    aboutMe: String,
    picture: String,
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
