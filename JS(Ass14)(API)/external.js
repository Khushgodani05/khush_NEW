//login page
let loginid=document.querySelector("#login");
let password=document.querySelector("#password");
localStorage.setItem("loginid","jaijkb");
localStorage.setItem("password",123);
let login=document.querySelector("button");
login.addEventListener("click",function(){
    if(localStorage.loginid!==loginid.value)
        {
            document.querySelector(".error").classList.add("hide");
        }
        else{
            document.querySelector(".error").classList.remove("hide");
        }
    if(localStorage.password!==password.value)
        {
                document.querySelector(".error1").classList.add("hide");
        }
        else{
                document.querySelector(".error1").classList.remove("hide");
            }

if(loginid.value===localStorage.loginid && password.value===localStorage.password)
{
    document.querySelector(".loginsite").classList.add("dhide");
    document.querySelector(".blogsite").classList.remove("dhide");
    localStorage.setItem("loggedin","1");
}
})
let logout=document.querySelector("#exit");
logout.addEventListener("click",function(){
    document.querySelector(".loginsite").classList.remove("dhide");
    document.querySelector(".blogsite").classList.add("dhide");
    localStorage.loggedin="0";
})
if(localStorage.loggedin==="1")
{
    document.querySelector(".loginsite").classList.add("dhide");
    document.querySelector(".blogsite").classList.remove("dhide");
}


//post 
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
        // console.log(value);
        // console.log(index);
        postid[index].innerHTML="Id:"+ khush[index].id;
    })
    
    posttitle.forEach(function(value,index){
        // console.log(value);
        // console.log(index);
        posttitle[index].innerHTML="Title:"+ khush[index].title;
    })
    // let post=document.querySelector("div");
    // post.innerHTML=khush.title;
    
});

let compost= fetch("https://jsonplaceholder.typicode.com/comments")
async function cpost(){
    let comp=await compost;
    let result= await comp.json();
    console.log(result);
    console.log(result[0]);
    let comm=document.querySelectorAll(".comm");
    console.log(comm);
    comm.forEach((value,index)=>{
        comm[index].innerHTML=`Name: ${result[index].name} 
Email: ${result[index].email}
Body: ${result[index].body}
`;

    }
)
}
cpost();
    
  
   

