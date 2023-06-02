let age = 25

// if (age >= 21){
//     console.log(`what beer would you like?`);
// }
// else {
//     console.log(`too young to drink`);
// }

let result = (age >= 21) ? `what beer would you like?` : `too young to drink`

// console.log(result);

let arrA = [1, 2, 3]

let arrB = arrA //assigning same memory address

arrB.push(99)

console.log(arrA, arrB);
// both have the same memory
console.log(`----------------------`);

let arr1 = [1, 2, 3]

let arr2 = [...arr1] 

arr2.push(99)

let arr3 = [...arr1, ...arr2]

console.log(arr1, arr2, arr3);




const student = {
    ID: '21',
    name: 'jon',
    GPA: '3.0'
}

// let id = student.id
// let name = student.name
// let gpa = student.GPA


let {ID:id, name, GPA} = student;

console.log(id, name, GPA);



console.log(`--------------------`);


let arr = [1, 2, 3, 4, 76, 56, 45, 12, 43]

// val is each element as iterating through
let newArr = arr.map(val => {

    return val * 2
})

console.log(newArr);


let newArr2 = arr.map((val, index) => {
    return (`${index}: ${val * 2}`)
})

console.log(newArr2);


let newArr3 = arr.map(val => val* 2)

console.log(newArr3);