const userdb = require('../database/model');

exports.create = (req,res)=>{
   if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }
    const user = new userdb({
        name : req.body.name,
        place : req.body.place,
        hname : req.body.hname,
        checkin : req.body.checkin,
        checkout : req.body.checkout
    })
    user
        .save(user)
        .then((data)=>{
            //console.log(response.data);
            res.render('booked',{users:data});
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred"
            });
        })
}