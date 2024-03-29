const express=require('express');
const path=require('path');
const app=express();
const mongoose=require('mongoose');
const userRoutes=require('./routes/user');
const blogRoutes=require('./routes/blog');
const cookieParser = require('cookie-parser');
const {checkForLogin,checkForBlogging}=require('./middlewares/auth');
const Blog=require('./models/blog');


app.use(cookieParser());
require('dotenv').config();
app.set('view engine','ejs');
app.set('views',path.resolve("./views"));
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.resolve('./public')));
app.use(checkForLogin);
mongoose
.connect("mongodb://localhost:27017/myblog")
.then((e)=>{
    console.log("Mongo DB Connected");
})
app.use("/user",userRoutes);
app.use("/blog",blogRoutes);

app.get("/addblog",checkForBlogging,(req,res)=>{
    res.render("addblog",{
        user:req.user
    });
});

app.get("/",checkForLogin,async (req,res)=>{
    const allBlogs=await Blog.find({}).sort({'createdAt':-1}).populate("createdBy");
    res.render("home",{
        user:req.user,
        blogs:allBlogs
    });
});





app.listen(9000,()=>{console.log("Server Started")});