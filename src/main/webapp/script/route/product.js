const router = require('express').Router()
const Product = require('../model/product')

//GET
router.get('/detail/:id', async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.status(200)
         .json(product);
    } catch (e) {
      res.status(500)
         .json(e);
    }
});

//GET ALL
router.get('/', async (req, res) => {
    try {
        products = await Product.find();
        res.status(200)
           .json(products);
    } catch (e) {
        res.status(500)
           .json(e);
    }
});

//CREATE
router.post('/', async(req,res) => {
    try {
        const newProduct = Product({
            productName : req.body.productName,
            productDescription : req.body.productDescription,
            productImg : req.body.productImg,
            productPrce : req.body.productPrce
        })
        const saveProduct = await newProduct.save()
        res.status(201)
           .json(saveProduct)
    } catch (e) {
        res.status(500)
        .json(e)
    }
})

//UPDATE
router.put('/:id', async (req, res) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(req.params.id,{$set: req.body},{ new: true });
      res.status(200)
         .json(updatedProduct);
    } catch (e) {
      res.status(500)
         .json(e);
    }
  });

//DELETE
router.delete('/:id', async(req,res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200)
           .json({message : `Product id:${id} has been deleted !`})
    } catch (e) {
        res.status(500)
           .json(e)
    }
})

module.exports = router