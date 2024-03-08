const express=require('express');
const urlRoute=require("./routes/url");
const app=express();
const connectMongoDB=require('./connection');
const URL=require('./models/url');
const path=require('path');


//Templating Engine
app.set('view engine','ejs');
app.set('views',path.resolve("./views"));
//

connectMongoDB('mongodb://localhost:27017/shortURL')
.then(()=>{console.log('Mongo DB Connected')});

app.use(express.urlencoded({extended: false}));
// app.use('/',(req,res)=>{
//     return res.render('home');
// });

app.use('/url',urlRoute);
app.get('/view',async (req,res)=>{
    const allUrls=await URL.find({});
    return res.render('urls',{
        urls:allUrls
    });
});

app.get('/',async (req,res)=>{
    const allUrls=await URL.find({});
    return res.render('home',{
        urls:allUrls
    });
});
app.all('*', async (req, res) => { 
    const allUrls=await URL.find({});
    return res.render('home',{
        urls:allUrls
    });
}); 



app.listen(8000,(req,res)=>{
console.log('App Started');
});