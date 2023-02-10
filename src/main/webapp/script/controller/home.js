const Product = require('../model/product');

class HomeController {
    
    index (req, res) {
        Product.find({}, (err,products) => {
            if (err) res.json({message : err})
            res.render('home',{ productlist : products})
        })
    };

    detail (req,res) {
        const id = req.params.id
        Product.findById(id, (err, product) =>{
            if (err) res.json({message : err})
            res.render('detail',{ product : product})
        })
    };

    productType (req,res) {
        const type = req.params.productType
        Product.find({productType : type}, (err,products) => {
            if (err) res.json({message : err})
            res.render('select_product',{ productlist : products})
        })
    };

    searchProduct (req,res){
        const productAnime = req.query.productAnime
        Product.find({productAnime : productAnime} , (err, products) => {
            if (err) res.json({message : err})
            res.render('search_product',{ productlist : products})
        })
    }
}

module.exports = new HomeController