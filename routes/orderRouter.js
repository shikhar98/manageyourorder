const express=require("express")
const router=express.Router()
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@sforums-zq5nz.mongodb.net/orders?retryWrites=true&w=majority', {useNewUrlParser: true});
orders=require("../Controllers/orders");
var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json())
router.use(express.static("public"));
router.get("/",(req,res)=>{
    listoforders=[]
    orders.find({},(err,result)=>{
        if(err) throw err;    
        listoforders=result;
        // console.log(listoforders);
    })
    .then(()=>{
        // console.log(listoforders);
        res.render("index",{orders:listoforders})
    })
});

module.exports=router;
