//Express
const express = require('express');
const app = express();
//Dotenv
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({path:__dirname+'/.env'})
//Path
const path = require('path')
//Ejs set
app.set('view engine', 'ejs')

//Database connection
mongoose.connect(process.env.DB_URL,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(()=>{
    console.log('Database connected !')
})
.catch((err)=>{
    console.log(err)
})

//Import model
const Product = require('./src/main/webapp/script/model/product')

//Router
const authRouter = require('./src/main/webapp/script/route/auth')
const productRouter = require('./src/main/webapp/script/route/product')
const cartRouter = require('./src/main/webapp/script/route/cart')
const orderRouter = require('./src/main/webapp/script/route/order')

app.use(express.json())

app.use('/style',express.static(__dirname + '/src/main/webapp/style'))
app.use('/poster',express.static(__dirname + '/src/main/webapp/poster'))
app.use('/picSource',express.static(__dirname + '/src/main/webapp/picSource'))
app.use('/script',express.static(__dirname+'/src/main/webapp/script'))
app.use('/includes',express.static(__dirname+'/src/main/webapp/includes'))
app.use('/font',express.static(__dirname+'/src/main/webapp/font'))

app.get('/', (req,res) => {
   res.render(__dirname + '/src/main/webapp/views/index')
   
})
app.get('/home.html',(req,res,next) => {
    Product.find({}, (err,products) => {
        if (err) res.json({message : err})
        res.render(__dirname+'/src/main/webapp/views/home',{ productlist : products})
    })
})


app.use('/api/auth',authRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

const listener = app.listen(process.env.PORT, () => {
    console.log('Backend server is running!');
  });
