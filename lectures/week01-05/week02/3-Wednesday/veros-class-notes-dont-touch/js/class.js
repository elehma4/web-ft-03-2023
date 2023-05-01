const prompt = require('prompt-sync')({sigint: true}); //need this for setup

let firstName2 = prompt("What is your name >> ")

console.log(firstName2);

let bikeAge = prompt("How old were you when you learned to ride a bike? ")

bikeAge = Number(bikeAge)
console.log(typeof(bikeAge));


// const widthOfSquare = 10;   // Camel Case  lowerCase  upperCase camelCase

// let pi = 3.14;  // let is a block scoped variable

// console.log(pi)

// pi = 3.0  //reasigning the value of pi

// console.log(pi)


// printing  


// let a = 5;  //integer 

// console.log(5)

// console.log(a)

//Defining a String 

// "Hello World"

// 'Hello World'

// `Hello World`

// let firstName = "Veronica"



// console.log("Veronica")

// console.log(firstName)

// data types 

// strings 
// numbers (integers, real numbers) 
// booleans

// Math

// let b = 5;
// let c = 99; 

// let answer = b + c;  // 5 + 9 

// console.log(answer)  // The answer is 14

// console.log("The answer is ", "this is more of my string", answer )

// string interpolation 

// console.log(`The answer is  ${answer}`)  //The answer is 14


// console.log(`  ${} `)


//? Create a string using string interpolation that says 
//? "Hello, my last name is [lastName]" 

//? where [lastName] is a variable containing a person's last name.

// let lastName = "Lehman"

// console.log(`Hello, my last name is ${lastName}`)


// Create 2 variables city and age 
// Create a string that says: "I live in [city] and I am [] years old"


//? Create a string using string interpolation that says "The sum of [num1] and [num2] is [sum]" where [num1] and [num2] are variables containing numbers and [sum] is their sum.


// let num1 = 4; 
// let num2 = 6; 

// let sum = num1 + num2; 

// console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`)

//escape characters  \n \t 

// console.log('\tLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis') 

// console.log("")
// console.log("")

// console.log('nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')


// console.log(`      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis


// nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`)


//? String Concatentation +  merging strings together

let firstName = "Veronica "
let lastName = "Lino"

let myName = firstName + lastName;  //Veronica Lino

// console.log(myName)


let a = 3 
let b = "3"

let sum = a + b;  "33"

// console.log(sum);


//? Casting converting one dataType to anohter dataType 
//* string => number => string   boolean

// let c = parseInt(b) // 3 

// let sum2 = a + c // 6

// console.log(sum2)

// let b_num = Number(b) //casting from string to an integer 

// console.log(b_num)

// console.log(typeof(b_num))

// let b_num2 = Number("a") //error NaN

// console.log(b_num2)

// //? Casting from integer to string 

// let some_int = 5; 

// let some_int_string = some_int.toString()

// console.log(some_int_string)
// console.log(typeof(some_int_string))

// caste
// typeof(c)

// console.log(typeof(b))


//console.log(string1, string2)


//? Math with JS 

// let x = 10 
// let y = 3 


// // console.log(3+4);
// console.log(x + y); //addition

// console.log(x / y); //division

// console.log(x - y); //subtraction

// console.log(x * y); // multiplication

// let total = x * (9 + 5) / y; // 3 * 14 / 44

// console.log(total);


// let modulus = x % y 

// console.log(modulus);

let x = -89; 

let result = Math.abs(x); 

// console.log(result);

let e = 2.72 

result = Math.round(e)

result = Math.floor(e)

// console.log(result);


result = Math.pow(2, 5)

// console.log(result);


// let thisIsAGreatDay 

// this_is_a_great_day

// true  1 
// false 0

// result = true + true 

// console.log(result);


// let ifValid = true; 

// console.log(typeof(ifValid));










