const jwt=require("jsonwebtoken");

module.exports.authenticate_user=(req,res,next)=>{
    console.log(req.body,"req.body in middlewer authentication/from-auth/authUser.js authenticate_user......................")
    
   
   
    try {
        const token=req.body.Headers.authorization_token
        const tokendata=jwt.verify(token,"sekeretkeyxyz")  
      console.log("tokendata-> email -",tokendata)
req.user=tokendata;

        next();   
    } catch (error) {
        res.status(200).json({messge:"user token not aviliable/user logged out so login /from-auth/userauth or backend err"})
       console.log("errnr userAuth.js in auth")
    }
}