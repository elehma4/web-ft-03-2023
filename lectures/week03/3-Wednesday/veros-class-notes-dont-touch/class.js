

// 1 console.log("before my loop");

// 10 for (let index = 0; index < array.length; index++) {

//     FUNCTION
    
// }

// 11 console.log("after my loop");

// 20 let x = 67;



// 30 function name(){
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
        
//     }
// }

// jump back





// 50  console.log(x);

// FUNCTION

// let x = 8;

// function separateRuns(){
//     console.log('******************')
//     console.log()      //blank line
// }

// function getGroceries(){

//     console.log('milk')
//     console.log('flour')
//     console.log('sugar')
//     console.log('butter')
//     console.log()   //blank line

//     separateRuns()
// }


// getGroceries()  //<---
// getGroceries()  //<---


// function add4and5(){
//     let num1 = 4;
//     let num2 = 5
//     console.log(num1 + num2)
// }


// function add9and8(){
//     let num1 = 8;
//     let num2 = 9
//     console.log(num1 + num2)
// }


// function blend(powerSetting, nMinutes){  // <--function signiture

//     powerSetting = 4
//     nMinutes = 8
//     console.log(powerSetting, nMinutes)
// }


// blend(4, 8)  //<---

// function add(num1, num2){

//     console.log(num1 + num2)
// }


// add(4)

// add(9, 8)


// function makeFormalGreeting(name, title){

//     console.log(`This is ${name}, the ${title}!`)
// }

// // makeFormalGreeting("Rob Stark", "King in the North")

// makeFormalGreeting("King in the North", "Rob Stark")


// function separateRuns(){
//     console.log('******************')
//     console.log()      //blank line
// }
// function getGroceries(item1){    // uses one parameter variable
//     console.log(item1)  // prints the contents of the item1 variable
//     console.log('flour')
//     console.log('sugar')
//     console.log('butter')
//     separateRuns()
// }


// getGroceries('eggs')
// getGroceries('beer')
// getGroceries('apples')


// function calculateAverage(param1, param2, param3, param4){
//     // Add up numbers, divide by the number of numbers
//     let total = param1 + param2 + param3 + param4
//     let average = total / 4
//     console.log('Average value is:', average)
// }


// calculateAverage(2, 3, 4, 5)
// calculateAverage(-3, 5.2, 15, 1000.8)
// calculateAverage(1.4, -2.5, 14.3, 200.5)


// function noReturn(firstName, city){

//     return `${firstName} lives in ${city}`;
// }


// let result = noReturn("Hunter", "Alabama");


// console.log(result);


// function square(number){
//     let answer = number * number
//     return  answer   //  Note: this returns undefined
// }
// let num = 8
// let numberSquared = square(num)   // call the function and save the result

// console.log(`The square of your number is ${numberSquared}`)

// function sayHello(name){ //let name;
//     console.log('Hello')
//     return
//     console.log(name)
// }

// sayHello("Kelly")


// let randomNum = Math.floor(Math.random() * 9) + 1; // Returns a random integer from 1 to 9:

// function getAnswer(answerNumber){

//     switch(answerNumber){
//         case  1:
//             return 'It is certain'
//         case 2:
//             return 'It is decidedly so'
//         case 3:
//             return 'Yes'
//         case 4:
//             return 'Reply hazy try again'
//         case 5:
//             return 'Ask again later'
//         case 6:
//             return 'Concentrate and ask again'
//         case 7:
//             return 'My reply is no'
//         case 8:
//             return 'Outlook not so good'
//         case 9:
//             return 'Very doubtful'      
//         default:
//             break;
//     }
// }
// let fortune = getAnswer(randomNum)
// console.log(fortune);


// function F2C(nDegreesF){
//     let nDegreesC = (nDegreesF - 32) * (5.0 / 9.0)
//     return nDegreesC
// }

// function C2F(nDegreesC){
//     let nDegreesF = (1.8 * nDegreesC) + 32
//     return nDegreesF
// }

// // Code to ask the user to input values for conversion:
// let usersTempF = Number(prompt('Enter a value of degrees Fahrenheit: '))

// let convertedTempC = F2C(usersTempF)

// console.log(usersTempF, 'degrees Fahrenheit is:', convertedTempC, 'degrees Centigrade.')
// let usersTempC = Number(prompt('Enter a value of degrees Celsius: '))
// let convertedTempF = C2F(usersTempC)
// console.log(usersTempC, 'degrees Centigrade is:', convertedTempF, 'degrees Fahrenheit.')



// result = addTwo(5) //function ncall 
// let result = addTwo(5)


// function addTwo(startingValue){
//     endingValue = startingValue + 2
//     console.log('The sum of', startingValue, 'and 2 is:', endingValue)
//     return endingValue
// }

// console.log(result)


let firstName = "Katie"  //global variable 

function add(num1, num2){

    let num3 = 6  //local variable
    let firstName = "Jordan"
    console.log(firstName);
    return num1 + num2 + num3
}

add(4, 5)

console.log("hello world");
//main room (global scope)

// console.log(num3);

