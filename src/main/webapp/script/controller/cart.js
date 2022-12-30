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
            const findCart = await Cart.findById(req.params.id)
            const check = false
            for(let i = 0; i < findCart.products.length; i++){
                if (req.body.productId == findCart.products[i].productId)
                {    
                    findCart.products[i].quantity += parseInt(req.body.quantity)
                    findCart.save()
                    check = true
                    break
                }    
            }
            if (check == false){
                await Cart.findByIdAndUpdate(req.params.id,{$push : {products : req.body}},{ new: true });
            }
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
            const findCart = await Cart.findById(req.params.id)
            console.log(req.body.productName)
            console.log(typeof req.body.productName)
            for (let i = 0; i < findCart.products.length; i++){
                if (toString(req.body.productName) == findCart.products[i].productName){
                    await Cart.findByIdAndUpdate(req.params.id,{$pull : {products : {productName : toString(req.body.productName)}}})
                    break
                } 
            }
            res.status(200)
               .redirect('/cart')
        } catch (e) {
            res.status(500)
               .json({err : "Error"})
        }
    };
}

module.exports = new CartController