const prompt = require('prompt-sync')({sigint: true});


// 1. Write a program that prompts the user for a number and determines if it is positive, negative, or zero.

const number = Number(prompt("Please enter a number: "))
console.log(typeof(number));
if (number > 0){
  console.log("Positive");
} else if (number < 0){
  console.log("Negative");
} else {
  console.log("Zero");
}

// 2. Write a program that prompts the user for a number and determines if it is even or odd.

const numberEO = prompt("Please enter an even or odd number: ")
if ((numberEO % 2) == 0){
  console.log("This is an even number.");
} else {
  console.log("This is an odd number.");
}


// 3. Write a program that prompts the user for a letter and determines if it is a vowel or a consonant.

//? const letter = prompt('Pick a letter: ');
//? let vowels = ["a", "e", "i", "o", "u"]
//? if (vowels.includes(letter)){
//?   console.log(`"${letter}" is a vowel`);
//? } else {
//?   console.log(`"${letter}" is a consonant`);
//? }

const enter = prompt("Please enter a singular letter: ")
let letter = enter.toUpperCase();
if(letter.length == 1) {
if(letter == "A" || letter == "E" || letter == "I" || letter == "O" || letter == "U") {
  console.log("This letter is a vowel.")
} else {
  console.log("This letter is a consonant.")
} 
}
else{
  console.log("Please enter only 1 letter.");
}

// 4. Write a program that prompts the user for a number and checks if it is between 1 and 10 (inclusive).

const userNumber = Number(prompt("Please enter a number between 1 and 10 (inclusive): "))
if (userNumber >= 1 && userNumber <= 10) {
  console.log("Number is between 1-10");
} else {
  console.log("Number is not within 1-10");
}


// 5. Write a program that prompts the user for a number and checks if it is between 50 and 100 (inclusive).

const userNumber2 = Number(prompt("Please enter a number between 50 and 100 (inclusive): "))
if (userNumber2 >= 50 && userNumber2 <= 100) {
  console.log("Number is between 50-100");
} else {
  console.log("Number is not within 50-100");
}


// 6. Write a program that prompts the user for a password and checks if it is correct (password should be "password123").

const password = prompt("Please enter your password: ")
if (password == "password123") {
  console.log("Welcome to correct password world!");
} else {
  console.log("R u trying to hackZ this account?!");
}



// 7. Write a program that prompts the user for a number and checks if it is a multiple of 3.

const multiple3 = prompt("Please enter a multiple of 3: ")
if (((multiple3 > 0) % 3) == 0){
   console.log(`${multiple3} is a multiple of 3`);
 } else {
   console.log("Your number is not a multiple of 3.");
 }

