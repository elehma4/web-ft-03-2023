// var i = 0;

// for(var i = 0; i<= 10; i++){
    
// }

// console.log(i)


// var text = (
//     'cat\n' +
//     'dog\n' +
//     'nickelodeon'
// );

// var text = [
//     'cat',
//     'dog',
//     'nickelodeon'
// ].join('\n');

// let text = `
// cat
// dog
// mouse
// `

// console.log(text)

// let date = new Date()


// let text = `The time and date is ${date.toLocaleString()}`

// console.log(text)

// let arr = [1, 2, 3, 4];

// let [a, b, c, d] = arr; 

// console.log(d)

// console.log(b)

// console.log(a + d)

// let luke = { occupation: 'jedi', father: 'anakin' };

// let {occupation, father} = luke; 

// console.log(father);

// let a = 1;
// let b = 2;

// [a, b] = [b, a]

// console.log(a, b);

// let temp = a; 

// a = b

// b = temp 

// console.log(a, b);



// let arr1 = [99, 29, 39, 29, 49, 79]; 
// let arr2 = [1, 2, 3, 4, 5, 6, 7];



// [arr1[0], arr1[2]] = [arr1[2], arr1[0]]

// console.log(arr1);

// [arr1[0], arr2[0]] = [arr2[0], arr1[0]]

// console.log(arr1, arr2);

// let arr = [];


// if(arr){
//     console.log("this is true");
// }
// else{
//     console.log("this is a false statement");
// }


// let age = 16;

// let beverage = age >= 21 ? "Beer" : "Juice"

// console.log(beverage);

// const greeting = person => {

//     let name = person ? person.name : "stranger"

//     return `Howdy, ${name}`
    
// }

// console.log(greeting({name: `Alice`}));
// console.log(greeting(null));
// console.log(greeting("Katie"));

// console.log(greeting(""));

// console.log(greeting(null));


// const add2Numbers = (num1=0, num2=0) => {
    
//     // num1 = num1  || 0; 
//     // num2 = num2 || 0;

//     return num1 + num2

// }

// let result = add2Numbers()

// console.log(result);


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9]
// let arr2 = [34, 23, 54, 34, 67]


// const logArguments = (...args) => {

//     for(let i =0; i< args[1].length; i++){

//         console.log(args[1][i]);
//     }
    
// }

// logArguments(arr, arr2)


// const names = (...args) => {
    

//     for(name of args){
//         console.log(name);
//     }
// }


// names("Joy", "Katie", "Kelly", "Hunter", "Mo", "Jordan", "Justin", "Ethan")



// const sum = (...args) => {

//     return  args.reduce((prev, curr)=>{
//         return prev + curr

//     }, 0)
    
// }


// console.log(sum(45, 34, 23, 12, 78, 65));

// console.log(sum(12, 67));

// const logArguments = () => {
    
//     for(let i = 0; i< arguments.length; i++){

//         console.log(arguments[i]);
//     }
// }


// logArguments(arr)


// let nums = {
//     a: 10,
//     b: 20,
//     c: "string",
//     d: 12
// }




// for (let key in nums){
//     console.log(key, nums[key]);
// }


// console.log(Object.keys(nums))

// let numsArr = Object.keys(nums)

// for(let i = 0; i< numsArr.length; i++){

//     console.log(numsArr[i]);

// }


// let arr = [6,77,88,99,33]
// //               | 


// for( let val of arr){

//     console.log(val);
// }


let num = 1; 

// try{

    num.toPrecision(200)
// }
// catch{

// }

