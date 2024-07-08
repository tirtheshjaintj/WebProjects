const express=require('express');
const router=express.Router();
const {generateShortURL,redirectURL,analyticURL}=require('../controllers/url');

router.post('/',generateShortURL);
router.get('/:shortId',redirectURL);
router.get('/analytics/:shortId',analyticURL);


module.exports=router;