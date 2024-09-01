//Id selector
let h1tag=document.getElementById('htag');
// console.log(h1tag);
// h1tag.innerText= "My name is khush";
h1tag.innerText= "i am the best <span>khush<span>";
console.log(h1tag);
//class selector
let containers=document.getElementsByClassName("bg");
console.log(containers);
for(i=0;i<containers.length;i++){
    containers[i].innerText="Row : "+i;
}
//tag selector
let divo=document.getElementsByTagName("div");
console.log(divo);
Array.from(divo).forEach((element) => {
    console.log(element);
    element.id="divc";
});

//query selector
let head1=document.querySelector("h1");
head1.innerText="HARSHI JOGANI IS THE BEST";
head1.innerHTML="HARSHI JOGANI IS THE BEST</br><span>My bestest best friend</span>";
console.log(head1);
head1.className="best";
console.log(head1);

let bgClass = document.querySelectorAll('.bg')
console.log(bgClass);
bgClass.forEach((element)=>{
    bgClass.innerText="ROW : ";
});
bgClass.forEach((bg) => {
    bg.classList.add('hi');
    console.log(bg);
});

let jkb=document.querySelectorAll('[data-jkb="2"]');
jkb[0].dataset.jkb=5;
jkb[0].style.backgroundColor="red";
jkb[0].style.color="white";

let sum=document.querySelector("button");
// sum.addEventListener("click",(function(){
    
//     let no1 = document.querySelector('#no1')
//     let no2 = document.querySelector('#no2')

//     let result = parseFloat(no1.value) + parseFloat(no2.value)

//     document.querySelector('#result').innerHTML = result;

// }));
sum.addEventListener("click",(function(){
    
    let no1 = document.querySelector('#no1')
    let no2 = document.querySelector('#no2')

    let result = parseFloat(no1.value) + parseFloat(no2.value)

    document.querySelector('#result span').innerHTML = result;

}));
let node=document.querySelectorAll(".bg");
console.log(node);
// button.addEventListener("click",function(){

//     const select=document.querySelector("#container")
//     const rowes=document.createElement("div");
//     rowes.innerHTML="Rows :4";
//     rowes.className="bg";
//     rowes.dataset.form="data-form";
//     rowes.style.color="darkgreen";
//     rowes.style.backgroundColor="lightgreen";
//     select.appendChild(rowes);
// });
let button = document.querySelector('button');
button.addEventListener('click', function() {
    const container = document.querySelector("div");
    console.log(container);
    // container.innerHTML = container.innerHTML + "<div class='bg'>New div</div>"
    const row = document.createElement('div')
    console.log(row);
    row.innerHTML = 'Harshi';
    row.className = 'bg';
    row.dataset.jkb = 4;
    row.style.backgroundColor = 'red';
    row.style.color="white";
    container.appendChild(row)

});



// button.addEventListener('click', function() {
//     let form=document.querySelector("");
//     form.classList.add("Withdraw");

// });