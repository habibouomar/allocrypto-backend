// import db.config
require("./config/db.config");
// config dotenv
require("dotenv").config({ path: "./config/.env" });
// use cors and express
const express = require("express");
const app = express();
const cors = require("cors");
// import router
const postRouter = require("./Router/post.router");
const userRouter = require("./Router/user.router");
const commentRouter = require("./Router/comment.router");
const cryptoRouter = require("./Router/crypto.router");

// require("./models/UserModel");
// require("./models/PostCryptoModel");
// require("./models/CommentsModel");
// const { body } = require("express-validator");
// const UserModel = require("./models/UserModel");
// const { Collection } = require("mongoose");
// const CommentsModel = require("./models/CommentsModel");
// const CrytpoModel = require("./models/PostCryptoModel");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("public"));

//routes
app.use("/post", postRouter);
app.use("/user", userRouter);
app.use("/comment", commentRouter);
app.use("/crypto", cryptoRouter);

const PORT = 3002 || process.env.PORT;

app.get("/", (req, res) => {
  res.send("WELCOME TO THE GOULAG");
});

// Post
app.listen(PORT, () => {
  console.log(`server satarted in PORT ${PORT}`);
});
