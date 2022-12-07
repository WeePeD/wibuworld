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
router.get('/getall', async (req, res) => {
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
            products : req.body.products,
            cartPrice : req.body.cartPrice
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
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id,{$push : {products : req.body}},{ new: true });
        res.status(200)
           .redirect('/cart')
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

//DELETE Product
router.post('/remove'), async(req,res) =>{
    try {
        const productId = req.body.productId
        Cart.updateMany({},{$pull : {products : {productId : productId}}}, (err,data) =>{
            if (err) res.send("this is" +err)
            else res.send(data)
        })
    } catch (e) {
        res.status(500)
            .json(e)
    }
}
module.exports = router