let car= [
    "tiger",
    "lion",
    "dog",
    "horse",
    [
        "polar bear",
        "black bear"

    ]
];
// console.log(car);
// let animal=new Array();
// animal.push("cat");
// animal.unshift(2);
// animal.push("bear");
// animal.push("leapord");
// animal.push("monkey");
// animal.push("Orangutan");
// console.log(animal);
// animal.pop();
// animal.shift();
// console.log(animal);
// for(let i=0;i<car.length;i++)
// {
//         console.log(car[i]);
//         console.log(typeof(car[i]));
// }
// //call back
// const iteratecar=function(carname,carindex,cararray)
// { 
//     console.log(carname,carindex,cararray);
// }
// //composition
// car.forEach(iteratecar);
// animal.forEach((animalname,index,array)=>{
//     console.log(animalname,index,array);
// })
// console.log("cat" in animal);
// animal.reverse();
// console.log(animal);
// let vehicale=car;   //here if either of the arrays are changed the change will get reflected in the other as well
// vehicale.push("BMW");
// console.log(vehicale);
// console.log(car);
// let vehicale1=[...car];   //this is only applicable at initial levels but in case of nested arrays change will get reflected in both the arrays
// vehicale1.push("Porshe");
// car[4].push("Cricket");
// console.log(vehicale1);
// console.log(car);
// //spread operator
// // vehicale1=JSON.parse(JSON.stringify(car));
vehicale1=[...car]; 
car.forEach( (car)=>{
    if(Array.isArray(car))
        {
            vehicale1.push([...car]);
        }
    else{
        vehicale1.push(car);
    }
});
// for(i=0;i<car.length;i++)
//     {
//         if(Array.isArray(car))
//             {
//                 vehicale1.push([...car]);
//             }
//         else{
//             vehicale1.push(car);
//         } 
//     }
vehicale1.push("Porshe");
car[4].push("football");
vehicale1[0]=5;
car[0]="HARSHI";  //overwrites the value
console.log('VEHICALE1',vehicale1);
console.log('car',car);