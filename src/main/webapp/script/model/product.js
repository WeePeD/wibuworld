const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName : { type: String , require: true},
    productDescription : { type: String},
    productImg : { type: String, require: true},
    productPrice : { type: Number, require: true}
},
{
    timestamp : true
})

module.exports = mongoose.model('Product',productSchema)