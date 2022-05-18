const router = require('express').Router();
const cryptoController = require('../controllers/PostCrypto.controller');
router.post('/crypto',cryptoController.cryptoPost)
router.get('/crypto',cryptoController.cryptoGet)
router.put('/crypto',cryptoController.ceryptoPut)
router.delete('/crypto',cryptoController.cryptoDelete);

module.exports = router;