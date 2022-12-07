const mongoose = require('mongoose');


const cartSchema = mongoose.Schema({
    userId: { type : String, require: true},
    products: [{
        productId: { type: mongoose.Types.ObjectId, ref:'Product'},
        productName : { type: String},
        productDescription : [{ type: String}],
        productImg : { type: String},
        productPrice : { type: Number},
        quantity: { type: Number},

    }],
    cartPrice : { type : Number}
},
{
    timestamp : true
})

module.exports = mongoose.model('Cart',cartSchema)