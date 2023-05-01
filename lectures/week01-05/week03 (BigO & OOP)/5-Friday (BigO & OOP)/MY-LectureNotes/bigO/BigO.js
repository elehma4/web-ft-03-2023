//! Note: not solved yet

let arr = [3, 5, -4, 8, 2, 1, -1, 6]
//                   y  x
//                 y = target - x
let target = 10;

//! Note: y and x do not need to be consecutive

let output = {}

function twoSum(array, targetSum){
    for(let j = 0; j < array.length; j++){
        output += array[j]
    }
    console.log(output);
    // for (let i = 0; i < array.length; i++){ // looping through array
    //     output = array[i - 1]
    //     if(targetSum == array[i] + output){
    //         output = array[i, [i - 1]];
    //         return output
    //     }
    // }

}
console.log(twoSum(arr, target));

// Veronica's thought process:
//* we need the target sum to know that target = x + y = 10
//* y = target - x = y



// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]