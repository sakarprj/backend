const express=require('express');
const router = require('./router');

const app=express();
app.use(express.json());
app.use('/api/v1',router)

app.use((req,res)=>{
    next({code:404,message:"Page Not Found",status:"PAGE_NOT_FOUND"})
})

app.use((err,req,res,next)=>{
    let result=err.detail||null
    let message=err.message||"Internal Server Error"
    let status=err.status||"INTERNAL_SERVER_ERROR"
    let code=err.code||500
    res.status(code).json({message,status,result})
})


module.exports=app