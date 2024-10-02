const express =require("express");
let app= express();
const mongoose=require("mongoose");
const bodyparser=require('body-parser');
let port=3000;

app.set("view engine","ejs");


app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/mini-tweet");
const db=mongoose.connection;
app.use(express.static('public'));
app.use(express.static('public/images'));

app.get('/',(req,res)=>{
    // res.sendFile(__dirname+'/index.html'); for express
    res.render("index.ejs");
})

app.get('/createaccount',function(req,res){
    // res.sendFile(__dirname+'/createaccount.html')
    let error="";
    res.render("createaccount.ejs",{error});
})

app.post("/createaccount",async(req,res)=>{
    if(req.body.password===req.body.confirm_password){
    try{
     await db.collection('users').insertOne({
        "name":req.body.name,
        "username":req.body.username,
        "DOB":req.body.DOB,
        "password":req.body.password,
        "confirm_pass":req.body.confirm_password
});
     res.render("index.ejs");
}catch(e){
   alert("User not created!!!");
   res.render('createaccount.ejs');
}
    }
    else{
        let error="Password and confirm password does'nt match";
        res.render('createaccount.ejs',{error});
    }

})

app.get('/website',function(req,res){
    // res.sendFile(__dirname+'/website.html')
    res.render("website.ejs");
})

app.get('/feed',function(req,res){
    // res.sendFile(__dirname+'/feed.html')
    res.render("feed.ejs");
})

app.get('/profile',function(req,res){
    // res.sendFile(__dirname+'/profile.html')
    res.render("profile.ejs");
})

app.get('/post',(req,res)=>{
    // res.sendFile(__dirname +'/post.html')
    res.render('post.ejs');
})


app.listen(port,()=>{
    console.log(`App is running on port :${port}`);
})