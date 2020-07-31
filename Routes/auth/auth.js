//ROUTER LEVEL MIDDLEWARE
const express=require('express');
const router=express.Router();

//@router or http method GET
//@ description its profile get information
//@access PUBLIC
router.get("/",(req,res)=>{
    res.send("i am auth router");
});
module.exports=router;