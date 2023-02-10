const express = require('express');
const router = express.Router();
const productController = require('../controller/product');

router.post('/',productController.createProduct)
router.get('/:id',productController.getProduct)
router.get('/',productController.getAllProduct)
router.post('/update/:id',productController.updateProduct)
router.post('/delete/:id',productController.deleteProduct)

module.exports = router