const router = require("express").Router();
const mongoose = require("mongoose");

const postCryptSchema = mongoose.Schema({
  // OwnerID: user._id,
  text: String,
  likes: [Number],
  nameCryptoApi: String,
  time: Date,
},
{
  timestamp:true
}
);
const CrytpoModel = mongoose.model('Crytpo',postCryptSchema);

module.exports = CrytpoModel;
