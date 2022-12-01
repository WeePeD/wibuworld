const mongoose = require('mongoose');


const cartSchema = mongoose.Schema({
    userId: { type : mongoose.Types.ObjectId, require: true},
    products: [{
        productId: { type: mongoose.Types.ObjectId, require: true, ref:'product'},
        quantity: { type: Number , default: 1}
    }]
},
{
    timestamp : true
})

module.exports = mongoose.model('Cart',cartSchema)