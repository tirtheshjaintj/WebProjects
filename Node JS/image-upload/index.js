const express=require('express');
const path=require('path');
const app=express();
const multer=require('multer');

const storage = multer.diskStorage({
destination: function(req,file,cb){
    return cb(null,"./uploads");
},
filename: function(req,file,cb){
    return cb(null,`${Date.now()}-${file.originalname}`);
}
});
const upload=multer({storage});
app.use(express.urlencoded({extended:false}));
app.set("view engine","ejs");
app.set("views",path.resolve('./views'));
app.get("/",(req,res)=>{
    return  res.render("homepage");
})


app.post('/upload', upload.single("profile_image"),(req,res)=>{
console.log(req.body);
console.log(req.file);
return res.redirect("/");
})

app.listen(8000,()=>{
    console.log("Started Server");
})