const router = require("express").Router();

const UserControllers = require("../controllers/User.controller");

router.post("/", UserControllers.userPost);
router.put("/put", UserControllers.putUser);

module.exports = router;
