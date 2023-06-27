

//  [3, 7, 9, 11]   [1, 3, 6, 9, 13, 14]
//             i                  j

// [1, 3, 3, 6, 7, 9, 9, 11, 13, 14, 18]

let arr1 = [3, 7, 9, 11]
//          |
let arr2 = [1, 3, 6, 9, 13, 14]
//             |
let arrSolution = [];

for(let i = 0; i <  arr1.length; i++){
    for(let j =  0; j < arr2.length; j++){
        if(arr1[i] > arr2[j]){
            arrSolution.push(arr2[j])
        } else if(arr1[i] < arr2[j]){
            arrSolution.push(arr1[i])
        }
        else if(arr1[i] === arr2[j]){
            arrSolution.push(arr1[i])
            arrSolution.push(arr2[j])
        }
    }
}

console.log(arrSolution);

// this is missing a counter

