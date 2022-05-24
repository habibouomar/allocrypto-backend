const { default: mongoose } = require("mongoose")
const { populate } = require("../models/PostModel")
const PostModel = require("../models/PostModel")

module.exports.tweetPost = (req, res, next) => {
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

module.exports.tweetLike = (req, res, next) => {
    const body = req.body
    res.json(body)
    console.log(body)
}

module.exports.tweetDelete = (req, res, next) => {
    PostModel.deleteOne({ likes: [555] }).then(result => console.log(result))
}

module.exports.tweetPut = (req, res, next) => {
    const body = req.body;
    const id = body.likerId;
    console.log(body)
    PostModel.find({ likes: { $in: id }, _id: body.filterId })
        .exec()
        .then(result => {
            console.log("KKKKKKKKKKKKKKKKKKKKKKKK", result.length);
            if (result.length) {
                res.json({ exists: true })
                PostModel.updateOne({_id:body.filterId}, {$pull:{likes:id}})
                .then(response=>{
                    console.log("removed Response",response)
                    // res.json({removed:true})
                })
            } else {
                console.log('in else', result);
                PostModel.updateOne({ _id: body.filterId }, { $push: { likes: id } }, { upsert: true })
                    .then(response => {
                        res.json({exists:false})
                        console.log(response)
                    })
            }
            // console.log(result)
        })
}


module.exports.tweetGet = (req, res, next) => {
    PostModel.find({})
        .populate('ownerID', 'userName').sort({ createdAt: -1 })
        .exec()
        .then(result => {
            console.log(result)
            res.json({ result })
        })
}