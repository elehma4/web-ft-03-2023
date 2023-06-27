// function to sort the given array
function mergeSort(arr){
    // base case (if arr is empty or only has 1 element it has been sorted):
    if (arr.length <= 1){
        return arr;
    }

    // Find middle index:
    const mid = Math.floor(arr.length / 2);

    // Split the array into two halves around the middle index:
    const left = arr.slice(0, mid); // First half of array
    const right = arr.slice(mid); // Second half of array

    // Recursively sort both halves & then merge the sorted halves together
    return merge(mergeSort(left), mergeSort(right));
}

// Function to merge the two sorted arrays into a single array
function merge(left, right){
    const result = []; // This will be the final sorted array

    // Continue looping when left & right have elements
    while (left.length && right.length){
        // Compare the first element of both arrays & remove and pushthe smaller one to the result array
        if (left[0] < right[0]){
            result.push(left.shift()); // push first element of left arr
        } else {
            result.push(right.shift()); // push first element of right arr
        }
    }

    // Once we've exhausted one array, the other one will still be sorted, so we can concatenate it onto the end of result
    return [...result, ...left, ...right]
}
const arr = [12, 7, 17, 11, 13, 5, 6, 7];
console.log(mergeSort(arr));









// [4, 2, 6, 0]
//      |
// [4, 2] [6, 0]
// 4   2   6   0 <- base case
// [2, 4]  [0, 6]
// left     right
// result == [0, 2] <- left is pushed first if less
// then it will compare 4 & 6 which will be pushed 

// split the arr
function mergeSort2(arr){
    if(arr.length <= 1){ // now it can call merge
        return arr;
    }

    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)

    console.log('sort left:', left, `
    -----------------------
    `, 'sort right:', right, `
    -----------------------
    `);
    return merge2(mergeSort2(left), mergeSort2(right))
}

function merge2(left, right){
    const result = []

    while(left.length && right.length){
        if (left[0] < right[0]){
            result.push(left.shift());
        } else {
            result.push(right.shift())
        }
    }
    console.log('merge result:', ...result,`
    -----------------------
    `, 'merge left:', ...left, `
    -----------------------
    `, 'merge right:', ...right);
    return [...result, ...left, ...right]
}
const arr2 = [4, 2, 6, 0];
console.log(`
-----------------------
`, 'final result:', mergeSort2(arr2));