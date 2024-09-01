let userid=document.querySelector("#userid").value;
let password=document.querySelector("#password").value;
let log_error=document.querySelectorAll(".log_error");
let login;
if(userid.trim.length===0 || password.trim.length===0)
{
    log_error.forEach((value,index,array)=>{
        value.classList.add("hide");
    })
}
else{
    login=1;
}