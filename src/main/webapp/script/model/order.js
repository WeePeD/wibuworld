const mongoose = require('mongoose');


const OrderSchema = new mongoose.Schema(
{
    userId: { type: mongoose.Types.ObjectId, required: true, ref:'user'},
    products: [
      {
        productId: { type: mongoose.Types.ObjectId,ref: 'product'},
        quantity: {type: Number,default: 1},
      },
    ],
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "pending"},
},
{ 
    timestamps: true 
})

module.exports = mongoose.model("Order", OrderSchema);
