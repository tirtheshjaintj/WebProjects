const express = require("express");
const app = express();
const userRouter=require('./routes/user');
const {connectMongoDB}=require('./connection');
const port = 8000;
const {logReqRes}=require('./middlewares/logfile');

app.use(express.urlencoded({entended:false}));
app.use(logReqRes('log.txt'));

connectMongoDB('mongodb://127.0.0.1:27017/myusers');

// app.get("/api/users/:id", (req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id == id);
//     let html = "<h1>User Not Found</h1>";
//     return res.send(user);
// });


app.use('/user',userRouter);

app.get('/',(req,res)=>{
    return res.send("Hello Home Page Here");
});

app.listen(port, () => { console.log("Server Started"); });