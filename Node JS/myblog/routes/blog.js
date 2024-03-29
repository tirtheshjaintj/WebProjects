const express=require('express');
const router=express.Router();
const multer  = require('multer');
const Blog=require('../models/blog');
const Comment=require('../models/comment');


const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,`./public/uploads`);
    },
    filename:function(req,file,cb){
        const unique = `${Date.now()}-${file.originalname}`;
        cb(null, unique);
    }
});
const upload = multer({ storage: storage });

router.get("/:id",async(req,res)=>{
    const blog=await Blog.findById(req.params.id).populate("createdBy");
    const comment=await Comment.find({blogId:req.params.id}).sort({'createdAt':-1}).populate("createdBy");
    res.render("blog",{
        user:req.user,
        blog,
        comment
    });
});

router.post("/comment/:blogId",async (req,res)=>{
    const {content}=req.body;
    const comment= await Comment.create({
      content:content,
      blogId:req.params.blogId,
      createdBy:req.user._id
    });
    return res.redirect(`/blog/${req.params.blogId}`);
});

router.post("/",upload.single('coverfile'),async (req,res)=>{
    console.log(req.body);
    console.log(req.file);
    const{title,body}=req.body;
   const blog= await Blog.create(
         {
          title:title,
          body:body,
          createdBy:req.user._id,
          coverImageURL:`uploads/${req.file.filename}`
         }
    )
    return res.redirect(`/blog/${blog._id}`);
});




// router.post()

module.exports=router;

