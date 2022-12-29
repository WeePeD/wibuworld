const express = require('express')
const router = express.Router()
const cartController = require('../controller/cart')

router.post('/',cartController.createCart)
router.get('/:id',cartController.getCart)
router.get('/',cartController.index)
router.post('/update/:id',cartController.updateCart)
router.post('/delete/:id',cartController.deleteCart)


module.exports = router