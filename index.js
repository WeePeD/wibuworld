//Express
const express = require('express');
const app = express();

//Dotenv
const dotenv = require('dotenv');
dotenv.config({path:__dirname+'/.env'});
const mongoose = require('mongoose');
const db = require('mongodb');

//Path
const path = require('path');

//Ejs set
app.set('views', path.join(__dirname + '/src/main/webapp/views'));
app.set('view engine', 'ejs');

//Body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Swagger
const swaggerUI= require('swagger-ui-express');
const swaggerDoc= require('swagger-jsdoc');

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

//Route
const route = require('./src/main/webapp/script/route');
route(app);

app.get('/', (req,res) => {
    res.render(__dirname + '/src/main/webapp/views/index')
});


app.get('/addproduct', (req,res) =>{
    res.render(__dirname+'/src/main/webapp/views/add_product')
});

//Swagger option
const swaggerOption = {
    definition:{
        openapi:"3.0.0",
        info:{
            title: "Wibu world Swagger",
            version: "1.0.0",
            description: "This is the wibu world swagger"
        },
        servers:[
            {
                url: "http://localhost:5000"
            }
        ],
    }
    ,apis:['./src/main/webapp/script/controller/*.js']
}

const specs = swaggerDoc(swaggerOption)
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(specs))


const listener = app.listen(process.env.PORT, () => {
    console.log('Backend server is running!');
});
