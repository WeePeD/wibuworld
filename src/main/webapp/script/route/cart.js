const router = require('express').Router()
const Cart = require('../model/cart')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//GET
router.get('/detail/:id', async(req,res) => {
    try {
        const cart = await Cart.findById(req.params.id)
        res.status(200)
           .json(cart)
    } catch (e) {
        res.status(500)
         .json(e);
    }
})

//GET ALL
router.get('/', async (req, res) => {
    try {
        carts = await Cart.find();
        res.status(200)
           .json(carts);
    } catch (e) {
        res.status(500)
           .json(e);
    }
});

//CREATE
router.post('/', async (req, res) => { 
    try {
        const newCart = Cart({
            userId : req.body.userId,
            products : req.body.products
        });
        const savedCart = await newCart.save();
        res.status(200)
            .json(savedCart);
    } catch (e) {
        res.status(500)
            .json(e);
    }
  });

//UPDATE
router.post('/addtocart/:id', async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id,{$push: req.body},{ new: true });
        res.status(200)
           .json(updatedCart);
    } catch (e) {
      res.status(500)
         .json(e);
    }
  });

//DELETE
router.delete('/:id', async(req,res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200)
           .json({message : `Cart id:${id} has been deleted !`})
    } catch (e) {
        res.status(500)
           .json(e)
    }
})

module.exports = router