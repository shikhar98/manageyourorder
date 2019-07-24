const express=require("express")
const router=express.Router()
var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({extended: true}));
router.post("/",(req,res)=>{
    // res.send("hello there!")
    // res.status(200).json({status:"ok"})
    res.sendStatus(200)
    res.end();
    console.log("Hello\n There\n I amm Shikhar")
    console.log(req.body)
})
router.get("/",(req,res)=>{
    res.sendStatus(200)
    res.end();
})
module.exports=router;