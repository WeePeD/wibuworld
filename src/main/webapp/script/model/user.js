const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName : { type: String, require: true, unique: true},
    userEmail: { type: String, require: true, unique: true},
    userPassword: { type: String, require: true, unique: true},
    isAdmin: { type: Boolean, default: false},
    userAddress: { type: String, require: true}
},
{
    timestamp : true
})

module.exports = mongoose.model('User',userSchema)