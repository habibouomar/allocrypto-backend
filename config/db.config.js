const mongoose = require("mongoose");
require("dotenv");

try {
  mongoose.connect("mongodb://" + process.env.URL_MONGO_DB + "/allo-crypto");
} catch (err) {
  console.log(err);
}
