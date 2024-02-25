const http = require("http");
const fs = require("fs");
const url = require("url");

function handler(request, response) {
    fs.appendFile('log.txt',request.url+" at "+new Date().toLocaleString()+"\n",()=>{
        console.log("Log Saved");
    });
    const myurl = url.parse(request.url, true);
    switch (myurl.pathname) {
        case "/about":
            const param = myurl.query;
            if (!("name" in param)) {
                response.end(`Please Pass A Name \n ${new Date().toLocaleString()} ${request.method}`);
            }
            else {
                response.end(`Hello Sir, ${param.name} ${new Date().toLocaleString()} ${request.method}`);
            }
            break;
        default:
            response.end(`404 Not Found         ${request.method}        \n`);
    }

}

const myserver = http.createServer(handler);
myserver.listen(8000, () => {console.log("Server Started");});
