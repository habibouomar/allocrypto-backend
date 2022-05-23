require("dotenv").config({ path: "./config/.env" });

require("./config/db.config");
const express = require("express");
const app = express();
const cors = require("cors");
const postRouter = require("./Router/post.router");
const userRouter = require("./Router/user.router");
const commentRouter = require("./Router/comment.router");
const cryptoRouter = require("./Router/crypto.router");
const CommentsModel = require("./models/CommentsModel");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


app.use("/post", postRouter);
app.use("/user", userRouter);
app.use("/comment", commentRouter);
// app.use('/get', commentRouter)
app.use("/crypto", cryptoRouter);

const PORT = 3002 || process.env.PORT;

app.get("/", (req, res) => {
  res.send("WELCOME TO THE GOULAG");
});

app.post("/comment/get", (req,res,next)=>{
  const body = req.body;
  // console.log(body)
  CommentsModel.find({postID:body.postID})
  .populate('ownerID')
  .exec()
  .then(result=>{
    res.json(result)
    console.log(result)
  })
})


// Post
app.listen(PORT, () => {
  console.log(`server satarted in PORT ${PORT}`);
});
