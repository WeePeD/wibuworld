const express = require('express');
const router = express.Router();
const userController = require('../controller/user');
const verifyToken = require('../middlewares/verifytoken')

router.get('/',userController.getAllUser)
router.post('/createusr',userController.createUser)
router.post('/:id',userController.deleteUser)

module.exports = router