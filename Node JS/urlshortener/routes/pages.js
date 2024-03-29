const express=require('express');
const router=express.Router();
const URL=require('../models/url');


router.get('/signup',(req,res)=>res.render('signup'));
router.get('/login',(req,res)=>res.render('login'));

router.all('*', async (req, res) => { 
    if(!req.user) return res.redirect('/login');
    const allUrls=await URL.find({createdBy:req.user._id}).sort( { createdAt: -1 } );
    return res.render('home',{
        urls:allUrls
    });
}) 

module.exports=router;