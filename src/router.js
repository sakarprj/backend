const authRouter = require('./auth.router')

const router=require('express').Router()

router.use('/sakar',(req,res)=>{
    let otp=Math.ceil(Math.random()*9999)
    res.json({message:"Hello World",status:"success",result:otp})
})

router.use('/auth',authRouter)

module.exports=router