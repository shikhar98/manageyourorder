const express=require("express")
const router=express.Router()
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@sforums-zq5nz.mongodb.net/orders?retryWrites=true&w=majority', {useNewUrlParser: true});
orders=require("../Controllers/orders");
var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json())
var datetime = new Date();
router.post("/",(req,res)=>{
    // res.send("hello there!")
    // res.status(200).json({status:"ok"})
    // res.status(200);
    // console.log("Hello There I am Shikhar");
    // console.log(req.body);
    lineitms=req.body.line_items;
    listlineitms=[]
    lineitms.forEach(function (item, index) {
        itm={
            id:item.id,
            varient_id:item.varient_id,
            title:item.title,
            quantity:item.quantity,
            vendor:item.vendor,
            name:item.name,
            price:item.price,
            product_id:item.product_id
        }
        listlineitms.push(itm)
      });
    const o1={
        // _id: mongoose.Schema.Types.ObjectId,
        id:req.body.id,
    email:req.body.email,
    gateway:req.body.gateway,
    total_price:req.body.total_price,
    subtotal_price:req.body.subtotal_price,
    total_tax:req.body.total_tax,
    contact_email:req.body.contact_email,
    order_status_url:req.body.order_status_url,
    line_items: listlineitms,
    billing_address: {
        first_name: req.body.billing_address.first_name,
        address1: req.body.billing_address.address1,
        phone: req.body.billing_address.phone,
        city: req.body.billing_address.city,
        zip: req.body.billing_address.zip,
        province: req.body.billing_address.province,
        country: req.body.billing_address.country,
        last_name: req.body.billing_address.last_name,
        name: req.body.billing_address.name,
        country_code: req.body.billing_address.country_code,
        province_code: req.body.billing_address.province_code
      },
      customer:{
          id:req.body.customer.id,
          email:req.body.customer.email,
          created_at:datetime,
          updated_at:datetime,
          first_name:req.body.customer.first_name,
          last_name:req.body.customer.last_name,
          phone:req.body.customer.phone
      }
    }
    // console.log(o1)
    const order = new orders(o1);
    order.save().then(() => console.log('Successfull'));
    res.end();
})
router.get("/",(req,res)=>{
    res.sendStatus(200)
    res.end();
})
module.exports=router;
