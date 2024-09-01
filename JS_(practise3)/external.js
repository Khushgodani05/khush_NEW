let car={
    name : "BMW",
    model : 'x7',
    "purchase year":2024,
};
console.log(car);
console.log(car.model);
console.log(car["purchase year"]);
car.price="Rs 2.5 cr";
car['build year'] =2025;
console.log(car);
delete car["build year"];
console.log('name' in car);
for (key in car){
    console.log(key,car[key]);
}
console.log(Object.keys(car));
console.log(Object.values(car));

let superhuman ={
    name:"khush godani",
    age:19,
    address: {
        locality :{
            area :"Borivali",
            'flat no':303,
            wing : 'A',
        }
    }

}
console.log(superhuman);
console.log(superhuman.address.locality.area);
console.log(superhuman.address.locality['flat no']);
for(key in superhuman)
    {
        console.log(key,superhuman[key]);
        console.log(Object.keys(superhuman));
    }
/*to check wheather a value/key is present in an object or not
1.Optional chaining
*/
console.log(superhuman.address?.locality?.area);
if(superhuman.address && 
    superhuman.address.locality && 
    superhuman.address.locality.wing){
     console.log(superhuman.address.locality.wing);
}
else{
    console.log("not found");
}

let carobj= {
    Name: "SUV",
    wheels:4,
    color : {
        body: {
            primary :"white",
            secondary:"blue",
        }
    },
    //method:
    printwheel:function() {
    console.log(this.wheels);
    },
};
console.log(carobj);
carobj.printwheel();



let carObj1 = {
    wheels: 4,
    break: {
        total: 1
    }
};

let bike = Object.assign({},carObj1);
bike.wheels=2;
console.log(carObj1.wheels);
console.log(bike.wheels);
let bikes = {...carObj1};
bikes.wheels=2;
console.log(bikes.wheels);
let bik=JSON.parse(JSON.stringify(carObj1));
/*
JSON.stringify is cant be used for objects with function and many nested objects and nested objects
*/
bik.wheels=2;
console.log(carObj1.wheels);
console.log('bike', bike);
console.log('car', carobj);
const mycar =new Object(carobj);
mycar.wheels=6;
carobj.printwheel();
const mycar2= new Object(carObj1);
mycar2.wheels=14;
console.log(carObj1.wheels);

