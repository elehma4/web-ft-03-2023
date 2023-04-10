const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

//1. Get the total mass of all characters
let totalMass = characters.reduce((acc, curr) => Number(acc) + Number(curr.mass), 0);
console.log(totalMass);

//2. Get the total height of all characters
let totalHeight = characters.reduce((acc, cur) => Number(acc) + Number(cur.height), 0)
console.log(totalHeight);

//3. Get the total number of characters in all the character names
let nameLength = characters.reduce((acc, cur)=> acc + cur.name.length, 0)
console.log(nameLength);

//4. Get the total number of characters by eye color (hint. a map of eye color to count)
let eyeColor = characters.reduce((acc, cur) => {
    if (acc[cur.eye_color]){
        acc[cur.eye_color]++
    } else {
        acc[cur.eye_color] = 1
    }
    return acc
}, {}) // initial accumulator is an empty object
console.log(eyeColor);