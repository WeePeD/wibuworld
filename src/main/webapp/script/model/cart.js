const mongoose = require('mongoose');


const cartSchema = mongoose.Schema({
    userId: { type : String, require: true},
    products: [{
        productId: { type: mongoose.Types.ObjectId, ref:'Product'},
        quantity: { type: Number , default: 1},
        totalprice : { type: Number}
    }]
},
{
    timestamp : true
})

module.exports = mongoose.model('Cart',cartSchema)