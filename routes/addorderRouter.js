const express=require("express")
const router=express.Router()
router.get("/",(req,res,next)=>{
    console.log("Hello\n There\n I amm Shikhar")
    console.log(req.body)
})
module.exports=router;