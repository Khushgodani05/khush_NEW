const http= require ("node:http");
const fs = require('node:fs');

http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    if(req.url==="/"){
        let indexfilebuffer=fs.readFileSync("./index.html");
        let indexhtml=indexfilebuffer.toString();
        res.write(indexhtml);
    }
    else if(req.url==="/createaccount"){
        let indexfilebuffer=fs.readFileSync("./createaccount.html");
        let indexhtml=indexfilebuffer.toString();
        res.write(indexhtml);
    }
    else if(req.url==="/website"){
        let indexfilebuffer=fs.readFileSync("./website.html");
        let indexhtml=indexfilebuffer.toString();
        res.write(indexhtml);
    }
    else if(req.url==="/feed"){
        let indexfilebuffer=fs.readFileSync("./feed.html");
        let indexhtml=indexfilebuffer.toString();
        res.write(indexhtml);
    }
    else if(req.url==="/profile"){
        let indexfilebuffer=fs.readFileSync("./profile.html");
        let indexhtml=indexfilebuffer.toString();
        res.write(indexhtml);
    }
    res.end();
})
.listen(3000,()=>{
    console.log("running app");
});