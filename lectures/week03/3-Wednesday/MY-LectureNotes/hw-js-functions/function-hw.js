// JS Functions HW

//todo 1. Write a function that takes two numbers as arguments and returns their sum.

function add(num1, num2){
    console.log(`The sum of ${num1} + ${num2} is ${num1 + num2} `);
}
add(10000, 31325)
console.log('---------------------------------------------');

//todo 2. Write a function that takes a string as an argument and returns the length of the string.

function stringLength(string){
    return string.length
    } 
let length = stringLength("ShimmyShimmy")
console.log(length);
console.log('---------------------------------------------');

//todo 3. Write a function that takes an array of numbers as an argument and returns the average of those numbers.

let sum = 0;
function calcAvgArr(avgParam){
    for(i = 0; i < avgParam.length; i++){
        sum += avgParam[i];
        avg = sum / avgParam.length
    }
    console.log(`The avg. of ${avgParam} is ${avg}`);
}
let avgNumArray = [111, 333, 555, 777]
calcAvgArr(avgNumArray)

console.log('---------------------------------------------');

//todo 4. Write a function that takes a number as an argument and returns true if the number is even, and false if it's odd.

function evenOrOdd(num){
    if (num % 2 == 0){
        console.log('even number');
    } else {
        console.log('odd number');
    }
}
evenOrOdd(17)

console.log('---------------------------------------------');

//todo 5. Write a function that takes an array of strings as an argument and returns a new array with all the strings capitalized.

function capitalize(arrayOfStrings){
    let capArray = [];
    for (i = 0; i < arrayOfStrings.length; i++){
        capArray.push(arrayOfStrings[i].toUpperCase())
    }
    return capArray;
}
let noCapArray = ["this", "is", "my", "cap", "array"]
let capitalizeArray = capitalize(noCapArray)
console.log(capitalizeArray);
console.log('---------------------------------------------');

//todo 6. Write a function that takes an array of numbers as an argument and returns a new array with all the numbers doubled.

function doubleArray(numArray){
    let dubArray = [];
    for (i = 0; i < numArray.length; i++){
        dubArray.push(numArray[i]*2)
    }
    return dubArray;
}
let arr = [11, 17, 33, 47]
let double = doubleArray(arr)
console.log(double);
console.log('---------------------------------------------');

//todo 7. Write a function that takes a string as an argument and returns true if the string is a palindrome (reads the same backwards and forwards), and false if it's not.

function palindrome(palWord){
    let palForward = ''
    for (i = 0; i < palWord.length; i++){
        palForward += palWord[i]
    }

    let palBackward = ''
    for (j = palWord.length - 1; j > -1; j--){
        palBackward += palWord[j]
    }

    if(palBackward === palForward){
        return true;
    } else {
        return false;
    }
}
let stringTest = "noon"
let testPalindrome = palindrome(stringTest)
console.log(testPalindrome);
console.log('---------------------------------------------');

//todo 8. Write a function that takes an array of strings as an argument and returns the longest string in the array.

function returnLongest(longestFinder) {
    let longest = '';
    for (let i = 0; i < longestFinder.length; i++) {
        if (longestFinder[i].length > longest.length) { 
        //* assigns value of the current element to longest variable, updating it to the new longest string.
        //* the value at longest will only remain if it's longer than all the other values being passed through longestFinder[i]
            longest = longestFinder[i];
        }
    }
    return longest;
}
let longArray = ["largeee", "medium", "largoooor", "small"]
let testLongest = returnLongest(longArray)
console.log(testLongest);
console.log('---------------------------------------------');

//todo 9. Write a function that takes an array of numbers as an argument and returns the largest number in the array.

function returnLargest(largestFinder){
    let largest = 0;
    for (let i = 0; i < largestFinder.length; i++){
        if (largestFinder[i] > largest){
            largest = largestFinder[i]
        }
    }
    return largest;
}
let largeArray = [777, 999, 333, 1999, 444, 888, 1111]
let testLargest = returnLargest(largeArray)
console.log(testLargest);
console.log('---------------------------------------------');

//todo 10. Write a function that takes an array of objects (where each object has a "name" and "age" property) as an argument and returns a new array of only the names of people who are older than 18 or 18.

function filterAdults(arr){
    let adultPeople = [];
    for (let i = 0; i < arr.length; i++){
    //? only difference is arr[i].age and arr[i].name 
        if(arr[i].age >= 18){
            adultPeople.push(arr[i].name)
        }
    }
    return adultPeople;
}

//! OBJECT: people
let people = [    
    { name: "Jimmy", age: 15 },    
    { name: "Ethan", age: 23 },    
    { name: "Charles", age: 18 },    
    { name: "Adelyn", age: 21 },    
    { name: "Aero", age: 2 },
];

let adults = filterAdults(people);
console.log(adults); 
console.log('---------------------------------------------');
