//ROUTER LEVEL MIDDLEWARE
const express=require('express');
const router=express.Router();

//@router or http method GET
//@ description its AUTH get information
//@access PUBLIC
router.get("/",(req,res)=>{
    res.send("i am sports router");
});
module.exports=router;