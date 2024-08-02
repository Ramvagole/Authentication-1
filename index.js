const express=require("express")
const mongoose=require("mongoose")
const dotenv=require("dotenv").config()
const router=require("./router/rout.js")
let app=express()
let port=process.env.PORT
app.use(express.json())
app.use("/glass",router)
app.listen(port,async()=>{
    try{
        await mongoose.connect(process.env.URL)
        console.log(`hosted on port at ${port} and connected to mongodb`)
    }catch(error){
        console.log(`${error} occured in listen`)
    }
})