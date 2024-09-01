let count=0;
let form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    const email=form.querySelector("[name=email]");
    const password=form.elements.password;
    const button=form.elements.khush;
    console.log({email,password});
    console.log(button);
    const emailError=email.parentElement.querySelector(".error");
    // if(email.value.trim().lenght==0)
    // {
    //     emailError.classList.remove("hide");
    // }
    // else {
    //     emailError.classList.add("hide");
    // }
    // if(password.value.lenght==0){
    //     password.parentElement.querySelector(".error").classList.remove("hide");
    // } 
    // else{
    //     password.parentElement.querySelector(".error").classList.add("hide");
    // }
    // localStorage.setItem("email","admin@123");
    // localStorage.setItem("password","123");
    // console.log(localStorage.getItem("email"));
    if(localStorage.email!==email.value)
    {
        
        document.querySelector(".error").classList.remove("hide");
    }
    else{
        document.querySelector(".error").classList.add("hide");
        console.log("Correct email");
    }
    if(localStorage.password!==password.value)
        {
            
            form.elements.password.parentElement.querySelector(".error").classList.remove("hide");
        }
        else{
            form.elements.password.parentElement.querySelector(".error").classList.add("hide");
            console.log("Correct Password");

        }
        if(localStorage.password===password.value &&localStorage.email===email.value){     
       
            button.innerHTML="<a href=js.html>Login</a>";
            button.style.color="green";
            button.style.textDecoration="none";
            localStorage.clear();
            localStorage.setItem("email","admin@123");
            localStorage.setItem("password","123");
            count++;
        }
        // console.log(count);
        // if(count=1)
        // {
        // }
    // let existingData=localStorage.getItem("emails");
    // if(existingData){
    //     existingData=JSON.parse(existingData);
    // }
    // else{
    //     existingData=[];
    // }

    // existingData.push(email.value);

    // localStorage.setItem("emails",JSON.stringify(existingData));
    // localStorage.setItem("values",password.value);

    // console.log(localStorage.getItem("emails"));
    // console.log(localStorage.getItem("values"));
    console.log('form submitted');
    
});