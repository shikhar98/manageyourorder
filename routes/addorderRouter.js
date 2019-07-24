const express=require("express")
const router=express.Router()
router.get("/",(req,res,next)=>{
    res.render("index.html")
    console.log("Hello\n There\n I amm Shikhar")
    console.log(req.body)
})
module.exports=router;