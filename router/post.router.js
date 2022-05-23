const router = require("express").Router();
const postController = require("../controllers/Post.controllers");
router.post("/", postController.tweetPost);
router.post("/like",postController.tweetLike)
router.get("/", postController.tweetGet);
router.put("/", postController.tweetPut);
router.delete("/", postController.tweetDelete);

module.exports = router;
