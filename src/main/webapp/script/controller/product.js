const Product = require('../model/product');

class ProductController{

    //Create
    async createProduct(req,res) {
        try {
            const newProduct = Product({
                productName : req.body.productName,
                productType : req.body.productType,
                productAnime : req.body.productAnime,
                productDescription : req.body.productDescription,
                productImg : req.body.productImg,
                productPrice : req.body.productPrice
            })
            const saveProduct = await newProduct.save()
            res.status(201)
               .redirect('/home')
        } catch (e) {
            res.status(500)
            .json(e)
        }
    };

    //Get
    async getProduct(req,res) {
        try {
            const product = await Product.findById(req.params.id);
            res.status(200)
               .json(product);
          } catch (e) {
            res.status(500)
               .json(e);
          }
    };

    //Get all
    async getAllProduct(req,res) {
        try {
            products = await Product.find();
            res.status(200)
               .json(products);
        } catch (e) {
            res.status(500)
               .json(e);
        }
    };

    //Update
    async updateProduct(req,res) {
        try {
            const updatedProduct = await Product.findByIdAndUpdate(req.params.id,{$set: req.body},{ new: true });
            res.status(200)
               .json(updatedProduct);
          } catch (e) {
            res.status(500)
               .json(e);
          }
    };

    //Delete
    async deleteProduct(req,res) {
        try {
            await Product.findByIdAndDelete(req.params.id)
            res.status(200)
               .json({message : `Product id:${id} has been deleted !`})
        } catch (e) {
            res.status(500)
               .json(e)
        }
    };
};

module.exports = new ProductController;