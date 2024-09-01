 let form = document.querySelector('form');

form.addEventListener('submit', function(event) {

    event.preventDefault();

    //form.querySelector('[name=email]')
    // document.querySelector('[name=email]')
    // form.elements.email

    const email = form.elements.email;
    const password = form.elements.password.value;

    console.log({email, password})

    const emailError = email.parentElement.querySelector('.error');
    if (email.value.trim().length === 0) {
//        email.parentElement.querySelector('.error').style.display = 'block';
        emailError.classList.remove('hide');
    } else {
        emailError.classList.add('hide');
    }

    let existingData = localStorage.getItem('emails');

    if (existingData) {
        existingData = JSON.parse(existingData);
    } else {
        existingData = [];
    }

    existingData.push(email.value);

    localStorage.setItem('emails', JSON.stringify(existingData))


    // console.log(form.elements.email.value);
    
    console.log('form submitted');
})


const clickCallback = function(event) {

    let buttonText = event.target.innerText;

    console.log(event.target.dataset.lang);

}

document.querySelector('#test').addEventListener('click', clickCallback);
document.querySelector('#test2').addEventListener('click', clickCallback);
document.querySelector('#test3').addEventListener('click', clickCallback);


function demo() {
    console.log('hi from demo');
}

let login=form.elements.login;
console.log(login);
let timer=setTimeout(function() {
    console.log('Called after 1 sec')
    },5000);

const timers=function(){
    clearTimeout(timer);
    setTimeout(() => {
        console.log("i am clicked by login")
    }, 3000);
} 
login.addEventListener("click",timers)
       
// clearTimeout(timer);
let counter = 1;
let iterval;
iterval = setInterval(function() {
    console.log('Interval called');

    if (counter === 10) {
        clearInterval(iterval);
    }

    counter++;
}, 1000);

// clearInterval(iterval);

console.log('Called last')

document.querySelector('[name=amount]').addEventListener('keyup', function(event) {
    console.log(event)
});