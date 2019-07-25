const express=require("express")
const router=express.Router()
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@sforums-zq5nz.mongodb.net/orders?retryWrites=true&w=majority', {useNewUrlParser: true});
orders=require("../Controllers/orders");
var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json())
router.get("/:id",(req,res)=>{
    orders.remove({id:req.params.id})
    .then(()=>{
        res.redirect("/")
    })
});
module.exports=router;
