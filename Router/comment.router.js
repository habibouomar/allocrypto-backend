const router = require('express').Router();
const commentController = require('../controllers/Comment.controller')
router.post('/comment',commentController.commentPost)
router.get('/comment',commentController.commentGet)
router.put('/comment',commentController.commentPost)
router.delete('/comment',commentController.commentDelete);

module.exports = router;