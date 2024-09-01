let {add} = require('./add.js') //destructuring
let {mul,mod,num3,num4}=require('./mul.js')
let obj=require('./div.js')

let num1=7;
let num2=5;
add(num1,num2);

mul(num3,num4);
mod(num1,num2);

obj.div(num1,num2);

obj.sub(num1,num2);
