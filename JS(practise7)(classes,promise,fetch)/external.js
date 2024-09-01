let khush;
var promiseResult = fetch('https://jsonplaceholder.typicode.com/todos');
let post=document.querySelectorAll(".post");
let postid=document.querySelectorAll(".postid");
let posttitle=document.querySelectorAll(".posttitle");

promiseResult.then(function(result) {
    console.log(result)
    khush=result.json();
    return khush;
}).then(function(khush) {
    console.log(khush);
    console.log(khush[0].id);
    console.log(khush[0].userId);
    console.log(khush[0].title);
    postid.forEach(function(value,index){
        console.log(value);
        console.log(index);
        postid[index].innerHTML="Id:"+ khush[index].id;
    })
    
    posttitle.forEach(function(value,index){
        console.log(value);
        console.log(index);
        posttitle[index].innerHTML="Title:"+ khush[index].title;
    })
    // let post=document.querySelector("div");
    // post.innerHTML=khush.title;
});
