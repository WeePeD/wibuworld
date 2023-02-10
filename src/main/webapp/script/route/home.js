const express = require('express');
const router = express.Router();
const homeController = require('../controller/home');

router.get('/', homeController.index )
router.get('/detail/:id',homeController.detail)
router.get('/:productType',homeController.productType)
router.get('/search',homeController.searchProduct)

module.exports = router