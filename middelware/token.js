let jwt=require("jsonwebtoken")

function check(req,res,next){
    jwt.verify(req.query.tit,"manik",(error,decode)=>{
        if(error){
            res.status(400).send("error in token")
        }else{
            req.body.em=decode.email
            next()
        }
    })
}

module.exports=check