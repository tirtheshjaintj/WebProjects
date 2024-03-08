const express=require('express');
const router=express.Router();
const {generateShortURL,redirectURL,analyticURL}=require('../controllers/url');

router.post('/',generateShortURL);

router.get('/:shortId',redirectURL);
router.get('/analytics/:shortId',analyticURL);

router.get('/test',(req,res)=>res.send("<h1>Testing Server Side Rendering</h1>"));

module.exports=router;