const CommentsModel = require('../models/CommentsModel');
const UserModel = require("../models/UserModel");
const PostModel = require("../models/PostModel");

module.exports.commentPost = (req, res, next) => {
    const body = req.body;

    CommentsModel.create(body).then(result => {
        res.json(result)
        console.log("nouveau comment a linstant", result)
    })

    PostModel.findById(body.postID)
        .exec()
        .then(infoPost =>  UserModel.findByIdAndUpdate(infoPost.ownerID, { $inc: { commentsGlobal: 1 } })
        .then(reponse => {
            console.log("add comment count", reponse)
        }).catch(error => {
            console.log(error);
        }))     
}

module.exports.commentDelete = (req, res, next) => {
    const body = req.body;
    CommentsModel.deleteOne({ createdAt: body.createdAt }).then(result => {
        console.log(result)
    })
}

module.exports.commentPut = (req, res, next) => {
    const body = req.body
    CommentsModel.updateOne({ text: body.text }, { text: 'Dogecoin to Win' }, { upsert: true })
        .then(result => console.log(result))
}

module.exports.commentGet = (req, res, next) => {
    CommentsModel.find({}).populate('ownerID').exec()
        .then(result => res.json(result))
}

module.exports.commentGetById = (req, res, next) => {
    const body = req.params;
    CommentsModel.find({ postID: body.id })
        .populate('ownerID')
        .sort({ createdAt: -1 })
        .exec()
        .then(result => {
            res.json(result)
            console.log(result)
        })
}

module.exports.commentProfilGet = (req, res, next) => {
    const body = req.params.user
    CommentsModel.where('ownerID')
        .equals(body)
        .exec()
        .then(result => {
            console.log(result)
            res.json(result)
        })
}

