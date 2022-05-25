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
const PostModel = require('./models/PostModel');
const ShareModel = require('./models/ShareModel')
const ShareRouter = require('./Router/share.router')
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/post", postRouter);
app.use("/user", userRouter);
app.use("/comment", commentRouter);
app.use("/crypto", cryptoRouter);
app.use("/share", ShareRouter);
const PORT = 3002 || process.env.PORT;

app.get("/", (req, res) => {
  res.send("WELCOME TO THE GOULAG");
});

app.get("/comment/:id", (req, res, next) => {
  const body = req.params;
  // console.log(body)
  CommentsModel.find({ postID: body.id })
    .populate("ownerID")
    .exec()
    .then((result) => {
      res.json(result);
      console.log(result);
    });
});

app.get("/post/:id", (req, res, next) => {
  const body = req.params;
 
  PostModel.find({_id:body.id})
  .exec()
  .then(result=>{
    res.json(result)
    console.log(result)
  })
})




// app.post('/share',(req,res,next)=>{
//      const body = req.body;
//      console.log(body)
//      ShareModel.create(body)
//      .then(result=>{
//        console.log(result)
//        res.json(body)

//      })
// })

// app.get('/share',async (req,res,next)=>{
//   const body = req.params.id
//  await ShareModel.find({})
//  .populate('postID')
//  .populate('posterID')
//   .exec()
//   .then(result=>{
//     console.log(result)
//     res.send(result)
//   })
// })

// app.get('/share/profil/:user',(req,res,next)=>{
//   const body = req.params.user
//   ShareModel.where('posterID')
//   .equals(body)
//   .exec()
//   .then(result=>{
//     console.log(result)
//     res.json(result)
//   })
// })

// app.get('/comment/profil/:user',(req,res,next)=>{
//   const body = req.params.user
//   CommentsModel.where('ownerID')
//   .equals(body)
//   .exec()
//   .then(result=>{
//     console.log(result)
//     res.json(result)
//   })
// })

// app.get('/post/profil/:user',(req,res,next)=>{
//   const body = req.params.user
//   PostModel.where('ownerID')
//   .equals(body)
//   .exec()
//   .then(result=>{
//     console.log(result)
//     res.json(result)
//   })
// })


// Post
app.listen(PORT, () => {
  console.log(`server satarted in PORT ${PORT}`);
});
