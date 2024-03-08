const express = require("express");
const router=express.Router();
const {getAllusers,createUser,getUser}=require('../controllers/user');
router.get("/", (req, res) => {
    return res.send("Hello Home Page Here");
});

router.get("/users",getAllusers);
router.post("/",createUser);

router.route("/:id")
    .get(getUser)
    .post((req, res) => res.send(req.body))
    .patch(async (req, res) => {
        await user.findByIdAndUpdate(req.params.id,{lastName:"changed"});
        return res.send({status:"success Updated"});
    })
    .delete(async (req, res) => {
        await user.findByIdAndDelete(req.params.id);
        return res.send("<h1>Delete User</h1>");
    })

    module.exports=router;