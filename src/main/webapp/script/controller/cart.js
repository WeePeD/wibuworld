const { find } = require('../model/cart');
const Cart = require('../model/cart');

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
    async addProductCart(req,res) {
        try {
            const findCart = await Cart.findById(req.params.id);
            for(let i = 0; i < findCart.products.length; i++)
            {
                if (req.body.products.productId == findCart.products[i].productId)
                {    
                    findCart.products[i].quantity += req.body.products.quantity
                    console.log(findCart.products[i])
                    findCart.save()
                    break;
                }    
            }
            await Cart.findByIdAndUpdate(req.params.id,{$push : {products : req.body}},{ new: true });
            res.status(200)
               .redirect('/cart')
        } catch (error) {
          res.status(500)
             .json({err: error});
        }
    };

    //Delete
    async removeProductCart(req,res) {
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