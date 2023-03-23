const prompt = require('prompt-sync')({sigint: true});


//todo 1. Write a program that prompts the user for a number and determines if it is positive, negative, or zero.

const number = Number(prompt("Please enter a number: "))
console.log(typeof(number));
if (number > 0){
  console.log("Positive");
} else if (number < 0){
  console.log("Negative");
} else {
  console.log("Zero");
}

//todo 2. Write a program that prompts the user for a number and determines if it is even or odd.

const numberEO = prompt("Please enter an even or odd number: ")
if ((numberEO % 2) == 0){
  console.log("This is an even number.");
} else {
  console.log("This is an odd number.");
}


//todo 3. Write a program that prompts the user for a letter and determines if it is a vowel or a consonant.

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

//todo 4. Write a program that prompts the user for a number and checks if it is between 1 and 10 (inclusive).

const userNumber = Number(prompt("Please enter a number between 1 and 10 (inclusive): "))
if (userNumber >= 1 && userNumber <= 10) {
  console.log("Number is between 1-10");
} else {
  console.log("Number is not within 1-10");
}


//todo 5. Write a program that prompts the user for a number and checks if it is between 50 and 100 (inclusive).

const userNumber2 = Number(prompt("Please enter a number between 50 and 100 (inclusive): "))
if (userNumber2 >= 50 && userNumber2 <= 100) {
  console.log("Number is between 50-100");
} else {
  console.log("Number is not within 50-100");
}


//todo 6. Write a program that prompts the user for a password and checks if it is correct (password should be "password123").

const password = prompt("Please enter your password: ")
if (password == "password123") {
  console.log("Welcome to correct password world!");
} else {
  console.log("R u trying to hackZ this account?!");
}



//todo 7. Write a program that prompts the user for a number and checks if it is a multiple of 3.

const multiple3 = Number(prompt("Please enter a multiple of 3: "))
if (multiple3 == 0){
    console.log("0 is not a multiple of 3");}
else if ((multiple3 % 3) == 0){
    console.log(`${multiple3} is a multiple of 3`);
 } else {
    console.log("Your number is not a multiple of 3.");
 }



//todo 8. Write a program that prompts the user for their age and checks if they are eligible for a senior discount (age 65 and up).

const age = Number(prompt("Check Senior Discount Eligibility - Insert Age: "));

if (age >= 65){
  console.log("You are eligible for a senior discount.");
} else {
  console.log("Sorry, you are ineligible.");
}


//todo 9. Write a program that prompts the user for their birth year and determines if they are a millennial (born between 1981 and 1996).

const birthYear = Number(prompt("Please insert your birth year: "));

if (birthYear >= 1981 && birthYear <= 1996){
  console.log(`Since you were born in ${birthYear}, you are a millennial.`);
} else {
  console.log("You're not a millennial.");
}


//todo 10. Write a program that prompts the user for their age and checks if they are a teenager (ages 13-19).

const age2 = Number(prompt("Are you a teenager? Insert age: "));

if (age2 >= 13 && age2 <= 19){
  console.log("Looks like you're a teenager!");
} else {
  console.log("It seems you're not a teenager.");
}



//todo 11. Write a program that prompts the user for their favorite color and prints a message based on their choice.

const x = prompt("What is your favorite color?")
let favoriteColor = x.toLowerCase()

switch(favoriteColor){

  case "blue":
    console.log("Ahhhh blue like the sky.")
    break;
  case "green":
    console.log("Ahhhh green like the grass.");
    break;
  case "red":
    console.log("Red, eh? Are you a fan of red hot chili peppers?");
    break;
  case "yellow":
    console.log("Yellow, bright like the sun!");
    break;
  case "orange":
    console.log("Orange, soothing like the sunset.");
    break;
  case "purple":
    console.log("Purple reminds me of a rainy day.");
    break;
  case "pink":
    console.log("Everyone knows pink starbursts are the best.");
    break;
 // default is same as else
  default:
    console.log("Sorry, our list only includes: blue, green, red, yellow, orange, purple, and pink.");
}
