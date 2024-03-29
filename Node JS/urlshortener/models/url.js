const mongoose=require('mongoose');

const urlSchema=new mongoose.Schema({
shortId:{
    required:true,
    unique:true,
    type:String
},
redirectURL:{
    required:true,
    type:String
},
visitHistory:[{timestamp:{type:Number}}],
createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"users",
}
},
{timestamps:true}
);

const URL=mongoose.model("urls",urlSchema);

module.exports=URL;
