//Express
const express = require('express');
const app = express();

//Dotenv
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({path:__dirname+'/.env'});

//Path
const path = require('path');

//Ejs set
app.set('views', path.join(__dirname + '/src/main/webapp/views'));
app.set('view engine', 'ejs');


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
});


app.use('/style',express.static(__dirname + '/src/main/webapp/style'));
app.use('/poster',express.static(__dirname + '/src/main/webapp/poster'));
app.use('/picSource',express.static(__dirname + '/src/main/webapp/picSource'));
app.use('/script',express.static(__dirname+'/src/main/webapp/script'));
app.use('/includes',express.static(__dirname+'/src/main/webapp/includes'));
app.use('/font',express.static(__dirname+'/src/main/webapp/font'));





const route = require('./src/main/webapp/script/route');

route(app);
app.get('/', (req,res) => {
    res.render(__dirname + '/src/main/webapp/views/index')
    
});


app.get('/addproduct', (req,res) =>{
    res.render(__dirname+'/src/main/webapp/views/add_product')
});




const listener = app.listen(process.env.PORT, () => {
    console.log('Backend server is running!');
});
