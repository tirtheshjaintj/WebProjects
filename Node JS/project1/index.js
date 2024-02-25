const express = require("express");
const users = require("./data.json");
const fs=require('fs');
const app = express();
const port = 8000;


//MiddleWare
app.use(express.urlencoded({extended:false}));

app.use((req,res,next)=>{
    console.log("MiddleWare Created");
    console.log(req.body);
    // res.send("MiddleWare Created");
    next();
})

app.get("/", (req, res) => {
    return res.send("Hello Home Page Here");
});
app.get("/api/users", (req, res) => {
    res.setHeader("X-Name","Tirthesh Jain");
    return res.send(users);
});

app.post("/api/users",(req, res)=> {
    const body=req.body;
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
        return res.status(400).send("Please pass all details");
    }
    users.push({id:users.length,...body});
    // body.id=users.length;
    console.log(req.body);
    fs.writeFile("./data.json",JSON.stringify(users),(err,data)=>{
        return res.status(201).json(users);
    });
    
});


app.route("/api/users/:id")
.get((req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user) => user.id == id);
    if(user==undefined){
       return res.status(404);
    }
    return res.send(user);
})
.post((req,res)=>{
    return res.send(req.body);
})
.patch((req,res)=>{
    return res.send("<h1>Edit User</h1>");
})
.delete((req,res)=>{
    return res.send("<h1>Delete User</h1>");
})

// app.get("/api/users/:id", (req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id == id);
//     let html = "<h1>User Not Found</h1>";
//     return res.send(user);
// });



app.listen(port, () => { console.log("Server Started"); });