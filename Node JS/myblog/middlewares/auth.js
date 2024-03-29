const {getUser,setUser}=require('../services/auth');

function checkForLogin(req,res,next){
    const token=req.cookies.token;
    if(token){
        const user=getUser(token);
        req.user=user;
    } 
    next();
}
function checkForBlogging(req,res,next){
    const token=req.cookies.token;
    if(!token) res.status(401).redirect("/user/signin");
    const user=getUser(token);
    if(!user) res.status(401).redirect("/user/signin");
    req.user=user;
    next();
}

module.exports={checkForLogin,checkForBlogging};