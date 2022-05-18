require("dotenv").config({ path: "./config/.env" });
require("./config/db.config");
require("./models/UserModel");
const user = require("./router/user.router");
require("./models/PostCryptoModel");
require("./models/CommentsModel");
const cors = require("cors");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("public"));

const PORT = 3002 || process.env.PORT;

app.use("/", user);

app.get("/", (req, res) => {
  res.send("WELCOME TO THE GOULAG");
});

app.listen(PORT, () => console.log(`server satarted in PORT ${PORT}`));
