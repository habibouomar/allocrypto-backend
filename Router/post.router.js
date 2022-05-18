const router = require('express').Router();
const postController = require('../controllers/Post.controllers');
router.post('/tweet',postController.tweetPost)
router.get('/tweet',postController.tweetGet)
router.put('/tweet',postController.tweetPut)
router.delete('/tweet',postController.tweetDelete);

module.exports = router;