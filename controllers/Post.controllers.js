const PostModel = require("../models/PostModel")

module.exports.tweetPost = (req,res,next)=>{
    const body = req.body
    PostModel.create({
        createdAt:body.createdAt,
        likes:body.likes,
        comments:body.comments,
        text:body.text
    }).then(result=>{
        res.json({postId:result._id})
        console.log(result._id,'JEJEJE')
    })
    console.log(PostModel)
}
module.exports.tweetDelete = (req,res,next)=>{
    PostModel.deleteOne({likes:[555]}).then(result=>console.log(result))
}

module.exports.tweetPut = (req,res,next)=>{
    const body = req.body;
    PostModel.updateOne({_id:body.postID},{likes:body.OwnerID},{upsert:true})
    .then(result=>console.log(result))
}


module.exports.tweetGet = (req,res,next)=>{
    PostModel.find({}).sort({createdAt:-1}).exec()
    .then(result=>{
        console.log(result)
        res.json({result})
    })
}