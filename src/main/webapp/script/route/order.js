const express = require('express');
const router = express.Router();
const Order = require('../model/order');

//GET
router.get('/detail/:id', async(req,res) => {
    try {
        const order = await Order.findById(req.params.id)
        res.status(200)
           .json(order)
    } catch (e) {
        res.status(500)
         .json(e);
    }
})

//GET ALL
router.get('/', async (req, res) => {
    try {
        orders = await Order.find();
        res.status(200)
           .json(orders)
    } catch (e) {
        res.status(500)
           .json(e);
    }
});

//CREATE
router.post('/', async (req, res) => { 
    try {
        const newOrder = Order({
            userId : req.body.userId,
            products : req.body.products,
            address : req.body.address
        })
        const savedOrder = await newOrder.save();
        res.status(200)
            .json(savedOrder);
    } catch (e) {
        res.status(500)
            .json(e);
    }
  });

//UPDATE
router.put('/:id', async (req, res) => {
    try {
      const updatedOrder = await Order.findByIdAndUpdate(req.params.id,{$set: req.body},{ new: true })
      res.status(200)
         .json(updatedOrder);
    } catch (e) {
      res.status(500)
         .json(e);
    }
  });

//DELETE
router.delete('/:id', async(req,res) => {
    try {
        await Order.findByIdAndDelete(req.params.id)
        res.status(200)
           .json({message : `Order id:${id} has been deleted !`})
    } catch (e) {
        res.status(500)
           .json(e)
    }
})

module.exports = router