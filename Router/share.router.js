const router = require('express').Router();
const shareController = require('../controllers/share.controller')
router.post("/", shareController.sharePost);
router.get("/profil/:user", shareController.shareProfilGet);
router.get("/", shareController.shareGet);

module.exports = router;