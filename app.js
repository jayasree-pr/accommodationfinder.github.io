const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

const connectdb = require('./database/connection');

const app = express();
const port = process.env.port || 1000;

connectdb();
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.set('view engine',"ejs");

app.use('/css',express.static(path.resolve(__dirname,'assets/css')));
//app.use('/js',express.static(path.resolve(__dirname,'assets/js')));
app.use('/img',express.static(path.resolve(__dirname,'assets/images')));

app.use('/',require('./router/route'));

app.get('/',(req,res)=>{
    res.render("accfinder");
})

app.listen(port,()=>{console.log("running...")})