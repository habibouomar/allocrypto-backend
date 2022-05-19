const UserModel = require("../models/UserModel");

module.exports.userPost = (req, res, next) => {
  const body = req.body;
  UserModel.create(body).then((result) => console.log(result));
}

module.exports.userPost = (req,res,next)=>{
    const body = req.body;
    UserModel.create(body).then(result=>{
        res.json({id:result._id})
        console.log(result)
    })
}

module.exports.userDelete =  (req,res,next)=>{
    const body = req.body;
    UserModel.deleteOne({picture:body.picture})
    .then(result=>console.log(result))
}
 module.exports.userPut = (req,res,next)=>{
    const body = req.body;
    UserModel.updateOne({userName:body.userName},{userName:'Erfan91'},{upsert:true})
    .then(result=>{
        console.log(result)
    })
}
module.exports.userGet = (req,res,next)=>{
    UserModel.find({}).exec()
    .then(result=>console.log(result))
}
