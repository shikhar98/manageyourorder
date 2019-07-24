const express=require("express")
const router=express.Router()

router.get("/",(req,res,next)=>{
    // res.send("hello there!")
    res.status(200).json({status:"ok"})
    res.end();
    console.log("Hello\n There\n I amm Shikhar")
    console.log(req.body)
})
module.exports=router;