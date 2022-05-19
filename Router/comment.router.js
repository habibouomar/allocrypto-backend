const router = require('express').Router();
const commentController = require('../controllers/Comment.controller')
router.post("/", commentController.commentPost);
router.get("/", commentController.commentGet);
router.put("/", commentController.commentPost);
router.delete("/", commentController.commentDelete);

module.exports = router;