const router = require("express").Router();
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  createdAt: Date,
  userName: String,
  aboutMe: String,
  picture: String,
});

const UserModel = mongoose.model("user", userSchema);

// const userBlog = new UserModel({
//   userName: "king",
//   aboutMe: "Je suis le roi",
// });

// userBlog.save();

module.exports = router;
