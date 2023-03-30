


// var let block scoped variable const

// var index = 0;

// for(let index = 0; index<= 10; index++){

//     console.log(index)
// }

// console.log(` last value of index ${index}`)

//const 

// const pi = 3.14

// pi = 3


// const arr = [1, 2, 3, 4]


// arr.push(5)

// arr = 5;

// console.log(arr)


// function takeShower(){

//     //some more code to execute
//     return "Showering!"
// }

// function eatBreakFast(){
//     //some more code to execute
//     let meal = cookFood();
//     return `Eating ${meal}`
// }

// function cookFood(){
//     //some more code to execute
//     let items = ["Oatmeal", "Eggs", "Protein Shake"];
//     //some more code to execute
//     return items[Math.floor(Math.random()*items.length)];
// }

// function wakeUp(){
//     //some more code to execute
//     takeShower()
//     //some more code to execute
//     eatBreakfast()
//     console.log("Ok ready to go to work!")
// }

// if(true){
//     //some more code to execute
// }

// // while(true){
// //     //some more code to execute
// // }

// wakeUp()


// function callMe(){

//     //base case

//     //recursive
//     callMe()
// }


// callMe()


// function loopNTimes(n){

//     console.log(`${n}`);
//     //base case 
//     if (n <= 1){
//         return 'complete'
//     }

//     //recursive case
//     return loopNTimes(n - 1)
// }


// loopNTimes(5)

// loopNTimes(1) => complete
// loopNTimes(2) => complete
// loopNTimes(3) => complete
// loopNTimes(4) => complete
// loopNTimes(5)


/**
 *? Write a function called power which accepts a base and an exponent.
The function should return the power of the base to the exponent.
 */


// 2 ^ 0
//  2 *  2 * 2
//  2 * ru


// function power(base, exponent){

//     //base case

//     if(exponent === 0 ) return 1;

//     //recursive case
//     return base * power(base, exponent - 1)

// }

// //! power(3, 0) => 1
// //! power(3, 1) => 3 * power(3, 0)  => 3 * 1 = 3
// //! power(3, 2) => 3 * power(3, 1)  => 3 * 3 = 9
// //! power(3, 3) => 3 * power(3, 2)  => 3 * 9 = 27
// // power(3, 4) => 3 * power(3, 3)  => 3 * 27 = 81


/**
 * Write a function factorial which accepts a number and returns
the factorial of that number. A factorial is the product of an
interger and all the integers below it; eg. , factorial four( 4!) is
equal to 24, because 4 * 3 * 2 * 1 equals 24. factorial zero (0!) is always 1.

4!  $ * 
3 * 2 *1 * 0 
 */

function factorial(n){

    //base 

    if (n == 0) return 1;

    //recursive

    return n * factorial(n - 1)

}

//! factorial(0) => 1
//! factorial(1)  => 1 * factorial(0) => 1 * 1
//! factorial(2)  => 2 * factorial(1) => 2 * 1 = 2
//! factorial(3)  => 3 * factorial(2) => 3 * 2 = 6
//factorial(4) => 4 * factorial(3) => 4 * 6 = 24


/**
 * Write a function called recursiveRange which accepts a number and adds up all
the numbers from 0 to the number passed to the function
 */