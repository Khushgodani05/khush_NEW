// Selection

// 1. ID selector
let h1Tag = document.getElementById('hello');
// console.log(h1Tag)

h1Tag.innerHTML = `Hello <h1>Hi</h1>`;
// h1Tag.innerHTML = "demo";

// console.log(h1Tag.innerText)
// console.log(h1Tag.innerHTML)

// 2. Class selector
let bgDivs = document.getElementsByClassName('bg');

// for (let i=0; i < bgDivs.length; i++) {
//     bgDivs[i].innerText = 'Row : ' + i;
// }

/*Array.from(bgDivs).forEach((element) => {
    console.log(element)
});
*/

// 3. Element selector
let element = document.getElementsByTagName('div');
// console.log(element);

// Query Selector
let h1 = document.querySelector('#hello')
// console.log(h1);

let bgClass = document.querySelectorAll('.bg')
// console.log(bgClass);

bgClass.forEach((bg) => {
    // bg.classList.add('hi');
    // console.log(bg);
})

let jkb = document.querySelectorAll('[data-jkb="2"]');
jkb[0].dataset.jkb = 5;
jkb[0].style.backgroundColor = 'red';
jkb[0].style.color = 'white';
// console.log(jkb);

let button = document.querySelector('button');
console.log(button);
const sum = function() {
    
    /*let no1 = document.querySelector('#no1')
    let no2 = document.querySelector('#no2')

    let result = parseFloat(no1.value) + parseFloat(no2.value)

    document.querySelector('#result span').innerHTML = result;*/

};
button.addEventListener('click', function() {
    const container = document.querySelector('#container');
    console.log(container);
    // container.innerHTML = container.innerHTML + "<div class='bg'>New div</div>"

    const row = document.createElement('div')
    console.log(row);
    row.innerHTML = 'Hello';
    row.className = 'bg';
    row.dataset.jkb = 4;
    row.style.backgroundColor = 'red';
    container.appendChild(row)

});
