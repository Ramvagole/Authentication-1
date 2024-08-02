const mongoose=require("mongoose")

let registerSchema=new mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
},{versionKey:false})

let Register=mongoose.model("Register",registerSchema)
module.exports=Register