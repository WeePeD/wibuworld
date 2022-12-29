const Cart = require('../model/cart')

class CartController {
     
    index (req,res) {
        Cart.findOne({} ,(err,cart) =>{
            if (err) res.json({message : err}) 
            res.render('cart',{cart:cart})
        })
    }

    //Create
    async createCart(req,res) {
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
    };

    //Get
    async getCart(req,res) {
        try {
            const cart = await Cart.findById(req.params.id)
            res.status(200)
               .json(cart)
        } catch (e) {
            res.status(500)
             .json(e);
        }
    };

    //Get all
    async getAllCart(req,res) {
        try {
            carts = await Cart.find();
            res.status(200)
               .json(carts);
        } catch (e) {
            res.status(500)
               .json(e);
        }
    };

    //Update
    async updateCart(req,res) {
        try {
            const updatedCart = await Cart.findByIdAndUpdate(req.params.id,{$push : {products : req.body}},{ new: true });
            res.status(200)
               .redirect('/cart')
        } catch (e) {
          res.status(500)
             .json(e);
        }
    };

    //Delete
    async deleteCart(req,res) {
        try {
            await Cart.findByIdAndDelete(req.params.id)
            res.status(200)
               .json({message : `Cart id:${id} has been deleted !`})
        } catch (e) {
            res.status(500)
               .json(e)
        }
    };
}

module.exports = new CartController