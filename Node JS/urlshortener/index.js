const express=require('express');
const urlRoute=require("./routes/url");
const userRoute=require("./routes/user");
const pageRoute=require("./routes/pages");
const app=express();
const connectMongoDB=require('./connection');
const path=require('path');
const {restrictLoggedIn:restrict,checkAuth:check}=require("./middleware/auth");
const cookieParser=require("cookie-parser");

//Templating Engine
app.set('view engine','ejs');
app.set('views',path.resolve("./views"));
//Mongo DB Connection
connectMongoDB();
//Middleware
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());



//All Possible Routes
app.use('/url',restrict,urlRoute);
app.use('/user',userRoute);
app.use('/',check,pageRoute);
//


app.listen(8000,(req,res)=>{console.log('App Started')});