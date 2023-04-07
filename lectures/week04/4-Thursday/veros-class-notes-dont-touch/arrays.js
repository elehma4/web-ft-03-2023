
// let arr = new Array(1, 2, 3,4 ,5, 6)
// let arr = [1, 2, 3, 4, 5]
// 

// let arrB = [4, 5,6 ,7, 8]

// arr.forEach(function(val){

//     let sum = 3 + val;

//     console.log(val * sum);

// })


let arr = [4, 5,6 ,7, 8]


let answer = arr.some(num =>{

    return num < 5
})

console.log(answer);

// let newArr = arr.filter((num)=>{
    
//     return num > 5
// })

// console.log(newArr);


