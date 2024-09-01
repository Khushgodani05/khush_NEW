let express= require('express');
let app=new express();
app.set('view engine','ejs');
const port=5050;
// and it ius m ainly used to render htmlcss and js from server side and mianly to fetch data fronm the database

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/html/index.html');
})
app.get('/createaccount',function(req,res){
    res.sendFile(__dirname+'/html/createaccount.html')
})

app.get('/website',function(req,res){
    res.sendFile(__dirname+'/html/website.html')
})

app.get('/feed',function(req,res){
    res.sendFile(__dirname+'/html/feed.html')
})

app.get('/profile',function(req,res){
    res.sendFile(__dirname+'/html/profile.html')
})

app.get('/post',(req,res)=>{
    res.sendFile(__dirname +'/html/post.html')
})


app.get('/template1', (req,res)=>{
    let heading="let's nacho";
    let placeholder="/user-id";
    res.render('template1',{heading:`${heading}`,placeholder});
});


app.listen(port ,()=>{
    console.log(`template engine running at port ${5050}`);
})
