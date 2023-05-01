
// sum [3, 4, 5, 6]

// sum using for loop (counter)
// sum using for of method
// multiply using reduce method

const sum1 = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    };
    return sum 
}
console.log(sum1([3,4,5,6])); 


const sum2 = (arr) => {
    let sum = 0
    for(let val of arr){
        sum += val
    }
    return sum
}
console.log(sum2([3,4,5,6])); 


const mult = (arr) => {
    return arr.reduce((acc, cur) => {
        return acc * cur
    }, 1);
}
console.log(mult([3,4,5,6]));


let math = {
    sum1: sum1,
    mult: mult,
}

module.exports = math;