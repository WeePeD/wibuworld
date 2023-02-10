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
            const savedCart = await newCart.save()
            res.status(200)
                .json(savedCart)
        } catch (e) {
            res.status(500)
                .json(e)
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
             .json(e)
        }
    };

   //Update
   async addProductCart(req,res) {
    try {
        const findCart = await Cart.findById(req.params.id)
        const quantity = parseInt(req.body.quantity)
        let check = false
        for(i = 0; i < findCart.products.length; i++){
            console.log("this is test1 " +check)
            if (req.body.productId == findCart.products[i].productId){    
                console.log("this is test2 " +check)
                check = true
                console.log("this is test3 " +check)
                findCart.products[i].quantity += quantity
                findCart.save()
                break
            }    
        }
        
        if (check == false){
            await Cart.findByIdAndUpdate(req.params.id,{$push : {products : req.body}},{ new: true })
        }
        res.status(200)
            .redirect('/cart')
        } catch (error) {
            res.status(500)
               .json({err: error})
        }
    };


    //Delete
    async removeProductCart(req,res) {
        try {   
            const findCart = await Cart.findById(req.params.id)
            for (i = 0; i < findCart.products.length; i++){
                
                if (req.body.productId == findCart.products[i].productId){
                    await Cart.findByIdAndUpdate(req.params.id,{$pull: {products: {productName: req.body.productName}}})
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