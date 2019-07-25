const express=require("express")
const router=express.Router()
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@sforums-zq5nz.mongodb.net/orders?retryWrites=true&w=majority', {useNewUrlParser: true});
orders=require("../Controllers/orders");
var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json())
router.use(express.static("public"));
router.get("/:id",(req,res)=>{
    console.log(req.params.id)
    orders.find({id:req.params.id},(err,result)=>{
        console.log(result[0])
        res.render("edit",{order:result[0]});
    });
});
router.post("/:id",(req,res)=>{
    orders.find({id:req.params.id},(err,result)=>{
        if(err) throw err
        custome=result[0].customer;
        billing=result[0].billing_address;
        // console.log(custome)
    })
    .then(()=>{
        // console.log(custome)
        billing.phone=req.body.phone;
        custome.phone=req.body.phone.toString();
        custome.email=req.body.email.toString();
        orders.updateOne({id: req.params.id},{$set:{email:req.body.email , customer:custome,billing_address:billing,contact_email:req.body.email}}) 
        .then(()=>{
            console.log("Updated")
            res.redirect("/");
        });
    });
});
module.exports=router;