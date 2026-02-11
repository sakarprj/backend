class authcontroller{
    register=(req,res,next)=>{
        try {
            res.send("Hello response")
        }catch(error){
            next(error)
        }
    }
    login=(req,res,next)=>{
        try {


        }catch(error){
            next(error)
        }
    }
    logout=(req,res,next)=>{
        try {
            res.send("i am logout")

        }catch(error){
            next(error)
        }
    }
    activation=(req,res,next)=>{
        try {

        }catch(error){
            next(error)
        }
    }
    resendActivation=(req,res,next)=>{
        try {

        }catch(error){
            next(error)
        }
    }
    profile=(req,res,next)=>{
        try {

        }catch(error){
            next(error)
        }
    }
}
const authctrl=new authcontroller()

module.exports=authctrl