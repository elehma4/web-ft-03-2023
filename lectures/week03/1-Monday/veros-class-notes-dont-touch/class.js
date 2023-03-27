

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


for(let index = 0; index < animals.length; index++){ //animals[3]

    // console.log(animals[index]);
    console.log(`${index + 1}. ${animals[index]}`);

}

// console.log(animals);
