const homeRouter = require('./home');
const productRouter = require('./product');
const cartRouter = require('./cart');
const authRouter = require('./auth');
const userRouter = require('./user')

function route(app){
    app.use('/home', homeRouter)
    app.use('/product',productRouter)
    app.use('/cart',cartRouter)
    app.use('/auth',authRouter)
    app.use('/user',userRouter)
}

module.exports = route