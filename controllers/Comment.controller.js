const CommentsModel = require('../models/CommentsModel');

module.exports.commentPost = (req,res,next)=>{
    const body = req.body;
    CommentsModel.create(body).then(result=>{
        res.json(result)
        console.log(result)
    })
}


module.exports.commentDelete = (req,res,next)=>{
    const body = req.body;
    CommentsModel.deleteOne({createdAt:body.createdAt}).then(result=>{
        console.log(result)
    })
    
}

module.exports.commentPut = (req,res,next)=>{
    const body = req.body
    CommentsModel.updateOne({text:body.text},{text:'Dogecoin to Win'}, {upsert:true})
    .then(result=>console.log(result))
    
}

module.exports.commentGet = (req,res,next)=>{
    CommentsModel.find({}).exec()
    .then(result=>res.json(result))
}

module.exports.commentGetById = (req,res,next) =>{
    const body = req.params;
    CommentsModel.find({postID:body.id})
    .populate('ownerID')
    .exec()
    .then(result=>{
      res.json(result)
      console.log(result)
    })
  }
  
