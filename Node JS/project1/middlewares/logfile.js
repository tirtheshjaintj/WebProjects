const fs=require('fs');

function logReqRes(filename){
    return (req,res,next)=>{
        fs.appendFile(
          filename,
          `\n ${new Date().toLocaleString()} \n${req.ip} | ${req.method} | ${req.path} \n`,
          (err,data)=>{
            next();
            console.log(err);
          }
        );
    }
}

module.exports={logReqRes};