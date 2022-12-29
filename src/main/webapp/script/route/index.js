const homerouter = require('./home');
const productrouter = require('./product')
const cartrouter = require('./cart')

function route(app){
    app.use('/home', homerouter)
    app.use('/product',productrouter)
    app.use('/cart',cartrouter)
}

module.exports = route