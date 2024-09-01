// object literal
let car = {
    name: 'Audi A4',
    price: 'Rs. 3 CR',
    'build year':  2021,
};

// console.log(car.name);
// console.log(car['name']);


car.price = 'Rs. 4 CR';
car['build year'] = 2022;

car.owner = 'Abc';

// console.log(car);
// delete car.price
// console.log(car)

// console.log('price' in car)

/*for (key in car) {
    console.log(key, car[key])
}*/

// console.log(Object.keys(car));
// console.log(Object.values(car));

let superCar = {
    name: 'Abc',
    car: car,
    specs: {
        other: {
            primary: 'red',
            secondary: 'blue',
        }
    }
}

// Optional Chaining
// console.log(superCar.specs?.other?.primary)

if (
    superCar.specs && 
    superCar.specs.color && 
    superCar.specs.color.primary
) {
    console.log(superCar.specs.color.primary);
} else {
    // console.log('not found')
}


// let carObj = {
//     wheels: 4,
//     break: {
//         total: 1
//     }
// };

// let bike = Object.assign({}, carObj);
// let bike = {...carObj}; // spread operator
// let bike = JSON.parse(JSON.stringify(carObj));
// bike.wheels = 2;
// bike.break.total = 2;

// console.log('car', carObj);
// console.log('bike', bike);
 


let carObj = {
    name: 'car',
    wheels: 4,
    break: {
        total: 1
    },
    // method
    printWheels: function() {
        console.log(this.wheels);
    
    }
};

// Car myCar = new car();
// Car myCar2 = new car();
// myCar.printWheels();

carObj.printWheels();

let bikeObj = {...carObj};
bikeObj.name = 'bike';
bikeObj.wheels = 2;

bikeObj.printWheels();


// Object constructor
const myCar = new Object(carObj);
myCar.wheels = 5;
myCar.printWheels();

const myCar2 = new Object(carObj);
myCar2.wheels = 10;
myCar2.printWheels();
