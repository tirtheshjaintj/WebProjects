const mongoose=require('mongoose');

const blogSchema=new mongoose.Schema({

  title:{
    type:String,
    required:true
  },
  body:{
    type:String,
    required:true
  },
  coverImageURL:{
    type:String,
    default:"/images/avatar.png"
  },
  createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user"
  }
},{timestamps:true});

const blog=mongoose.model("blog",blogSchema);

module.exports=blog;