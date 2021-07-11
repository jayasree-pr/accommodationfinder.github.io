const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String
    },
    place :{
        type : String
    },
    hname :{
        type : String
    },
    checkin : {
        type : Date
    },
    checkout : {
        type : Date
    }
})
const userdb = mongoose.model('userdb',schema);
module.exports = userdb;