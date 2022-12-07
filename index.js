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

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

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
const Cart = require('./src/main/webapp/script/model/cart')
//Router
const productRouter = require('./src/main/webapp/script/route/product')
const cartRouter = require('./src/main/webapp/script/route/cart')



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
app.get('/home',(req,res) => {
    Product.find({}, (err,products) => {
        if (err) res.json({message : err})
        res.render(__dirname+'/src/main/webapp/views/home',{ productlist : products})
    })
})

app.get('/select_product/:productType', (req,res) => {
    const type = req.params.productType
    console.log(type)
    Product.find({productType : type}, (err,products) => {
        if (err) res.json({message : err})
        res.render(__dirname+'/src/main/webapp/views/select_product',{ productlist : products})
    })
})

app.post('/search_product', (req,res)=>{
    const productAnime = JSON.stringify(req.body.productAnime)
    console.log(productAnime)
    Product.find({productAnime : productAnime} , (err, products) => {
        if (err) res.json({message : err})
        res.render(__dirname+'/src/main/webapp/views/search_product',{ productlist : products})
    })
})

app.get('/detail/:id', (req,res) => {
    const id = req.params.id
    Product.findById(id, (err, product) =>{
        if (err) res.json({message : err})
        res.render(__dirname+'/src/main/webapp/views/detail',{ product : product})
    })
})

app.get('/cart' , (req,res) =>{
    Cart.findOne({} ,(err,cart) =>{
        if (err) res.json({message : err}) 
        res.render(__dirname+'/src/main/webapp/views/cart',{cart:cart})
    })
})

app.get('/addproduct', (req,res) =>{
    res.render(__dirname+'/src/main/webapp/views/add_product')
})

app.use('/product',productRouter)
app.use('/cart',cartRouter)


const listener = app.listen(process.env.PORT, () => {
    console.log('Backend server is running!');
  });
