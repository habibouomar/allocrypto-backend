const { isValidObjectId } = require("mongoose");
const UserModel = require("../models/UserModel");
const ObjectID = require("mongoose").Types.ObjectId;

module.exports.userPost = async (req, res) => {
  const { userName, aboutMe, picture } = req.body;
  const user = await UserModel.create({
    userName,
    aboutMe,
    picture,
  });
  user.save();
};

module.exports.putUser = (req, res) => {
  // const id = req.params.id;
  // if (!isValidObjectId(id)) {
  //   return res.status(500).send(" ID unknow : " + id);
  // }

  const userName = req.body.userName;
  // const userUpdate = {
  //   userName,
  // };
  UserModel.updateOne(
    // id,
    // { $set: body }
    // { new: true }
    // (err, docs) => {
    //   if (!err) res.send(docs);
    //   else console.log(" Update error : " + err);
    // }
    { userName: userName },
    { userName: "Mastser" },
    { upsert: true }
  ).then((result) => console.log(result));
};
