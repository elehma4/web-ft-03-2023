

// let day1 = "Sunday"
// let day2 = "Monday"
// let day3 = "Tuesday"
// let day4 = "Wednesday"
// let day5 = "Thursday"
// let day6 = "Friday"
// let day7 = "Saturday"

// let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
//            0         1          2          3            4          5          6


// let myArr = [3,6,5,4,2];  //initialize an empty array
//           0 1 2 3 4

// console.log(myArr);

// console.log(myArr[3]);

// console.log(`myArr length ${myArr.length}`);
// console.log(`days length ${days.length}`);

// CRUD - create, read, update, delete

//? update a value inside of myArr

// myArr[1] = 99;

// console.log(myArr);


//? list of numbers - push

// let nums = []

// nums.push(45)

// nums.push("Hello")

// nums.push(true)

// nums.push([1, 2,3, 4])

// console.log(nums);

//? unshift to append to beginning of array

let nums = [4, 5, 6, 7] /// [4, 5, 6, 7]

// 1. 4
// 2. 5 
// 3. 6 
// 4. 7

// console.log(nums);
nums.unshift(3)
nums.unshift(2)
nums.unshift(1)
nums.unshift(0)

// console.log(nums);


let animals = ["dog", "cat", "rabbit", "horse", "pig"]
//              0      1        2        3       4

// animals[1]


// for(let index = 0; index < animals.length; index++){ //animals[3]

//     // console.log(animals[index]);
//     console.log(`${index + 1}. ${animals[index]}`);

// }

// console.log(animals);

//? pop() 

// let lottoNums = [23, 11, 43, 19, 37, 16];


// lottoNums.pop(); // removes item from the end of a list

// lottoNums.shift(); //removes item from beginning of list

// console.log(lottoNums);

//? splicing

// let lottoNums = [23, 11, 43, 19, 37, 16];
// //               0   1   2   3    4   5
// //                       |


// lottoNums.splice(2, 1)

// console.log(lottoNums);  //[23, 11, 19, 37, 16 ]


//? slicing

let lottoNums = [23, 11, 43, 19, 37, 16];
//               0   1   2   3    4   5
//                       |


let newLottoNums = lottoNums.slice(2, 6)


console.log(lottoNums);
console.log(newLottoNums);


let myBootcamp = "Digital Crafts Boot camp"


// myBootcamp[0] = "d"

// console.log(myBootcamp);


// for(let i = 0; i < myBootcamp.length; i++){
//     console.log(myBootcamp[i]);
// }

let newBootcamp = myBootcamp.split(' ')

console.log(newBootcamp);

// newBootcamp[0] = "d"

// console.log(newBootcamp);

// myBootcamp = newBootcamp.join('*')

// console.log(myBootcamp);


// muliti

// let multi = [2, 3, true, [4, 5, 6]]
// //                        0  1  2
// //           0  1   2        3

// multi[3][1]

// console.log(multi[3][1]);

//?  While loops

let rows = [ [2, 4, 6, 8 ],  [ 1, 3, 5, 7, 9 ],  [ 8, 6, 4, 2 ],  [ 7, 5, 3, 1 ] ]

// innerIndex 0  1  2  3      0  1  2   3      0  1  2  3       0  1  2  3

// outerIndex       0            1                 2                3    



for( let arrVal of rows){

    // console.log(arrVal);

    for( let innerVal of arrVal){
        console.log(innerVal);
    }
}


//? Multi dimensional array with while loop

// let outerIndex = 0;
// let innerIndex = 0;
 

// while(outerIndex < rows.length){  // 1

//     let arrElement = rows[outerIndex] // [2, 4, 6, 8 ]
//     //                                    0  1  2  3 <--

//     while(innerIndex < arrElement.length){  
        
//         console.log(rows[outerIndex][innerIndex]);

//         innerIndex++;

//     }

//     outerIndex++;  // 1 
//     innerIndex = 0;

// }


//? Multi dimensional array with for loop
// rows[0]

// console.log(rows[0][3]);

// for(let outerIndex = 0; outerIndex < rows.length; outerIndex++){ /// outerIndex = 2

//     // console.log(rows[outerIndex]);

//     let arrElement = rows[outerIndex];

//     for(let innerIndex = 0; innerIndex <  arrElement.length; innerIndex++){

//         rows[outerIndex][innerIndex]   //rows[2][0]

//         console.log(rows[outerIndex][innerIndex]);
//     }
// }



//? Passing by value and  by reference
// let a = 4;  // integers, strings, booleans = pass by value

// let b = a; 


// a = 5;

// console.log(a);  // 5
// console.log(b);  // 4


// let arrA = [1, 2, 3, 4]
// let arrB = arrA; 

// arrA.push(99);

// console.log(arrA);  // [1, 2, 3, 4, 99]
// console.log(arrB);  // [1, 2, 3, 4]

// pass reference pass value
// c/ c++

//? memory block
//? address  &23lkxl9309kqws
//? value sdfsdf
//? label arrA

// spread operator 

// let arrA = [1, 2, 3, 4]

// let arrB = [...arrA]  //spread operator

// arrA.push(99)

// console.log(arrA);
// console.log(arrB);


//? For - Of loop
// for(let i = 0; i< 10; i++){

// }

// let arrA = [45, 23, 89, 0]; 
// //            

// for (val of arrA){

//     console.log(val);
// }

