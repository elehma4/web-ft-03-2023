

// let arr = [4, 5, 6, 7, 8] 
// //               |
// //         0


// let arr = [
//     [1, 3, 4],
//     [2, 4, 6, 8],
//     [3, 6]
// ];


// const sumArr = (arr) => arr.reduce((prev, curr)=>{

//         return prev + curr

//     }, 0)

    

// arr.sort((arrA, arrB)=>{

//     return sumArr(arrA) - sumArr(arrB)

// })

// console.log(arr);


// let words = ['very', 'important', 'person']; //VIP
// //                                   |
// //                                  VIP


// const acronym = (arr) => arr.reduce((concatentatedStr, currentWord)=>{

//         return concatentatedStr +  currentWord[0].toUpperCase();

//     }, "")


// console.log(acronym(words));

// console.log(acronym(['national', 'aeronautics', 'space', 'administration']))


// Create a function sumPlusMinus() that takes an array and sums 
// separately positive and negative numbers

// it should return an object like this:

// {
//     plus: 74, // sum of all positive numbers
//     minus: -54 // sum of all negative numbers
// }


//ternary statmetn 

// let age = 21;

// if(age == 21){
//     console.log('you are 21');
// }
// else{
//     console.log(`you are not 21`);
// }

// age == 21 ? console.log('you are 21')    :  console.log('you are not 21');



// let nums = [10, -12, 30, -1, -8, 0, 14, -33, 20]
// //          |

// const plusMinus = arr => {
    
//     return arr.reduce((prev, curr)=>{


//         return {
//             plus: curr > 0 ? prev.plus + curr  : prev.plus,
//             minus: curr < 0 ? prev.minus + curr : prev.minus
//         }

       

//     }, {plus: 0, minus:0})
// }



// let result = plusMinus(nums) 
// console.log(result);



// Given an array of numbers, find the maximum value (using reduce)
// const numbers = [10, 20, 30, 40, 50];


// Given an array of elements, count the number of times a specific element occurs
// const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'apple'];


let obj = {} 


// obj.apple = "apple"

// obj["pear"] = "pear"

// console.log(obj);

// obj.apple = 1 

// obj["apple"]

// console.log(obj["apple"]);

// const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'apple'];
// //                                             |         |
//                                         {apple:1,
//                                             banana: 1,
//                                             orange: 1}

// prev["orange"] = 1

// let fruitCount = array=>{
//     return  array.reduce((prev, curr)=> {
//           if(prev[curr]){ //prev["apple"]
//               prev[curr] ++
//           }
//           else{prev[curr] = 1}

//           return prev
//       }, {})
      
//   }
  
//   let result = fruitCount(fruits)
//   console.log(result);