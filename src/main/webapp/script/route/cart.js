const express = require('express');
const router = express.Router();
const cartController = require('../controller/cart');

router.post('/',cartController.createCart)
router.get('/:id',cartController.getCart)
router.get('/',cartController.index)
router.post('/addproduct/:id',cartController.addProductCart)
router.post('/removeproduct/:id',cartController.removeProductCart)

module.exports = router