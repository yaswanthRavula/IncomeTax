const mongoose=require('mongoose');
const express=require('express');
const router=express.Router();
const ClientSchema=require('./clientSchema');
router.get("/",async(req,res)=>{
    try{
        const data=await ClientSchema.find();
        res.send(data);
    }catch(err){
        res.send("Error from Backend Server: "+err);
    }
})
router.post("/",async(req,res)=>{
    try{
        const data=new ClientSchema(
            {
                name:req.body.name,
                mailId:req.body.mailId,
                fileType:req.body.fileType,
                query:req.body.query
            }
        )
        await data.save();
        res.send(true);
    }
    catch(exception){
        console.log(exception);
    }

})
module.exports=router;