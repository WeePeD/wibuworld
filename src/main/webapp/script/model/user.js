const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName : { type: String, require: true, min: 6, max: 255},
    email: { type: String, require: true, min: 6, max: 255},
    password: { type: String, require: true, min: 6, max: 255},
    isAdmin: { type: Boolean, default: false},
    address: { type: String, require: true},
    status: { type: String, enum:['Pending','Active'], default: 'Pending'},
    confirmationCode: { type: String}
},
{
    timestamp : true
})

module.exports = mongoose.model('User',userSchema)