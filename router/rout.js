const express=require("express")
const Register=require("../model/register.model")
const jwt=require("jsonwebtoken")
const check = require("../middelware/token")
const router=express.Router()

router.post("/register",async(req,res)=>{
    let {username,email,password}=req.body
    try{
        let reg=new Register({username,email,password})
        await reg.save()
        res.status(200).send("successfully created")
    }catch(error){
        res.status(400).send("not created register")
    }
})

router.post("/login",async(req,res)=>{
    let {email,password}=req.body
    try{
        let a=await Register.findOne({email,password})
        if(!a){
            res.status(202).send("register before login")
        }else{
            let token=jwt.sign({email:a.email},"manik",{expiresIn:"30m"})
            res.status(200).json({token})
        }
    }catch(err){
        res.status(400).send(err,"error in login")
    }
})
router.get("/product",check,async(req,res)=>{
    try{
        res.status(200).send(req.body.em)
    }catch(err){
        res.status(400).send("error occured in token")
    }
})
module.exports=router