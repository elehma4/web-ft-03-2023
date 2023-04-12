// let date = new Date()

// let text = `The time and date is ${date.toLocaleString()}`

// console.log(text);

// // logs date & time

// let arr = [1, 2, 3, 4]

// let [a, b, c, d] = arr;

// console.log(d);
// console.log(b);
// console.log(a+c+d);

// //*---------------------

// let luke = {occupation: 'jedi', father: 'anakin'}

// let {occupation, father} = luke

// console.log(luke.father);

// //*----------------------

// let x = 1;
// let y = 2;

// [x, y] = [y, x];
// console.log(x, y);

// let temp = x;
// x = y;
// y = temp;
// console.log(x, y);

//*----------------------

// let arr1 = [99, 29, 39, 29, 49, 79];
// let arr2 = [1, 2, 3, 4, 5, 6, 7];

// [arr1[0], arr2[0]] = [arr2[0], arr1[0]];
// console.log(arr1, arr2);
// [arr1[0], arr1[2]] = [arr2[2], arr1[0]]
// console.log(arr1);


//*----------------------

let age = 26;

let beverage = age >= 21 ? "beer" : "juice"

console.log(beverage);


const greeting = person => {

    let name = person ? person.name : "stranger"

    return `Howdy, ${name}`

}
console.log(greeting({name: `Alice`}));
console.log(greeting(null));
// console.log(greeting("Addy"));
// console.log(greeting(""));
// console.log(greeting(null));


//* ----------------------

let arr = [1,2,3,4,5]
let arr2 = [23, 24, 64, 12, 65]

const logArguments = (...args) => {
    for(let i = 0; i < args[1].length; i++){
        console.log(args[1][i]);
    }
}
logArguments(arr, arr2)

// const logArguments = () => {

//     for (let i = 0; i < arguments.length; i ++){
//         console.log(arguments);
//     }
// }

// logArguments(arr)


const names = (...args) => {

    for(name of args){
        console.log(name);
    }
}
names("Jim", "Jimmy", "Jimmya", "Jimmea", "jimy")



let sum = (...args) => {

    return args.reduce((acc, cur)=>{
        return acc + cur
    }, 0)
}

console.log(sum(23,543,64,12,43));



let nums = {
    a: 10,
    b: 20,
    c: "string",
    d: 12
}

for(let key in nums){
    console.log(key, nums[key]);
}

// console.log(Object.keys(nums));



let array = [6,77,88,99,33]

for (let val of array){
    console.log(val);
}


//* try, catch, finally:

let num = 1
try{
    num.toPrecision(200)
} 
catch (err) {
    console.log("sorry wrong");
}