const express=require("express");
let app=express();
let port=8080;
app.use(express.static("public"));
app.set("view engine","ejs");
let ejsroute;
const route={

 ejsroute:[
    {
        href:"/",
        tiile:"login page"
    },
    {
        href:"/website",
        title:"Website"
    },
    {
        href:"/createaccount",
        title:"Creating account"
    },
]
};


app.get("/",(req,res)=>{
    let h1="enjoy posting..";
    let placeholder="/user-id"
    res.render("index.ejs",{h1,placeholder,route})
})

app.get("/website",(req,res)=>{
    res.render("website.ejs")
})

app.get("/createaccount",(req,res)=>{
    res.render("createaccount.ejs")
})

app.get("/post",(req,res)=>{
    res.render("post.ejs");
})

app.get("/feed",(req,res)=>{
    res.render("feed.ejs")
})

app.get("/profile",(req,res)=>{
    res.render("profile.ejs");
})

app.listen(port,()=>{
    console.log(`ejs template engine running at port ${port}`)
})