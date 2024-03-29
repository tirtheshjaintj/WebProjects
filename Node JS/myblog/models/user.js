const mongoose=require('mongoose');
const { createHmac,randomBytes } = require('crypto');

const userSchema=new mongoose.Schema({
name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true,
    unique:true
},
salt:{
    type:String
},
password:{
    type:String,
    required:true
},
profile_image:{
    type:String,
    default:'/images/avatar.png'
},
role:{
    type:String,
    enum:['USER','ADMIN'],
    default:'USER'
}
},{timestamps:true});

userSchema.pre("save",function(next){
    const user=this;
    if(!user.isModified) return;
    const salt=randomBytes(16).toString();
    const hashedPassword=createHmac('sha256',salt)
    .update(user.password)
    .digest("hex");
    this.salt=salt;
    this.password=hashedPassword;
next();
});

userSchema.static('matchPassword',async function(email,password){
    const user=await this.findOne({
        email
    })
    if(!user) throw new Error("Incorrect Email or Password");
    const salt=user.salt;
    const hashedPassword=user.password;
    const userProvidedHash=createHmac('sha256',salt)
    .update(password)
    .digest("hex");
    if(hashedPassword!==userProvidedHash) throw new Error("Incorrect Email or Password");
    return {...user,password:undefined,salt:undefined};
});

const user=mongoose.model("user",userSchema);
module.exports=user;