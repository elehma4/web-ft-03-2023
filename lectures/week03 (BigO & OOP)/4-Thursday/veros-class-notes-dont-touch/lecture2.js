

// let arr = [3, 4, 5, 6, 7];

// for (val of arr){

//     console.log(val);
// }
// let obj = {
// }

// // C  R  U  D 

// let students = {
//     firstName : "Kelly", 
//     city: "Houston"
// }


// for (key in students){

//     console.log(key, students[key]  );
// }



// let keys = Object.keys(students)

// console.log(keys);




// console.log(students);


// console.log(students['first Name'])

// console.log(students.firstName)

// // //? adding a key
// students.state = "Texas"

// console.log(students);

// students.firstName = "Ethan"


// console.log(students);


// delete students.firstName 

// delete students['firstName']


// console.log(students);


// let characterSheet = {
//     name: 'tim berners-lee',
//     title: 'sir',
//     powers: 'invent the web'
// };


// let someKey = "name"

// console.log(characterSheet[someKey])

// console.log(characterSheet.title);

// for (key in characterSheet ){

//     console.log(characterSheet[key])
// }


let contacts = {

    Hunter: {
        workNumer: "333-333-3333", 
        cellNumber: "222-222-2222"
    },

    Kelly: {
        workNumber: "444-444-4444", 
        cellNumber: "888-888-8888"

    }
}


// let result = contacts.Hunter.workNumer

// console.log(result);


// [{}, {}, {}, ]
//  0   1   2

// [{}, {}]
//  0   1
// let contact = [
//     {
//         first_name: 'Phillip',
//         last_name: 'Guo',
//         email: 'phillip.guo@gmail.com',
//         phone:{
//             work:'837-494-3948',
//             cell: '234-897-4933'
//         }
//     },
//     {
//         first_name: 'Mark',
//         last_name: 'Guzdial',
//         email: 'mark.guzdial@gatech.edu',
//         phone:{
//             work:'484-569-3466',
//             cell: '493-485-9845'
//         }
//     }
// ]

// console.log(contact[0].phone.work);

// [{}, {}, {}]
//  0   1  2

const people = { data: [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
],

timestamp: Date.now()

};


// for(let i = 0; i< people.length; i++){

//     console.log(people[i].age);
// }


for (let el of people.data){

    console.log(`${el.name} is ${el.age} years old`);
}


