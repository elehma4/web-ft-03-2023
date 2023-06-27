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

let arr7 = [-4, 5, 10, 8, -10, -6, -4, -2, -5, 3, 5, -4, -5, -1, 1, 6, -7, -6, -7, 8]

let arr8 = [-7, 2, 3, 8, -10, 4, -6, -10, -2, -7, 10, 5, 2, 9, -9, -5, 3, 8]

let arr9 = [8, -6, 7, 10, 8, -1, 6, 2, 4, -5, 1, 10, 8, -10, -9, -10, 8, 9, -2, 7, -2, 4]

let arr10 = [5, -2, 2, -8, 3, -10, -6, -1, 2, -2, 9, 1, 1]

let arr11 = [2, -2, -6, -10, 10, 4, -8, -1, -8, -4, 7, -4, 0, 9, -9, 0, -9, -9, 8, 1, -4, 4, 8, 5, 1, 5, 0, 0, 2, -10]
let arr12 = [4, 1, 5, 0, -9, -3, -3, 9, 3, -4, -9, 8, 1, -3, -7, -4, -9, -1, -7, -2, -7, 4]

let arr13 = [427, 787, 222, 996, -359, -614, 246, 230, 107, -706, 568, 9, -246, 12, -764, -212, -484, 603, 934, -848, -646, -991, 661, -32, -348, -474, -439, -56, 507, 736, 635, -171, -215, 564, -710, 710, 565, 892, 970, -755, 55, 821, -3, -153, 240, -160, -610, -583, -27, 131]
let arr14 = [991, -731, -882, 100, 280, -43, 432, 771, -581, 180, -382, -998, 847, 80, -220, 680, 769, -75, -817, 366, 956, 749, 471, 228, -435, -269, 652, -331, -387, -657, -255, 382, -216, -6, -163, -681, 980, 913, -169, 972, -523, 354, 747, 805, 382, -827, -796, 372, 753, 519, 906]

let arr15 = [384, -67, 120, 759, 697, 232, -7, -557, -772, -987, 687, 397, -763, -86, -491, 947, 921, 421, 825, -679, 946, -562, -626, -898, 204, 776, -343, 393, 51, -796, -425, 31, 165, 975, -720, 878, -785, -367, -609, 662, -79, -112, -313, -94, 187, 260, 43, 85, -746, 612, 67, -389, 508, 777, 624, 993, -581, 34, 444, -544, 243, -995, 432, -755, -978, 515, -68, -559, 489, 732, -19, -489, 737, 924]

let arr16 = [544, -578, 556, 713, -655, -359, -810, -731, 194, -531, -685, 689, -279, -738, 886, -54, -320, -500, 738, 445, -401, 993, -753, 329, -396, -924, -975, 376, 748, -356, 972, 459, 399, 669, -488, 568, -702, 551, 763, -90, -249, -45, 452, -917, 394, 195, -877, 153, 153, 788, 844, 867, 266, -739, 904, -154, -947, 464, 343, -312, 150, -656, 528, 61, 94, -581]

let arr17 = [-19, 759, 168, 306, 270, -602, 558, -821, -599, 328, 753, -50, -568, 268, -92, 381, -96, 730, 629, 678, -837, 351, 896, 63, -85, 437, -453, -991, 294, -384, -628, -529, 518, 613, -319, -519, -220, -67, 834, 619, 802, 207, 946, -904, 295, 718, -740, -557, -560, 80, 296, -90, 401, 407, 798, 254, 154, 387, 434, 491, 228, 307, 268, 505, -415, -976, 676, -917, 937, -609, 593, -36, 881, 607, 121, -373, 915, -885, 879, 391, -158, 588, -641, -937, 986, 949, -321]

let arr18 = [-823, 164, 48, -987, 323, 399, -293, 183, -908, -376, 14, 980, 965, 842, 422, 829, 59, 724, -415, -733, 356, -855, -155, 52, 328, -544, -371, -160, -942, -51, 700, -363, -353, -359, 238, 892, -730, -575, 892, 490, 490, 995, 572, 888, -935, 919, -191, 646, -120, 125, -817, 341, -575, 372, -874, 243, 610, -36, -685, -337, -13, 295, 800, -950, -949, -257, 631, -542, 201, -796, 157, 950, 540, -846, -265, 746, 355, -578, -441, -254, -941, -738, -469, -167, -420, -126, -410, 59]


console.log(mergeSort(arr17));


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
// console.log(`
// -----------------------
// `, 'final result:', mergeSort2(arr2));