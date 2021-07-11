const express = require('express');

exports.displayhome = (req,res)=>{
    res.render('accfinder');
}

exports.displayhotels = (req,res)=>{
    res.render('hotel');
}

exports.displayhomestay = (req,res)=>{
    res.render('homestay');
}

exports.displayform = (req,res)=>{
    res.render('form');
}
  
const axios= require('axios');

exports.displayformdata=(req,res)=> {

  
    axios.get('http://localhost:1000/form/book')
    .then(function(response){
        console.log(response.data);
        res.render('booked',{users:response.data});
       
    })
    .catch(err=>{
        res.send(err);
    })

}
