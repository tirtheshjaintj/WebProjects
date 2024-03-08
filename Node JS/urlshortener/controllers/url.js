const {nanoid}=require('nanoid');
const URL=require('../models/url');

async function generateShortURL(req,res){
    const body=req.body;
    if(!body.url){
         return res.status(400).json({error:'URL is required Parameter'});
    }
    const redirectURL=body.url;
    const shortId=nanoid(8);
    await URL.create(
        {
            shortId:shortId,
            redirectURL:redirectURL,
            visitHistory:[]
        }
    );
    const allUrls=await URL.find({});
    return res.render('home',{id:shortId,urls:allUrls});
}

async function redirectURL(req,res){
const shortId=req.params.shortId;
const entry=await URL.findOneAndUpdate(
    {
        shortId:shortId
    },
    { 
    $push:{
        visitHistory:{timestamp:Date.now()}
    }
   }
)    
 return  res.redirect(entry.redirectURL);
}

async function analyticURL(req,res){
    const shortId=req.params.shortId;
    const result=await URL.findOne({shortId});
  return  res.json({totalClicks:result.visitHistory.length,analytics:result.visitHistory});
}


module.exports={generateShortURL,redirectURL,analyticURL};
