const router = require('express').Router();
const userController = require('../controllers/User.controller')
router.post('/user',userController.userPost)
router.get('/user',userController.userGet)
router.put('/user',userController.userPut)
router.delete('/user',userController.userDelete);

module.exports = router;