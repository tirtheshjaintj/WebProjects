const User=require('../models/user');
// const {v4:uuid}=require('uuid');
const {setUser}=require('../services/auth');


async function handleUserSignUp(req,res){
const {name,email,password}=req.body;
try{
  const user= await User.create({
    name:name,
    email:email,
    password:password
    });
}
catch(err){
    return res.render("signup",{error:"Sorry Email Already Exists"});
}
return res.redirect('/');
}

async function handleUserLogin(req,res){
    const {email,password}=req.body;
    const user=await User.findOne({
    email:email,
    password:password
    });
    
    if(!user) return res.render("login",{error:"Sorry Invalid Email Or Password"});
    // const sessionId=uuid();
    const token=setUser(user);
    // return res.json({token});
    res.cookie('uid',token, { expires: new Date(Date.now() + 900000), httpOnly: true });
    return res.redirect('/');
}

module.exports ={handleUserSignUp,handleUserLogin};