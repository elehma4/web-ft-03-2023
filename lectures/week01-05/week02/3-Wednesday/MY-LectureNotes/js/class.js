const prompt = require('prompt-sync')({sigint: true});



let firstName = prompt("What is your name? >> ");
console.log(firstName);

let bikeAge = prompt("When did you learn to ride a bike? >>")

bikeAge = Number(bikeAge)
console.log(typeof(bikeAge));





// const widthOfSquare = 10;

// let pi = 3.141592654;

// console.log(pi);

// pi = 3.14

// console.log(pi);

// Printing:

// let a = 5;

// console.log(a);

// Defining Strings: " " or ' ' or ` `

// let fullName = "Ethan Lehman";
// let favoriteChain = 'Arbitrum';
// let twitterHandle = "@ETH1Elohim";

//todo console.log(`Hi my name is ${fullName} and my favorite chain is ${favoriteChain}! You can follow me on twitter ${twitterHandle}.`)

//? Math:
//! console.log("Problem 1:")

//* let x = 7;
// let y = 37;

// let answer = x + y;

// console.log(`The answer is ${answer}`);

// console.log(`
// What is 17 multiplied by 100?`)

// function findAnswer(z, e) {
//     console.log(z*e);
// }

// findAnswer(17, 100);

// Interpolation

// let age = 23;
// let city = "Bonita Springs, Florida";

// console.log(
// `
// My name is ${fullName}, I am ${age} and I currently live with my wife in ${city}.
// You can follow me on Twitter ${twitterHandle} if you want to stay (somewhat) up to date with me.
// Something I am excited about... ${favoriteChain}!
// `)

// let num1 = 1000;
// let num2 = 2000;
// let sum = num1 + num2;
// console.log(`The sum of ${num1} and ${num2} is ${sum}`)

// escape characters: \n -> new line & \t -> tab



//? Math.pow(base, exponent);


// Caste Converting:

// let abc = "1000000";
// let zyx = 1000111111;
// let abc123 = parseInt(abc);
// let sumba = abc123 + zyx;

// console.log(`
// I used parseInt(abc) to turn the abc string into an integer and solve for ${sumba}
// `);

//* Turns string into number:
// let b_num = Number(abc)
// console.log(b_num);
// console.log(typeof(b_num));
// let b_num2 = Number("abc") //!NaN
// console.log(b_num2) 



// let some_int = 17;
// let some_int_string = some_int.toString()
// console.log(some_int_string)
// console.log(typeof(some_int_string));

//? More Math with JS:

let x = 10 
let y = 3

// % = remainder = modulus
console.log(`
what is the modulus || 10 % 3`);
let modulus = x % y
console.log(`${modulus}
`);

// console.log(x + y);
// console.log(x - y);
// console.log(x / y);
// console.log(x * y);

// let total = x * (9+5) / y;
// console.log(total);

// let z = -89;
// let result = Math.abs(z); makes positive
// console.log(result)

// let e = 2.72
// let result = Math.round(e)
// console.log(result);

// let result2 = Math.floor(e)
// console.log(result2);

console.log(`
What is 17 to the second power?`)
console.log(Math.pow(17, 2))

console.log(`
What is the square root of 17?`)
console.log("Answer: ", Math.sqrt(17));

// //? the value for true is 1 and the value for false is 0
bitQ = true + true + true
console.log(`
true * 3 equals
${bitQ}
`);

//* let ifValid = true;
//* console.log(typeof(ifValid));
