const jwt=require("jsonwebtoken");
const secret="$uperMan@123";

function getUser(token){
    return jwt.verify(token,secret);
}
function setUser(user){
    const payLoad={
        _id:user._id,
        email:user.email,
        profile_image:user.profile_image,
        role:user.role,
        name:user.name
    }
    const token=jwt.sign(payLoad,secret); 
    return token;
}

module.exports={getUser,setUser};