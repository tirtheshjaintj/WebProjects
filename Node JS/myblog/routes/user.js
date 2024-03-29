const express=require('express');
const router=express.Router();
const user=require('../models/user');
const multer=require('multer');
const {getUser,setUser}=require('../services/auth');

const storage=multer.diskStorage({
destination:function(req,file,cb){
    cb(null,`./public/uploads`);
},
fileName:function(req,file,cb){
    const unique = `${Date.now()}-${file.originalname}`;
    cb(null, unique);
}
});

const upload=multer({storage});


router.get('/signin',(req,res)=>{
    return res.render("signin");
})

router.get('/signup',(req,res)=>{
    return res.render("signup");
})

router.get('/logout',(req,res)=>{ 
    return res.clearCookie("token").redirect("/");
})



router.post("/signup",upload.single('profile_image'),async (req,res)=>{
    const {name,email,password}=req.body;
   await user.create({
    name,
    email,
    password,
    profile_image:`uploads/${req.file.filename}`
   })
   return res.redirect("/user/signin");
})

router.post("/signin",async (req,res)=>{
   const {email,password}=req.body;

   try{
   const data=await user.matchPassword(email,password);
   let token=setUser(data._doc);
   return res.cookie("token",token).redirect("/");
   }
   catch(err){
    return res.render("signin",{error:err});
   }
   
})




module.exports=router;