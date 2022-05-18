const CrytpoModel = require('../models/PostCryptoModel');



module.exports.cryptoPost = (req,res,next)=>{
    const body = req.body
    CrytpoModel.create({
        text:body.text,
        likes:body.likes,
        nameCryptoApi:body.nameCryptoApi,
        time:body.time
    }).then(result=>console.log(result))
}

module.exports.cryptoDelete = (req,res,next)=>{
    const body = req.body;
     
}

module.exports.ceryptoPut = (req,res,next)=>{
    const body = req.body
}

module.exports.cryptoGet = (req,res,next)=>{
    const body = req.body
    CrytpoModel.find({}).exec()
    .then(result=>console.log(result))
}