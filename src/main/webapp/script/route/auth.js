const express = require ('express');
const router = express.Router();
const authController = require('../controller/auth');
const verifiedToken = require('../middlewares/verifytoken');

router.post('/register',authController.register)
router.post('/login',authController.login)
router.post('/verified/:id',authController.verifiedMail)
router.get('/resend/:id',authController.resendCode)

module.exports = router