const { default: mongoose } = require("mongoose")
const { populate } = require("../models/PostModel")
const PostModel = require("../models/PostModel")

module.exports.tweetPost = (req,res,next)=>{
    const body = req.body
    PostModel.create({
        createdAt:body.createdAt,
        likes:body.likes,
        comments:body.comments,
        ownerID: body.ownerID,
        text:body.text
    }).then(result=>{
        res.json({postId:result._id})
        console.log(result._id,'JEJEJE')
    })
    console.log(PostModel)
}

module.exports.tweetLike = (req,res,next)=>{
    const body = req.body
    res.json(body)
    console.log(body)
}

module.exports.tweetDelete = (req,res,next)=>{
    PostModel.deleteOne({likes:[555]}).then(result=>console.log(result))
}

module.exports.tweetPut = (req,res,next)=>{
    const body = req.body;
    console.log(body)
    PostModel.updateOne({_id:body.filterId},{$push : {likes: body.likerId}},{upsert:true})
    .then(result=>{
        res.json(result)
        console.log(result)
    })
}


module.exports.tweetGet = (req,res,next)=>{
    PostModel.find({}).sort({createdAt:-1})
    .populate('ownerID','userName')
    .exec()
    .then(result=>{
        console.log(result)
        res.json({result})
    })
}