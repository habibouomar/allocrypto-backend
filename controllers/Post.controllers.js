const PostModel = require("../models/PostModel")

module.exports.tweetPost = (req,res,next)=>{
    const body = req.body
    PostModel.create({
        createdAt:body.createdAt,
        likes:body.likes,
        comments:body.comments,
        text:body.text
    }).then(result=>{
        console.log(result)
    })
    console.log(PostModel)
}
module.exports.tweetDelete = (req,res,next)=>{
    PostModel.deleteOne({likes:[555]}).then(result=>console.log(result))
}

module.exports.tweetPut = (req,res,next)=>{
    PostModel.updateOne({likes:[761]},{likes:1212},{upsert:true})
    .then(result=>console.log(result))
}

module.exports.tweetGet = (req,res,next)=>{
    PostModel.find({}).exec()
    .then(result=>console.log(result))
}