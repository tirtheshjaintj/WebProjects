const {user}=require('../models/user');

async function getAllusers(req, res){
    res.setHeader("X-Name", "Tirthesh Jain");
    const allDbUsers=await user.find({});
    let html = " ";
    for(let i of allDbUsers){
          html+=`${i.firstName}: ${i.email} <br>`;
    }
    return res.send(allDbUsers);
}

async function createUser(req, res){
    const body = req.body;
    if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
        return res.status(400).send("Please pass all details");
    }
    // users.push({ id: users.length, ...body });
    // body.id=users.length;
    // console.log(req.body);
    const entry = await user.create({
        firstName: body.first_name,
        email: body.email,
        lastName: body.last_name,
        gender: body.gender,
        jobTitle: body.job_title
    });
    console.log(entry);
    return res.status(201).send({msg:'success'});
    // fs.writeFile("./data.json",JSON.stringify(users),(err,data)=>{
    //     return res.status(201).json(users);
    // });
}
async function getUser(req, res){
    const id =req.params.id;
    const person = await user.findById(id);
    if (person == undefined) {
        return res.status(404);
    }
    return res.send(person);
}


module.exports={getAllusers,createUser,getUser};