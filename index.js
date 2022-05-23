require("dotenv").config({ path: "./config/.env" });

require("./config/db.config");
const express = require("express");
const app = express();
const cors = require("cors");
const postRouter = require("./Router/post.router");
const userRouter = require("./Router/user.router");
const commentRouter = require("./Router/comment.router");
const cryptoRouter = require("./Router/crypto.router");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


app.use("/post", postRouter);
app.use("/user", userRouter);
app.use("/comment", commentRouter);
app.use("/crypto", cryptoRouter);

const PORT = 3002 || process.env.PORT;

app.get("/", (req, res) => {
  res.send("WELCOME TO THE GOULAG");
});


app.listen(PORT, () => {
  console.log(`server satarted in PORT ${PORT}`);
});
