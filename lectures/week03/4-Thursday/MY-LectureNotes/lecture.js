// function takeShower(){
//     console.log("Showering!")
// }
// function cookFood(){
//     let items = ['coffee', 'eggs', 'smoothie']
     // console.log(`Cooking ${items}`)
// }
// function eatBreakfast(){
//    let meal = cookFood()
//    console.log(`Eating ${meal}`)
// }
// function wakeUp(){
//     takeShower()
//     eatBreakfast()
//     console.log("Okay, ready to go to work!");
// }
// if(true){

// }
// wakeUp()

//* ---------------------------------------------------------

// function loopNTimes(n){
//     console.log(`${n}`);
     // base case
//     if ( n<= 1){
//         return 'complete'
//     }
     // recursive case
//     return loopNTimes(n - 1)
// }
// loopNTimes(5)

//* ---------------------------------------------------------

//todo Write a function called power which accepts a base and an exponent.
// The function should return the power of the base to the exponent.

//? function power(base, exponent){
     //base case
//     if(exponent === 0) return 1;
     //recursive case
//     return base *  power(base, exponent - 1)
// }

//* off call stack because resolved
//! power(3, 0) => 1 -> once base case is hit it starts resolving & returning info to caller
//! power(3, 1) => 3 * power(3, 0) => 3 * 1
//! power(3, 2) => 3 * power(3, 1) => 3 * 3 = 9
//! power(3, 3) => 3 * power(3, 2) => 3 * 9 = 27
// power(3, 4) => 3 * power(3,3) => 3 * 27 = 81

//* ---------------------------------------------------------

//todo Write a function factorial which accepts a number and returns the factorial of that number. 
// A factorial is the product of an interger and all the integers below it; eg. , factorial four( 4!) is equal to 24, because 4 * 3 * 2 * 1 equals 24. factorial zero (0!) is always 1. (4! = $ * 3 * 2 * 1 * 0)

function factorial(n){
    // base
    if (n == 0) return 1;

    // recursive
    return n * factorial(n-1)
}
//                           4*6=24         3*2=6                2*1=2          1*1=1            <= pops off callstack in reverse
let answer = factorial(5) // => 4 * factorial(3) * factorial(2) * factorial(1) * factorial(0)
console.log(answer);
console.log('-----------------------------------------------');

//* ---------------------------------------------------------

//todo Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function

function recursiveRange(num){
    // base
    if (num == 0) return 0;

    // recursive
    return num + recursiveRange(num-1)
}
let rrAnswer = recursiveRange(10)
console.log(rrAnswer);

