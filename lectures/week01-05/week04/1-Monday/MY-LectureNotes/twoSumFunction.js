// array = [3, 5, -4, 8, 11, 1, -1, 6]
//                        i
//                               j         (would be quadratic cuz loop in loop)
// targetSum = 10


//* array = [3, 5, -4, 8, 11, 1, -1, 6]
//* targetSum = 10

//* targetSum = x + y
//* 10 = 11-1
//* x = targetSum - y

//? INDEPENDENT LOOP:
//* {
//*  3: true,
//*  5: true,
//*  -4: true,
//*  8, true,
//*  11, true,
//*  1: true,
//*  -1: true,
//*  6: true
//* }
//? INDEPENDENT LOOP:
//* x = targetSum - y
//* array = [3, 5, -4, 8, 11, 1, -1, 6]
//*

function twoSum(array, targetSum){

    let cache = {}
    let results = []

    for(let val of array){ // iterates everything
        cache[val] = val
        // cache[3] then [5], then [-4]... inside obj --> {3:3, 5:5, '1': 1,'3': 3,'5': 5,'6': 6,'8': 8,'11': 11,'-4': -4,'-1': -1}
    }
    console.log(cache);

    for(let i = 0; i < array.length; i++){
        // x = targetSum - y
        let y = array[i]
        console.log(y);
        let calculatedVal = targetSum - y
        console.log(calculatedVal);
        
        if(calculatedVal === cache[calculatedVal] && calculatedVal != y ){
            // if both are true then match is found
            results.push(array[i])
        } 
    }
    return results;
}

let result = twoSum([3, 5, -4, 8, 11, 1, -1, 6], 10)
console.log(result);