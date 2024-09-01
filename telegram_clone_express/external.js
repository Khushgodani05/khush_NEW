const express =require("express");
let app= express();

let port=3000;

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})

app.get('/createaccount',function(req,res){
    res.sendFile(__dirname+'/createaccount.html')
})

app.get('/website',function(req,res){
    res.sendFile(__dirname+'/website.html')
})

app.get('/feed',function(req,res){
    res.sendFile(__dirname+'/feed.html')
})

app.get('/profile',function(req,res){
    res.sendFile(__dirname+'/profile.html')
})

app.get('/post',(req,res)=>{
    res.sendFile(__dirname +'/post.html')
})


app.listen(port,()=>{
    console.log("app is running");
})