const express=require("express")
const router=express.Router()
var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json())

router.post("/",(req,res)=>{
    // res.send("hello there!")
    // res.status(200).json({status:"ok"})
    // res.status(200);
    console.log("Hello There I am Shikhar");
    console.log(req.body);
    res.end();
})
router.get("/",(req,res)=>{
    res.sendStatus(200)
    res.end();
})
module.exports=router;