const express=require("express")
const router=express.Router()

router.get("/",(req,res)=>{
    // res.send("hello there!")
    // res.status(200).json({status:"ok"})
    res.sendStatus(200)
    res.end();
    console.log("Hello\n There\n I amm Shikhar")
    console.log(req.body)
})
module.exports=router;