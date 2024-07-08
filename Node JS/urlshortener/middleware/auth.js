const {getUser}=require("../services/auth");

function checkForAuthentication(req,res,next){
const userUid=req.headers["Authorization"];
req.user=null;
if(!userUid || !userUid.startsWith("Bearer")){
return next();
}
const token=userUid.split('Bearer ')[1];
const user=getUser(token);
}


async function restrictLoggedIn(req,res,next){
const userUid=req.cookies.uid;
if(!userUid) return res.redirect("/login");
// const userUid=req.headers["Authorization"];
// const token=userUid.split('Bearer ')[1];
// const user=getUser(token);
const user=getUser(userUid);
if(!user) return res.redirect("/login");
// req.user=user;
next();
}
async function checkAuth(req,res,next){
    // const userUid=req.headers["authorization"];
    // const token=userUid.split('Bearer ')[1];
    // const user=getUser(token);
    const userUid=req.cookies.uid;
    const user=getUser(userUid);
    req.user=user;
    next();
}

module.exports={restrictLoggedIn,checkAuth};