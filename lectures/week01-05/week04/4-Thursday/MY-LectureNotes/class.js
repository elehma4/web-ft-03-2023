// Hoisting:
helloWorld()
// FUNCTION DECLARATION:
function helloWorld(){
    console.log('hello world');
}
// let size = area(3,4)
// console.log(size);
// function area(width, height){
//     return width * height
// }

// FUNCTION EXPRESSION (anonymous function):
//? Often stored in a variable in order to refer to it.

let area = function(width, height){
    return width * height;
}
console.log(area(4, 5)); 


// SELF INVOKING FUNCTION:
(function(num1, num2){
    console.log("hello world", num1 + num2);
})(6, 7)


// PASS BY REFERENCE:
let arrayA = [1, 2, 3, 4]
// let arrayB = arrayA //making copy of memory address
let arrayB = [...arrayA] // best method

arrayA.push(99)
console.log(arrayA);
console.log(arrayB);



//anon function
let areas = function(){}

let areas2 = () =>{}

((num1, num2)=>{

})()


let greeting = ()=>{
    console.log("hello world");
}

greeting()


//ANONYMOUS & AUTO RETURN:

// same as:
// let add = function(num1, num2){
// return num1 + num2    
// }

// Works well for 1 line code:
let add = (num1, num2)=>num1 + num2
let subtract = (num1, num2)=>num1 - num2

let calc = function(num1, num2, operation){ //operation is a callback function

    return operation(num1, num2)
}

let resultAdd = calc(5, 6, add)
let resultSub = calc(10, 5, subtract)

console.log(resultAdd);
console.log(resultSub);

console.log(`------------------------`);

let nums = [67, 45, 43, 23, 12]

let newNumsArr = nums.map(val =>{
    // modification:
    return val * 2
})



console.log(newNumsArr);