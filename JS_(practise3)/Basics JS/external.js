// var name = 1;


// Data Types
// number - integer, float, double 
// string
// boolean
// null
// undefined

// Referenced
// Object
// array
// function

// console.log(age);
// console.log(typeof age);


// - Arithmetic Operators
/*let no1 = 4;
let no2 = 5;

let sum = no1 + no2;
console.log(sum) */

// - Assignment Operators
// - Comparison Operators
// < > <= >= 
// == ===
// != !==

// "<" vs "<="

// - String Operators
// - Logical Operators

// Loop

// For loop
/* for (let i=0; i < 5; i++) {
    console.log(i);
}*/

// While loop
/*
let i = 0;
while (i < 5) {
    console.log(i);

    i++;
}
*/

// Do while
/*
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5) 
 */

/* let i = 13;
if (i < 5) {
    // console.log('Input number is ' + i + ', which is less than 5');
    // template literals/string
    console.log(`input number is ${i}, which is ${i} less than 5`);
} else if (i < 2) {
  // 
} else {
    console.log(`number ${i} is greater than 5`);
}*/

/*
let i=4;
switch(i) {
    case i < 3:
      // code block
      break;
    case y:
      // code block
      break;
    default:
*/

// Functions
/*
1. Function declaration
2. Default parameters
3. Returning a value
4. local/global variable
5. function types
*/

// named function
function sum(no1, no2, no3 = 1) {
    let value = no1 + no2 + no3;

    return value;
}
let output = sum(1,2,3);

let total = sum(1, 2, 4);
console.log(total);

// Anonymous function
let sumFunc = function() {
    console.log('Hi');
}
sumFunc();

// Arrow functions
let sumArrowFunc = () => {
    console.log('Hi from arrow function');    
}
sumArrowFunc();

let getAge = () => {
    return 'This is age';
};

let getAge2 = () => 'This is age';

// alert('This is alert');

// let result = confirm('Are you sure?');
// console.log(result);

// var result = prompt('Enter your age');
// console.log(result);

let no1 = prompt('Enter no1 \n this is line 2');
let no2 = prompt('Enter no2');

console.log(parseInt(no1));

alert(no1 + no2);

/*
1. Create simple calculator 
- accept no1 and no2 from user
- accept operation type (+ - / *)
- Display formula in confirm box
- if confirmed then display result else show alert

2. Mini UPI App
- Opening balance: 10
- 1. Show balance, 2. Deposit amount 3. withdraw amount 4. Stop
- Deposit Amount -> accept a amount -> update the balance


*/