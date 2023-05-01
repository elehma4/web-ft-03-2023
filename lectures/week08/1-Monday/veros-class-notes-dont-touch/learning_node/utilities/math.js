
// sum  [3, 4, 5, 6]
//                |

const sum = (arr) => arr.reduce((acc, curr)=>{  // 18

        return  acc + curr
    }, 0)


// sum using for loop (counter)

// sum  [3, 4, 5, 6]
//       i
const sumCounter = (arr) => {

    let acc = 0

    for(let i = 0; i< arr.length; i++){

        // acc = acc + arr[i]

        acc += arr[i]
    }


    return acc;
    
}


// sum for of method  (iterator)

// sum  [3, 4, 5, 6]
//       |
const sumIt = (arr) => {

    let acc = 0; 

    for (let currVal of arr){

        acc += currVal
    }

    return acc;
    
}


//multipy reduce

const multiply = (arr) => arr.reduce((acc, curr)=>{

        return acc * curr
    }, 1 )



let math = {
    sum: sum, 
    multiply : multiply
}

module.exports = math


