require("dotenv").config({ path: "./config/.env" });
const postRouter = require('./Router/post.router');
const userRouter = require('./Router/user.router');
const commentRouter = require('./Router/comment.router');
const cryptoRouter = require('./Router/crypto.router');
require("./config/db.config");
require("./models/UserModel");
const PostModel = require("./models/PostModel");
require("./models/PostCryptoModel");
require("./models/CommentsModel");
const cors = require("cors");
const express = require("express");
const { body } = require("express-validator");
const UserModel = require("./models/UserModel");
const { Collection } = require("mongoose");
const CommentsModel = require("./models/CommentsModel");
const CrytpoModel = require("./models/PostCryptoModel");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("public"));
app.use("/",postRouter);
app.use("/",userRouter)
app.use("/",commentRouter)
app.use("/",cryptoRouter)
const PORT = 3002 || process.env.PORT;

app.get("/", (req, res) => {
  res.send("WELCOME TO THE GOULAG");
});



app.listen(PORT, () =>{ console.log(`server satarted in PORT ${PORT}`)});
