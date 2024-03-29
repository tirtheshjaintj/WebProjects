// const sessionIdMap=new Map();
const jwt=require('jsonwebtoken');
const secret="TirtheshJain@123";

function setUser(user){
    //sessionIdMap.set(id,user);
    let user2=user.toJSON();
    return jwt.sign({email:user2.email,name:user2.name},secret);
}

function getUser(token){
    if(!token) return null;
    try{
        return jwt.verify(token,secret);
    }
    catch(err){
        return null;
    }

//StateFull Login
//return sessionIdMap.get(id);
}

module.exports={
    setUser,
    getUser
}