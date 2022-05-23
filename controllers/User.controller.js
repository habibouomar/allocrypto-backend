const UserModel = require("../models/UserModel");


module.exports.userPost = (req,res,next)=>{
    const body = req.body;
    UserModel.findOne({userName:body.userName})
    .exec()
    .then(result=>{
        if(result){
            res.status(401).json({Error:false})
        }else{
            UserModel.create({
                userName:body.userName,
                aboutMe:body.aboutMe,
                picture:body.picture
            }).then(result=>{
                res.json({result})
                console.log(result)
            })
        }
        // res.status(200).json({Error:true})
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
