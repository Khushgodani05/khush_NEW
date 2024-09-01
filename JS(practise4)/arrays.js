let animals = [
    'Tiger',
    'Dog',
    'Cow',
    [
        'Dog 1',
        'Cow 1'
    ]
];

// let animals2 = new Array();

// animals.push('Item2');
// animals.unshift('first');

// animals.pop();
// animals.shift();

// for loop
/*for (let i=0; i < animals.length; i++) {
    console.log(animals[i]);
}*/

// callback
const iterateAnimals = function(animalName, loopIndex) {
    console.log(animalName, loopIndex);
}

// composition 
// animals.forEach(iterateAnimals);

/*const result = animals.findIndex((animal)=> {
    return animal === 'Cow';
})*/

// Spread operator
let vehicles = JSON.parse(JSON.stringify(animals));

// animals.forEach((animal)=> {

//     if (Array.isArray(animal)) {

//         vehicles.push([...animal]);

//     } else {
//         vehicles.push(animal);
//     }

// })

// vehicles.push('bike');
// vehicles[3].push('bike 2');

// console.log('animals', animals);
// console.log('vehicles', vehicles);


console.log('animals', animals);

animals.__proto__.random = function() {
    const randomIndex = Math.floor(Math.random() * this.length);
    return this[randomIndex];
}

let output = animals.random();
console.log(output);



