const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/accfinder';

const connectdb = async () =>{
    try{
    const con = await mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false,
        useCreateIndex:true,
    }) 
    console.log("DB Connected..");       
 }catch(e){
    console.log(e);
    process.exit(1);
 }
 }
module.exports = connectdb;