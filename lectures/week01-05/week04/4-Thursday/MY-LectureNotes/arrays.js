// Array is a class
// let arr = new Array(1, 2, 3, 4, 5)

//? ARRAY METHODS:
//        val->...
let arr = [1, 2, 3, 4, 5]
//         |->|->|->|->
// similar to for loop
arr.forEach(function(val){
    console.log(val);
})
arr.forEach(function(value){
    console.log(value);
})
arr.forEach(function(i){
    console.log(i);
})
arr.forEach(function(j){
    console.log(j);
})
arr.forEach(function(a){
    console.log(a);
})

arr.forEach((i)=>{
    console.log(`------------------
        ${i}`);
})
arr.forEach((j)=>{
    console.log(`j x 2 = ${j * 2}`);
})
arr.forEach((z)=>{
    console.log(z);
})
// only 1 variable:
arr.forEach(b=>{
    console.log(b);
})
arr.forEach(val=>{
    console.log(val);
})



let array = [4,5,6,7,8]

let newArr = array.filter((num)=>{

    return num > 5
    // return true // will return every num into new array
})

console.log(newArr);

let arr1 = [1,2,3,4,5]

let answer = arr1.some(num=>{
    return num > 5
})
console.log(answer);

console.log(`--------------------------`);


let arrayNumbers = [
    [1, 3, 4],
    [2, 4, 6, 8],
    [3, 6] ];

// arrayNumbers.reduce((prev, curr)=>{
//     return prev + curr // 4 + 5 = 9 + 6 = 15 + 7 = 22 + 8 = 30
// })

const sumArr = (array) => array.reduce((prev, curr)=>{
        return prev + curr
    }, 0)

arrayNumbers.sort((arrA, arrB)=>{

    return sumArr(arrA) - sumArr(arrB) // sort arrayNumbers based on sum

})

console.log(arrayNumbers);


let vip = ['very', 'important', 'person']
const acronymMaker = (arr)=>{
    let result = arr.reduce((concatenatedStr, currentWord)=>{
        return concatenatedStr + currentWord[0].toUpperCase()
    }, "")

    return result
}
console.log(acronymMaker(vip));


console.log(`---------------------------------`);


//todo: Create a function sumPlusMinus() that takes an array and sums separately positive and negative numbers
nums = [10, -12, 30, -1, -8, 0, 14, -33, 20]
function sumPlusMinus(nums) {
    let plusSum = 0;
    let minusSum = 0;
  
    for (let num of nums) {
      if (num >= 0) {
        plusSum += num;
      } else {
        minusSum += num;
      }
    }
  
    return {
      plus: plusSum,
      minus: minusSum
    };
  }
  
const result = sumPlusMinus(nums);
console.log(result); // { plus: 74, minus: -54 }

// CONDENSED:

function sumPlusMinus(nums) {
    return nums.reduce((acc, num) => {
      num >= 0 ? acc.plus += num : acc.minus += num;
      return acc;
    }, { plus: 0, minus: 0 });
  }
  
  const result2 = sumPlusMinus(nums);
  console.log(result2); // { plus: 74, minus: -54 }

// it should return an object like this:
// {
//     plus: 74, // sum of all positive numbers
//     minus: -54 // sum of all negative numbers
// }

//ternary statement:
// let age = 21
// if (age == 21){
//     console.log('you are 21');
// }else{console.log(`you are not 21`);}

// age == 21 ? console.log('you are 21') : console.log(`you are not 21`);

const numbers = [10,20,30,40,50]

function maxValue(numArr){
    return numArr.reduce((prev, curr)=>{
        // if(prev < curr){
        //     prev=curr
        // }else{
        //     prev=prev
        // }
        // return prev
        if (curr > prev){
            return curr;
        } else{
            return prev
        }
}, numArr[0]);
}

console.log(maxValue(numbers));


const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'apple']
//
//              apple:1   banana:1  orange:1  apple:2   orange:2  apple:3

//            obj[apple] = 1                obj[apple]++
let fruitCount = array =>{
    return array.reduce((prev, curr)=>{
        if(prev[curr]){
            prev[curr] ++
        } else{
            {prev[curr] = 1}
            return prev
        }
        return prev
    }, {})
}

let results = fruitCount(fruits)
console.log(results);


